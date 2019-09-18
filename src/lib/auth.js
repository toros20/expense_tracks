//module to verificate if the user is authenticated

module.exports = {
    isLoggedIn(req, res, next){
        console.log('MSJ-1');
        if (req.isAuthenticated()){ // if the user if authenticate
            console.log('MSJ-2');
            return next();
        }else{
            console.log('MSJ-3');
            return res.redirect('/api/auth/signin');
        }
    }
};