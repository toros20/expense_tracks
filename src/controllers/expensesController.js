import Expense from '../models/Expense';
import Account from '../models/Account';
import  Sequelize from "sequelize";
import Category from '../models/Category';

//function to list all the expenses Track
export async function listExpenses(req,res){
    //find the expenses saved for this user
    const expenses = await Expense.findAll({
        where:{
            user_id: req.user.id
        },
        order:[
            ['id','DESC']
        ]
    });
    res.render('expenses/list', {expenses,message:req.flash('success'),message:req.flash('danger')});
}

//function to show the form to create a new expense 
export async function addExpense(req,res){
    //find all the money account own of this user
    const types = await Account.findAll({
        attributes: [[Sequelize.literal('DISTINCT type'),'type']],
        where:{
            user_id:req.user.id
        }
    });

    const categories= await Category.findAll();
    res.render('expenses/create'),{type,categories};
}
