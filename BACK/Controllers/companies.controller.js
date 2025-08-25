import {getCompaniesModel, getCompanyByIdModel} from "../Models/companies.models.js";

/*
*
* COMPANIES CRUD
*
* */

const getAllCompanies = async (request, response) => {
    try {
        const companies = await getCompaniesModel();
        if (companies.length === 0) {
            response.status(200).json({message: 'No companies found'});
        } else {
            response.status(200).json(companies);
        }
    } catch (error) {
        response.status(500).json({error: error.message});
    }
}

const getCompanyById = async (request, response) => {
    try{
        const {id} = request.params;
        const company = await getCompanyByIdModel(id);
        if (company.length === 0) {
          response.status(404).json({error: 'Company not found'})
        }else{
            response.status(200).json(company);
        }
    }catch(error){
        response.status(500).json({error: error.message});
    }
}


export{
    getAllCompanies,
    getCompanyById,
}