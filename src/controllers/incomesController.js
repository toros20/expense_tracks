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
     //console.log('MY ACCOUNT:'+myaccounts);
    res.render('incomes/create',{types});
}

//function to create a new income
export async function createIncome(req,res){
      console.log(req.body);
    const {name,details,quantity,account} = req.body;
    try {
        let newIncome = await Income.create({
            name,
            details,
            quantity,
            account,
            user_id:req.user.id
        },{
            fields:['name','details','quantity','account','user_id']
        });

        if(newIncome){

            req.flash('success','Income Created Successfully');
            res.redirect('/api/incomes/list');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Somthing Wrong Creating New Income',
            data:{}
        });
    }

}
