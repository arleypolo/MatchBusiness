import {Router} from "express";

import {getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany} from "../Controllers/companies.controller.js";

const router = Router();

router.get('/', getAllCompanies);
router.get('/:id',getCompanyById );
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany)

export default router;