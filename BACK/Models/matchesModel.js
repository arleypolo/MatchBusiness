import db from '../config/db.js';

export const getMyMatches = async (id) => {
    const queryMatches = `SELECT id_match, cod.first_name as coder_name, c.company_name as company,cod.last_name as coder_lastName, title, i.description, company_name as company, created_at, match_status, match_date FROM matches m
    JOIN ideas i ON m.id_idea = i.id_idea
    JOIN companies c ON c.id_company = i.id_company
    JOIN coders cod ON cod.id_coder = i.id_coder
    WHERE i.id_coder = $1 OR i.id_company = $1`
    const result = await db.query(queryMatches, [id]);
    return result.rows;
}

export const getMatches = async () => {
    const queryAllMatches = `SELECT id_match, cod.first_name as coder_name, cod.last_name as coder_lastName, c.company_name as company, title, i.description, company_name as company, created_at, match_status, match_date FROM matches m
    JOIN ideas i ON m.id_idea = i.id_idea
    JOIN companies c ON c.id_company = i.id_company
    JOIN coders cod ON cod.id_coder = i.id_coder`
    const result = await db.query(queryAllMatches);
    return result.rows;
}

export const postMatchesModel = async ({ id_idea }) => {
    const query = `INSERT INTO matches (id_idea, match_status) 
                   VALUES ($1, $2) RETURNING *`;
    
    const result = await db.query(query, [id_idea, 'Accepted']);
    return result.rows[0]; 
};

export const putMatchesModel = async (id, { match_status }) => {
    const query = `UPDATE matches 
                SET match_status = $1
                WHERE id_idea = $2 RETURNING *`;
    await db.query(query, [ match_status, id]);
};

export const deleteMacthesModel = async (id) => {
    const queryMatch = `DELETE FROM matches WHERE id_match = $1 RETURNING *`;
    const result = await db.query(queryMatch, [id]);
    return result.rows[0];
};

