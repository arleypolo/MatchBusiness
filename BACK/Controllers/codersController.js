import * as coderModel from '../Models/coderModel.js' // Import coder model functions

// Controller to get all coders
export const getCoders = async (req, res) => {
    try {
        const coders = await coderModel.getAllCoders(); // Fetch all coders
        res.json(coders); // Send coders as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to get a coder by ID
export const getCoder = async (req, res) => {
    try {
        const coder = await coderModel.getCoderById(req.params.id); // Fetch coder by ID
        if (!coder) return res.status(404).json({ error: 'Coder not found' }); // If not found, send 404
        res.json(coder); // Send coder as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to create a new coder
export const createCoder = async (req, res) => {
    try {
        const coder = await coderModel.createCoder(req.body); // Create coder with request body
        res.status(201).json({ message: `Coder with id ${coder.id_coder} was created succesfully` }); // Success response
    } catch (error) {
        if (error.code === '23505') {
            // Handle duplicate ID error
            return res.status(400).json({ error: 'Coder with this ID already exists.' })
        }
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to update an existing coder
export const updateCoder = async (req, res) => {
    try {
        const { first_name, last_name, phone, cohort, description } = req.body;

        // Validate required fields
        if (!phone || !first_name || !last_name || !cohort || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const coder = await coderModel.updateCoder(req.params.id, req.body); // Update coder
        if (!coder) return res.status(404).json({ error: 'Coder not found' }); // If not found, send 404
        res.json({ message: `Coder with ID ${coder.id_coder} was updated` }); // Success response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to delete a coder
export const deleteCoder = async (req, res) => {
    try {
        const coder = await coderModel.deleteCoder(req.params.id); // Delete coder by ID
        if (!coder) return res.status(404).json({ error: 'Coder not found' }); // If not found, send 404
        res.json({ message: 'Coder deleted successfully' }); // Success response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};
