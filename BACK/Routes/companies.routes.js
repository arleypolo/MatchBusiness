import {Router} from "express";

import {getAllCompanies, getCompanyById, createCompany, updateCompany} from "../Controllers/companies.controller.js";

const router = Router();

router.get('/', getAllCompanies);
router.get('/:id',getCompanyById );
router.post('/', createCompany);
router.put('/:id', updateCompany);

export default router;