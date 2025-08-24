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
        res.status(201).json(coder);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const updateCoder = async (req, res) => {
    try {
        const coder = await coderModel.updateCoder(req.params.id, req.body);
        if (!coder) return res.status(404).json({ error: 'Coder not found' });
        res.json(coder);
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
