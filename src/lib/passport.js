import passport from 'passport';// import passport module
const LocalStrategy = require('passport-local').Strategy;

import User from '../models/User';
const helpers = require('./handlerbars'); // import the helpers

//function to signIn 
passport.use('local.signin', new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req,username, password, done ) => {
    const user = await User.findOne({
        where:{
            username
        }
    })
    
    if(user){
        const validPassword = await helpers.matchPassword(password,user.password);
    
        if (validPassword){
            done(null,user, req.flash('success','Wellcome ' + user.fullname));
        }else{
            done(null,false,req.flash('danger','Incorrect Password'));
        }
    }else{
        return done(null,false,req.flash('danger','The Username does not exists'));
    }
}));


//function to register a new user 
passport.use('local.signup',new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
   
    const {fullname} = req.body;
    //encrypt the password
    password = await helpers.encryptPassword(password);

    try {
        const newUser = await User.create(  {
        username,
        password,
        fullname
        }, {
            fields:['fullname','username','password']
        } );
       
        return done(null, newUser);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Error in signup Process",
            data:{}
        });
    }

}));

//session to user
 passport.serializeUser((user,done) => {
    done(null,user.id);
} ); 

passport.deserializeUser(async (id, done) => {
    const row = await User.findOne({
        where:{
            id
        }
    });
    console.log('aqiiii');
    console.log(row);
    done(null,row);
});