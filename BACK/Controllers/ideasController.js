import * as ideasModel from '../Models/ideasModel.js'

export const sendIdea = async (req, res) => {
    try {
        const { id_coder, id_company, title, description } = req.body;
        if (!id_coder || !id_company) {
            return res.status(400).json({ error: 'The idea must be associated to a company and coder' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description must not to be null' });
        }
        await ideasModel.sendIdea(req.body);
        res.status(201).json({ message: "Idea sent successfully" });
    } catch (error) {
        if (error.code === '23503') {
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' })
        }
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getIdea = async (req, res) => {
    try {
        const coders = await ideasModel.getIdea();
        res.json(coders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getIdeaById = async (request, response) => {
    try {
        const { id } = request.params;
        const idea = await ideasModel.getIdeaByIdModel(id);
        if (idea.length === 0) {
            response.status(404).json({ error: 'Idea not found' })
        } else {
            response.status(200).json(idea);
        }
    } catch (error) {
        console.error(error)
        response.status(500).json({ error: 'server Error' });

    }
}


export const createIdea = async (req, res) => {
    try {
        const { id_coder, id_company, title, description } = req.body;
        if (!id_coder || !id_company) {
            return res.status(400).json({ error: 'The idea must be associated to a company and coder' });
        }
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description must not to be null' });
        }
        await ideasModel.sendIdea(req.body);
        res.status(201).json({ message: "Idea sent successfully" });
    } catch (error) {
        if (error.code === '23503') {
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' })
        }
        res.status(500).json({ error: "Internal server error" });
    }
};


export const updateIdea = async (req, res) => {
    try {
        const idea = await ideasModel.putIdeasModel(req.params.id, req.body);
        if (!idea) return res.status(404).json({ error: 'Idea not found' });
        res.json(idea);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const deleteIdea = async (req, res) => {
    try {
        const idea = await ideasModel.deleteIdeasModel(req.params.id);
        if (!idea) return res.status(404).json({ error: 'Idea not found' });
        res.json({ message: 'Idea deleted successfully' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getIdeasByCoder = async (req, res) => {
    try {
        const { idCoder } = req.params;

        const ideas = await ideasModel.IdeasModel.getIdeasByCoder(idCoder);

        if (ideas.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(ideas);
    } catch (error) {
        console.error("Error en getIdeasByCoder:", error);
        res.status(500).json({ message: "Error al obtener ideas" });
    }
};

