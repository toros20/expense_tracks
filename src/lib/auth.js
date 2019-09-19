//module to verificate if the user is authenticated

module.exports = {
    isLoggedIn(req, res, next){
      
        if (req.isAuthenticated()){ // if the user if authenticate
          
            return next();
        }else{
          
            return res.redirect('/api/auth/signin');
        }
    }
};