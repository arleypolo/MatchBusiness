import { Router } from 'express';
import * as coderController from '../Controllers/codersController.js';

const router = Router();

router.get('/', coderController.getCoders);
router.get('/:id', coderController.getCoder);
router.post('/', coderController.createCoder);
router.put('/:id', coderController.updateCoder);
router.delete('/:id', coderController.deleteCoder);

export default router;
