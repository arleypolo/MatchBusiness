import db from '../config/db.js'

const getCompaniesModel = async () => {
    try{
        const data = await db.query('SELECT * FROM companies');
        return data.rows; // return rows

    }catch(error){ // handle error
        throw 'Error getting companies: ' + error;
    }
}

const getCompanyByIdModel = async (id) => {
    try{
        const data = await db.query('SELECT * FROM companies WHERE id_company = $1', [id]);
        return data.rows;
    }catch (error){
        throw 'Error getting company by id: ' + error + ' id: ' + id ;
    }
}

const postCompaniesModel = async ({ id, company_name, sector, description, password}) => {
    const company = await db.connect();
    try {
        await company.query('BEGIN')

        const queryUsers = `INSERT INTO users (id_user, password, id_role, is_active) VALUES ($1, $2, $3, $4) RETURNING *`;
        await company.query(queryUsers, [id, password, 2, true]);

        const queryCompanies = `INSERT INTO companies (id_company, company_name, sector, description) VALUES ($1, $2, $3, $4) RETURNING *`;
        const companyResult = await company.query(queryCompanies, [id, company_name, sector, description]);


        await company.query('COMMIT');
        return companyResult.rows[0];
    } catch (error) {
        await company.query('ROLLBACK');
        throw error;
    } finally {
        company.release();
    }
};


const putCompaniesModel = async (id, { company_name, sector, description }) => {
    const query = `UPDATE companies 
                SET company_name = $1, sector = $2, description = $3
                WHERE id_company = $4 RETURNING *`;
    const result = await db.query(query, [company_name, sector, description, id]);
    return result.rows[0];
};


export{
    getCompaniesModel,
    getCompanyByIdModel,
    postCompaniesModel,
    putCompaniesModel,
}