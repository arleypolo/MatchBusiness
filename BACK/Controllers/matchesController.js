import * as matchesModel from '../Models/matchesModel.js'

export const getMyMatches = async (req, res) => {
    try{
        const match = await matchesModel.getMyMatches(req.params.id);
        if (!match) return res.status(404).json({ error:'match not found' });
        res.json(match);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}