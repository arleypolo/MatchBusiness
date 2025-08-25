import {Router} from "express";

import {getAllCompanies, getCompanyById} from "../Controllers/companies.controller.js";

const router = Router();

router.get('/', getAllCompanies);
router.get('/:id',getCompanyById );

export default router;