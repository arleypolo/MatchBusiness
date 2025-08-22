import { Router } from 'express';
import db from './db.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM coders');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching coders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM coders WHERE id_coder = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Coder not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching coder:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { id, first_name, last_name, phone, cohort, description, password } = req.body;
    
    
    const client = await db.connect();

    try {
        await client.query('BEGIN');

        const queryUsers = `INSERT INTO users (id_user, password, id_role, is_active) VALUES ($1, $2, $3, $4) RETURNING *`;
        const userResult = await client.query(queryUsers, [id, password, 1, true]);

        const queryCoders = `INSERT INTO coders (id_coder, first_name, last_name, phone, cohort, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const coderResult = await client.query(queryCoders, [id, first_name, last_name, phone, cohort, description]);
        
        await client.query('COMMIT');
        res.status(201).json(coderResult.rows[0]);
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Error creating coder:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        client.release();
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, phone, cohort, description } = req.body;

    try {
        const query = `UPDATE coders SET first_name = $1, last_name = $2, phone = $3, cohort = $4, description = $5 WHERE id_coder = $6 RETURNING *`;
        const result = await db.query(query, [first_name, last_name, phone, cohort, description, id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Coder not found' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating coder:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const query = `DELETE FROM coders WHERE id_coder = $1 RETURNING *`;
        const result = await db.query(query, [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Coder not found' });
        }
        
        res.json({ message: 'Coder deleted successfully' });
    } catch (error) {
        console.error('Error deleting coder:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;