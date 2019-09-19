import {Router} from 'express';
const router = Router();

import { startRoutes } from '../controllers/startController';

//route for page start
router.get('/',startRoutes);

export default router;