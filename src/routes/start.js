import {Router} from 'express';
const router = Router();

import { startRoutes } from '../controllers/startController';

router.get('/',startRoutes);

export default router;