import Income from '../models/Income';
import Account from '../models/Account';
import Sequelize from 'sequelize';

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

//function to show the form to create a new Incomes
export async function addIncome(req,res){

    //determinar los tipos de cuentas del usuario 
    const types = await Account.findAll({
        attributes: [[Sequelize.literal('DISTINCT type'), 'type']],
        where:{
             user_id : req.user.id
        }
     });

    res.render('incomes/create',{types});
}

export async function createIncome(req,res){
      
}
