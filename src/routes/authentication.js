import {Router} from 'express';
import passport from 'passport';
const router = Router();

import {signup,signupAuth,homeAuth} from '../controllers/authController';

//route to show the form to register /api/auth/signup 
router.get('/signup',signup);

//route to sigun the register /api/auth/signup 
//router.post('/signup',signupAuth);

router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: 'home',
    failureRedirect: '/signup',
    failureFlash: true
}));

//route when register/signup is ok
router.get('/home',homeAuth);


export default router;