import {Router} from 'express';
const router = Router();

import {signup} from '../controllers/authController';

//route to show the form to register /api/auth/signup 
router.get('/signup',signup);


export default router;