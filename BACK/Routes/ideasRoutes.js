import {Router} from 'express';
import * as ideasController from '../Controllers/ideasController.js';

const router = Router();

router.post('/', ideasController.sendIdea);
router.get('/', ideasController.getIdea);
router.get('/:id',ideasController.getIdeaById );
router.post('/', ideasController.createIdea);

export default router;