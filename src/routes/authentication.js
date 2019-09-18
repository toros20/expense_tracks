import {Router} from 'express';
const router = Router();

import {signup,signupAuth} from '../controllers/authController';

//route to show the form to register /api/auth/signup 
router.get('/signup',signup);

//route to sigun the register /api/auth/signup 
router.post('/signup',signupAuth);


export default router;