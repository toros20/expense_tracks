const passport = require ('passport');//import passport module

//function to show signup form
export async function signup(req,res){
    res.render('auth/signup');
}

//function to make the authentication of user
export async function signupAuth(req,res){
   
    passport.authenticate('local.signup',{
        successRedirect: '/accounts/list',
        failureRedirect: 'auth/signup',
        failureFlash: true
   });
    res.send('recibido');
    console.log(req.body);
}