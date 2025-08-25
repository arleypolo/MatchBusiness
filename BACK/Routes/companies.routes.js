import {Router} from "express";

import {getAllCompanies, getCompanyById, createCompany} from "../Controllers/companies.controller.js";

const router = Router();

router.get('/', getAllCompanies);
router.get('/:id',getCompanyById );
router.post('/', createCompany);

export default router;