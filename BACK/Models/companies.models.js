import db from '../Routes/db.js'

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

export{
    getCompaniesModel,
    getCompanyByIdModel,
}