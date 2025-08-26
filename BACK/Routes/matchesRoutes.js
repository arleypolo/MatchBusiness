import { Router } from 'express';
import * as matchesController from '../Controllers/matchesController.js';

const router = Router();

router.get('/:id', matchesController.getMyMatches);
router.post('/', matchesController.createMatch);
router.put('/:id', matchesController.updateMatch);
router.delete('/:id', matchesController.deleteMatch)



export default router;