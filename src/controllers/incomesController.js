import Income from '../models/Income';

//module to verificated if the user is login
const {isLoggedIn} = require('../lib/auth');

//function to list all the Incomes by user_id
export async function listIncome(req,res){
    //find the incomes for this user
    const incomes = await Income.findAll({
        where:{
            user_id : req.user.id
        }
    });

    res.render('incomes/list', {incomes,message: req.flash('success')});
}