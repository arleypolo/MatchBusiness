import * as coderModel from '../Models/coderModel.js'

export const getCoders = async (req, res) => {
    try {
        const coders = await coderModel.getAllCoders();
        res.json(coders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getCoder = async (req, res) => {
    try {
        const coder = await coderModel.getCoderById(req.params.id);
        if (!coder) return res.status(404).json({ error: 'Coder not found' });
        res.json(coder);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createCoder = async (req, res) => {
    try {
        const coder = await coderModel.createCoder(req.body);
        res.status(201).json({ message: `Coder with id ${coder.id_coder} was created succesfully` });
    } catch (error) {
        if (error.code === '23505') {
            return res.status(400).json({ error: 'Coder with this ID already exists.' })
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateCoder = async (req, res) => {
    try {
        const { first_name, last_name, phone, cohort, description } = req.body;

        if (!phone || !first_name || !last_name || !cohort || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const coder = await coderModel.updateCoder(req.params.id, req.body);
        if (!coder) return res.status(404).json({ error: 'Coder not found' });
        res.json({ message: `Coder with ID ${coder.id_coder} was updated` });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteCoder = async (req, res) => {
    try {
        const coder = await coderModel.deleteCoder(req.params.id);
        if (!coder) return res.status(404).json({ error: 'Coder not found' });
        res.json({ message: 'Coder deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
