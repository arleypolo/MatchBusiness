import db from '../config/db.js';

export const sendIdea = async ({ id_coder, id_company, title, description }) => {
    const queryIdea = `INSERT INTO ideas (id_coder, id_company, title, description)
    VALUES ($1, $2, $3, $4)`
    await db.query(queryIdea, [id_coder, id_company, title, description]);
};

export const getIdea = async () => {
    try {
        const data = await db.query('SELECT * FROM ideas');
        return data.rows; // return rows

    } catch (error) { // handle error
        throw 'Error getting companies: ' + error;
    }
}

export const getIdeasByUserModel = async (id) => {
    try {
        const query = `
        SELECT i.id_coder,c.company_name, i.id_idea, i.title, i.description, i.created_at,
        cod.first_name AS coder_name, cod.last_name AS coder_lastName,
        c.company_name AS company
        FROM ideas i
        JOIN coders cod ON cod.id_coder = i.id_coder
        JOIN companies c ON c.id_company = i.id_company
        WHERE i.id_coder = $1 OR i.id_company = $1
    `;
        const data = await db.query(query, [id]);
        return data.rows;
    } catch (error) {
        throw 'Error getting ideas by coder/company id: ' + error + ' id: ' + id;
    }
};


export const getIdeaByIdModel = async (id) => {
    try {
        const data = await db.query('SELECT * FROM ideas WHERE id_idea = $1', [id]);
        return data.rows;
    } catch (error) {
        throw 'Error getting idea by id: ' + error + ' id: ' + id;
    }
}

export const postIdeaModel = async ({ id_coder, id_company, title, description }) => {
    const queryIdeas = `INSERT INTO ideas (id_coder, id_company, title, description) VALUES ($1, $2, $3, $4) RETURNING *`;
    await company.query(queryIdeas, [id_coder, id_company, title, description]);
};

export const putIdeasModel = async (id, { title, description }) => {
    const query = `UPDATE ideas 
                SET title = $1, description = $2
                WHERE id_idea = $3 RETURNING *`;
    const result = await db.query(query, [title, description, id]);
    return result.rows[0];
};

export const deleteIdeasModel = async (id) => {
    const queryIdea = `DELETE FROM ideas WHERE id_idea = $1 RETURNING *`;
    const result = await db.query(queryIdea, [id]);
    return result.rows[0];
};