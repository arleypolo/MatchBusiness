import express, { json } from 'express';
import cors from 'cors';
import codersRoutes from './Routes/coders.js';
import ideasRoutes from './Routes/ideasRoutes.js';

const app = express();
app.use(cors());
app.use(json());

app.use('/coders', codersRoutes);
app.use('/ideas', ideasRoutes);

export default app;
