
const passport = require('passport');
const LocalStrategy = require('passport-local');
import User from '../models/User';
const helpers = require ('./handlerbars'); // import the helpers

//function to register a new user 
passport.use('local.signup',new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback:true
}, async (req, username, password, done) => {

    const {fullname} = req.body;
    //encrypt the password
    password = await helpers.encyptPassword(password);

    try {
        const newUser = await User.create(  {
        username,
        password,
        fullname
        }, {
            fields:['fullname','username','password']
        } );
        console.log(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Error in sigunup Process",
            data:{}
        });
    }
    //console.log(req.body);
    //done();
}
));

//session to user
/* passport.serializeUser((user,done) =>{

} ); */