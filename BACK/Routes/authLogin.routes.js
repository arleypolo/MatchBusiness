import { Router } from "express";
import { authLogin } from "../Controllers/authLogin.controller.js";


const router = Router();

router.get('/', authLogin)

export default router;