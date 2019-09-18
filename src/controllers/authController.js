

export async function signup(req,res){
    res.render('auth/signup');
}

export async function signupAuth(req,res){
    res.send('recibido');
    console.log(req.body);
}