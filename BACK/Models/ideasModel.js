import db from '../config/db.js';

export const sendIdea = async ({ id_coder, id_company, title, description }) => {
    const queryIdea = `INSERT INTO ideas (id_coder, id_company, title, description)
    VALUES ($1, $2, $3, $4)`
    await db.query(queryIdea, [id_coder, id_company, title, description]);
};

export const getIdea = async () => {
    try{
        const data = await db.query('SELECT * FROM ideas');
        return data.rows; // return rows

    }catch(error){ // handle error
        throw 'Error getting companies: ' + error;
    }
}

export const getIdeaByIdModel = async (id) => {
    try{
        const data = await db.query('SELECT * FROM ideas WHERE id_idea = $1', [id]);
        return data.rows;
    }catch (error){
        throw 'Error getting idea by id: ' + error + ' id: ' + id ;
    }
}

export const postIdeaModel = async ({ id_coder, id_company, title, description}) => {
    const company = await db.connect();
    try {
        await company.query('BEGIN')

        const queryIdeas = `INSERT INTO ideas (id_coder, id_company, title, description) VALUES ($1, $2, $3, $4) RETURNING *`;
        await company.query(queryIdeas, [id_coder, id_company, title, description ]);

        await company.query('COMMIT');
        return companyResult.rows[0];
    } catch (error) {
        await company.query('ROLLBACK');
        throw error;
    } finally {
        company.release();
    }
};