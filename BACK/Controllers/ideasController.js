import * as ideasModel from '../Models/ideasModel.js' // Import ideas model functions

// Controller to send a new idea
export const sendIdea = async (req, res) => {
    try {
        const { id_coder, id_company, title, description } = req.body;
        // Validate required fields
        if (!id_coder || !id_company) {
            return res.status(400).json({ error: 'The idea must be associated to a company and coder' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description must not to be null' });
        }
        await ideasModel.sendIdea(req.body); // Save idea
        res.status(201).json({ message: "Idea sent successfully" }); // Success response
    } catch (error) {
        if (error.code === '23503') {
            // Handle foreign key error
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' })
        }
        res.status(500).json({ error: "Internal server error" }); // Handle server error
    }
};

// Controller to get all ideas
export const getIdea = async (req, res) => {
    try {
        const coders = await ideasModel.getIdea(); // Fetch all ideas
        res.json(coders); // Send ideas as JSON response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to get ideas by user ID
export const getIdeaByUsers = async (req, res) => {
    try {
        const { id } = req.params; 
        const users = await ideasModel.getIdeasByUserModel(id); // Fetch ideas by user
        res.json(users); // Send ideas as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to get an idea by ID
export const getIdeaById = async (request, response) => {
    try {
        const { id } = request.params;
        const idea = await ideasModel.getIdeaByIdModel(id); // Fetch idea by ID
        if (idea.length === 0) {
            response.status(404).json({ error: 'Idea not found' }) // If not found, send 404
        } else {
            response.status(200).json(idea); // Send idea as JSON response
        }
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: 'server Error' }); // Handle server error
    }
}

// Controller to create a new idea
export const createIdea = async (req, res) => {
    try {
        const { id_coder, id_company, title, description } = req.body;
        // Validate required fields
        if (!id_coder || !id_company) {
            return res.status(400).json({ error: 'The idea must be associated to a company and coder' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description must not to be null' });
        }
        await ideasModel.sendIdea(req.body); // Save idea
        res.status(201).json({ message: "Idea sent successfully" }); // Success response
    } catch (error) {
        if (error.code === '23503') {
            // Handle foreign key error
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' })
        }
        res.status(500).json({ error: "Internal server error" }); // Handle server error
    }
};

// Controller to update an existing idea
export const updateIdea = async (req, res) => {
    try {
        const idea = await ideasModel.putIdeasModel(req.params.id, req.body); // Update idea
        if (!idea) return res.status(404).json({ error: 'Idea not found' }); // If not found, send 404
        res.json(idea); // Success response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to delete an idea
export const deleteIdea = async (req, res) => {
    try {
        const idea = await ideasModel.deleteIdeasModel(req.params.id); // Delete idea by ID
        if (!idea) return res.status(404).json({ error: 'Idea not found' }); // If not found, send 404
        res.json({ message: 'Idea deleted successfully' }); // Success response
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};
