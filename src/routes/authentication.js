import {Router} from 'express';
import passport from 'passport';
const router = Router();

import {signup,signupAuth,homeAuth,signinAuth} from '../controllers/authController';

//route to show the form to register /api/auth/signup 
router.get('/signup',signup);

//route to show sign In form
router.get('/signin',signinAuth);

//route when register/signup is ok
router.get('/home',homeAuth);

//route to sigun the register /api/auth/signup 
//router.post('/signup',signupAuth);

router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: 'home',
    failureRedirect: '/signup',
    failureFlash: true
}));

//route and function to make the signin by post
router.post('/signin',(req,res,next) => {
    passport.authenticate('local.signin',{
    successRedirect: 'home',
    failureRedirect:'signin',
    failureFlash:true
    })(req,res,next)
});

//route to doing logout
router.get('/logout', (req,res) => {
    req.logOut();
    res.redirect('/api/auth/signin');
});

export default router;