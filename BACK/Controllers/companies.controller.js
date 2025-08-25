import { getCompaniesModel, getCompanyByIdModel, postCompaniesModel, putCompaniesModel, deleteCompaniesModel } from "../Models/companies.models.js";

/*
*
* COMPANIES CRUD
*
* */

const getAllCompanies = async (request, response) => {
    try {
        const companies = await getCompaniesModel();
        if (companies.length === 0) {
            response.status(200).json({ message: 'No companies found' });
        } else {
            response.status(200).json(companies);
        }
    } catch (error) {
        response.status(500).json({ error: 'server Error' });
    }
}

const getCompanyById = async (request, response) => {
    try {
        const { id } = request.params;
        const company = await getCompanyByIdModel(id);
        if (company.length === 0) {
            response.status(404).json({ error: 'Company not found' })
        } else {
            response.status(200).json(company);
        }
    } catch (error) {
        response.status(500).json({ error: 'server Error' });
    }
}

const createCompany = async (req, res) => {
    try {
        const {id, company_name, sector, description, password} = req.body;
        if (!id || !company_name || !sector || !description || !password){
            // Empty inputs error
            return res.status(400).json({error:'All inputs must be have a valid value'})
        }
        const company = await postCompaniesModel(req.body);
        res.status(201).json(company);
    } catch (error) {
        console.error('Error detallado: ', error);
        if (error.code === '23505') {
            // Duplicated password error
            return res.status(400).json({
                error: 'This company is already created'
            });
        }
        res.status(500).json({ error: 'Internal Server Error controller' });
    }
};

const updateCompany = async (req, res) => {
    try {
        const company = await putCompaniesModel(req.params.id, req.body);
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const company = await deleteCompaniesModel(req.params.id);
        if (!company) return res.status(404).json({ error: 'Company not found' });
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



export {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
}