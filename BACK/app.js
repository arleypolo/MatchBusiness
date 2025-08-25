import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';
import authLoginRouter from './Routes/authLogin.routes.js';

const app = express();
app.use(cors());
app.use(json());

app.use('/coders', codersRoutes);

app.use('/auth/login',authLoginRouter);

export default app;
