import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';

const app = express();
app.use(cors());
app.use(json());

app.use('/coders', codersRoutes);

export default app;
