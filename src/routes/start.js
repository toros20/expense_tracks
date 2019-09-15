import {Router} from 'express';
const router = Router();

import { start } from '../controllers/startController';

router.get('/',start);

export default router;