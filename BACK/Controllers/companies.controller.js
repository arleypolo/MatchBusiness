import { getCompaniesModel, getCompanyByIdModel, postCompaniesModel, putCompaniesModel, deleteCompaniesModel } from "../Models/companies.models.js";

// Companies CRUD controller functions

// Controller to get all companies
const getAllCompanies = async (request, response) => {
    try {
        const companies = await getCompaniesModel(); // Fetch all companies
        if (companies.length === 0) {
            response.status(200).json({ message: 'No companies found' }); // If none, send message
        } else {
            response.status(200).json(companies); // Send companies as JSON response
        }
    } catch (error) {
        response.status(500).json({ error: 'server Error' }); // Handle server error
    }
}

// Controller to get a company by ID
const getCompanyById = async (request, response) => {
    try {
        const { id } = request.params;
        const company = await getCompanyByIdModel(id); // Fetch company by ID
        if (company.length === 0) {
            response.status(404).json({ error: 'Company not found' }) // If not found, send 404
        } else {
            response.status(200).json(company); // Send company as JSON response
        }
    } catch (error) {
        response.status(500).json({ error: 'server Error' }); // Handle server error
    }
}

// Controller to create a new company
const createCompany = async (req, res) => {
    try {
        const { id, company_name, sector, description, password } = req.body;
        if (!id || !company_name || !sector || !description || !password) {
            // Validate required fields
            return res.status(400).json({ error: 'All inputs must be have a valid value' })
        }
        const company = await postCompaniesModel(req.body); // Create company
        res.status(201).json({ message: `Company with NIT ${company.id_company} was created succesfully` }); // Success response
    } catch (error) {
        if (error.code === '23505') {
            // Handle duplicate company error
            return res.status(400).json({
                error: 'This company is already created'
            });
        }
        res.status(500).json({ error: 'Internal Server Error controller' }); // Handle server error
    }
};

// Controller to update an existing company
const updateCompany = async (req, res) => {
    try {
        const { company_name, sector, description } = req.body;

        // Validate required fields
        if (!company_name || !sector || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const company = await putCompaniesModel(req.params.id, req.body); // Update company
        if (!company) return res.status(404).json({ error: 'Company not found' }); // If not found, send 404
        res.json({message: `Company ${company.company_name} was updated succesfully`}); // Success response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

// Controller to delete a company
const deleteCompany = async (req, res) => {
    try {
        const company = await deleteCompaniesModel(req.params.id); // Delete company by ID
        if (!company) return res.status(404).json({ error: 'Company not found' }); // If not found, send 404
        res.json({ message: 'Company deleted successfully' }); // Success response
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' }); // Handle server error
    }
};

export {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany,
}