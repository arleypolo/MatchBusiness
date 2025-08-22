import express, { json } from 'express';
import cors from 'cors';
import pruebaRoutes from './Routes/prueba.js'; 

const app = express();
app.use(cors());
app.use(json());

app.use('/prueba', pruebaRoutes);

export default app;
