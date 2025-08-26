import { Router } from 'express';
import * as matchesController from '../Controllers/matchesController.js';

const router = Router();

router.get('/:id', matchesController.getMyMatches);
router.post('/', matchesController.createMatch);

export default router;