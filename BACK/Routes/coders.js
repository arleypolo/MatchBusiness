import { Router } from 'express';
import * as coderController from '../Controllers/codersController.js';
import {authenticateToken, authorizeCoder, authorizeCompanyOrCoder} from '../Middleware/authMiddleware.js'

const router = Router();

router.get('/', authenticateToken, authorizeCompanyOrCoder, coderController.getCoders);
router.get('/:id', authenticateToken, authorizeCoder, coderController.getCoder);
router.post('/', authenticateToken, authorizeCoder, coderController.createCoder);
router.put('/:id', authenticateToken, authorizeCoder, coderController.updateCoder);
router.delete('/:id', authenticateToken, authorizeCoder, coderController.deleteCoder);

export default router;