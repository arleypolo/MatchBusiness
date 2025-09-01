import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';
import authLoginRouter from './Routes/authLogin.routes.js';
import ideasRoutes from './Routes/ideasRoutes.js';
import companiesRoutes from "./Routes/companies.routes.js";
import matchRoutes from './Routes/matchesRoutes.js'


// Create Express app
const app = express();
app.use(cors()); // Enable CORS for all requests
app.use(json()); // Parse JSON request bodies

app.use('/coders', codersRoutes); // Routes for coders
app.use('/auth',authLoginRouter); // Routes for authentication
app.use('/companies', companiesRoutes ); // Endpoints for companies
app.use('/ideas', ideasRoutes); // Endpoints for ideas
app.use('/companies', companiesRoutes ); // Endpoints for companies (duplicate, can be removed)
app.use('/matches', matchRoutes); // Endpoints for matches

export default app;
