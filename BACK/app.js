import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';
import authLoginRouter from './Routes/authLogin.routes.js';
import ideasRoutes from './Routes/ideasRoutes.js';
import companiesRoutes from "./Routes/companies.routes.js";
import matchRoutes from './Routes/matchesRoutes.js'


const app = express();
app.use(cors());
app.use(json());

app.use('/coders', codersRoutes);
app.use('/auth',authLoginRouter);

app.use('/companies', companiesRoutes ); // endpoints for companies
app.use('/ideas', ideasRoutes);
app.use('/companies', companiesRoutes );
app.use('/matches', matchRoutes);

export default app;
