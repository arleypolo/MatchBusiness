import * as matchesModel from '../Models/matchesModel.js'

export const getMyMatches = async (req, res) => {
    try {
        const match = await matchesModel.getMyMatches(req.params.id);
        if (!match) return res.status(404).json({ error: 'match not found' });
        res.json(match);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getMatches = async (req, res) => {
    try {
        const matches = await matchesModel.getMatches();
        res.json(matches);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createMatch = async (req, res) => {
    try {
        const { id_idea } = req.body;

        if (!id_idea) {
            return res.status(400).json({ error: 'The match must be associated with an idea' });
        }
        const newMatch = await matchesModel.postMatchesModel({ id_idea });

        res.status(201).json({
            message: "Match created successfully",
            match: newMatch
        });

    } catch (error) {
        if (error.code === '23503') { // clave foránea inválida
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' });
        }
        console.error("Error creating match:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updateMatch = async (req, res) => {
    try {
        const match = await matchesModel.putMatchesModel(req.params.id, req.body);
        if (!match) return res.status(404).json({ error: 'Match not found' });
        res.json(match);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const deleteMatch = async (req, res) => {
    try {
        const match = await matchesModel.deleteMacthesModel(req.params.id);
        console.log(match)
        console.log(!!match)
        if (!match) return res.status(404).json({ error: 'Match not found' });
        res.json({ message: 'Match deleted successfully' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
