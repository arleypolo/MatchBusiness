import * as ideasModel from '../Models/ideasModel.js'

export const sendIdea = async (req, res) =>  {
    try {
        const { id_coder, id_company, title, description } = req.body;
        if (!id_coder || !id_company){
            return res.status(400).json({ error: 'The idea must be associated to a company and coder' });
        }
        if (!title || !description){
            return res.status(400).json({ error: 'Title and description must not to be null' });
        }
        await ideasModel.sendIdea(req.body);
        res.status(201).json({ message:"Idea sent successfully" });
    } catch (error) {
        if (error.code === '23503'){
            return res.status(400).json({ error: 'The idea is not associated with an active coder or company' })
        }
        res.status(500).json({ error: "Internal server error"});
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

