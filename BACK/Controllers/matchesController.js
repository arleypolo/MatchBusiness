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
        const { id_idea, match_date } = req.body;

        if (!id_idea) {
            return res.status(400).json({ error: 'The match must be associated with an idea' });
        }
        if (!match_date) {
            return res.status(400).json({ error: 'Match date must not be null' });
        }

        const newMatch = await matchesModel.postMatchesModel({ id_idea, match_date });

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
