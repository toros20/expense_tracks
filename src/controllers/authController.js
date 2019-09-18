//const passport = require ('passport');//import passport module
import passport from 'passport';
const passportHelper = require('../lib/passport');

//function to show signup form
export async function signup(req,res){
    res.render('auth/signup');
}

//funtion toshow start page
export async function homeAuth(req,res){
    res.render('auth/home');
}

//function to show SignIn form
export async function signinAuth(req,res){
    res.render('auth/signin');
}

//function to make the authentication of user
/*export async function signupAuth(req,res){
  
    passport.authenticate('local.signup',{
    successRedirect: '/accounts/list',
    failureRedirect: 'auth/signup',
    failureFlash: true
   });
   
    res.send('recibido');
    console.log(req.body);
}*/