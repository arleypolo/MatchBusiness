import {Router} from 'express';
import * as ideasController from '../Controllers/ideasController.js';

const router = Router();

router.post('/', ideasController.sendIdea);

export default router;