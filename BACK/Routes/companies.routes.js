import {Router} from "express";

import{getAllCompanies} from "../Controllers/companies.controller.js";

const router = Router();

router.get('/', getAllCompanies);

export default router;