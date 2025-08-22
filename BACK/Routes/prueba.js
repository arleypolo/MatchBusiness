import { Router } from 'express';
import db from './db.js';

const router = Router();

// endpoint de prueba (no toca la BD)
router.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// endpoint de prueba con la BD
router.get('/time', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
