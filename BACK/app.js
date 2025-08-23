import express, { json } from 'express';
import cors from 'cors';
import pruebaRoutes from './Routes/prueba.js';
import codersRoutes from './Routes/coders.js';
import companiesRoutes from "./Routes/companies.routes.js";

const app = express();
app.use(cors());
app.use(json());

app.use('/prueba', pruebaRoutes);
app.use('/coders', codersRoutes);


app.use('/companies', companiesRoutes ); // endpoints for companies

export default app;
