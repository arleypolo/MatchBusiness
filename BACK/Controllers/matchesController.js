import * as matchesModel from '../Models/matchesModel.js' // Import matches model functions

// Controller to get matches for a specific user by ID
export const getMyMatches = async (req, res) => {
    try {
        const match = await matchesModel.getMyMatches(req.params.id); // Fetch matches by user ID
        if (!match) return res.status(404).json({ error: 'match not found' }); // If not found, send 404
        res.json(match); // Send matches as JSON response
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
}

// Controller to get all matches
export const getMatches = async (req, res) => {
    try {
        const matches = await matchesModel.getMatches(); // Fetch all matches
        res.json(matches); // Send matches as JSON response
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
}

// Controller to create a new match
export const createMatch = async (req, res) => {
    try {
        const { id_idea } = req.body;

        if (!id_idea) {
            // Validate required field
            return res.status(400).json({ error: 'The match must be associated with an idea' });
        }
        const newMatch = await matchesModel.postMatchesModel({ id_idea }); // Create match

        res.status(201).json({
            message: "Match created successfully",
            match: newMatch
        });

    } catch (error) {
        if (error.code === '23503') { // Handle foreign key error
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' });
        }
        console.error("Error creating match:", error);
        res.status(500).json({ error: "Internal server error" }); // Handle server error
    }
};

// Controller to update an existing match
export const updateMatch = async (req, res) => {
    try {
        const match = await matchesModel.putMatchesModel(req.params.id, req.body); // Update match
        if (!match) return res.status(404).json({ error: 'Match not found' }); // If not found, send 404
        res.json(match); // Success response
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to delete a match
export const deleteMatch = async (req, res) => {
    try {
        const match = await matchesModel.deleteMacthesModel(req.params.id); // Delete match by ID
        if (!match) return res.status(404).json({ error: 'Match not found' }); // If not found, send 404
        res.json({ message: 'Match deleted successfully' }); // Success response
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};
