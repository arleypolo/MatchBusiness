import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';
import companiesRoutes from "./Routes/companies.routes.js";

const app = express();
app.use(cors());
app.use(json());

app.use('/coders', codersRoutes);
app.use('/companies', companiesRoutes );

export default app;
