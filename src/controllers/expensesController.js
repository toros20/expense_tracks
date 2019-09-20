import Expense from '../models/Expense';
import Account from '../models/Account';
import  Sequelize from "sequelize";
import Category from '../models/Category';
import { deleteAccount } from './accountsController';

//function to list all the expenses Track
export async function listExpenses(req,res){
    //find the expenses saved for this user
    const expenses = await Expense.findAll({
        where:{
            user_id: req.user.id
        }, include:[{ model:Category, required:true} ],
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
    res.render('expenses/create',{types,categories});
}

//function to create a new Expense Track
export async function createExpense(req,res){

    const {name,details, account,quantity,category_id} = req.body;
    try {
        let newExpense = await Expense.create({
            name,
            details,
            category_id,
            account,
            quantity,
            user_id:req.user.id
        },{
            fields:['name','details','category_id','account','quantity','user_id']
        });

        if(newExpense){

            //get the actual balance os this user
            const balance_A = await Account.findOne({
                where:{
                    user_id:req.user.id,
                    type:account
                },attributes: ['balance']
            });
            
            try {
                const result = await Account.update({
                    balance: parseFloat(balance_A.balance) - parseFloat(quantity)
                },
                {
                    where:{
                        user_id:req.user.id,
                        type:account
                    }
                });
            } catch (error) {
                console.log(error);
                return res.json({
                    message:'Something Wrong Update Account',
                    data:{}
                });
            }

            req.flash('success','Expense Created Successfully');
            res.redirect('/api/expenses/list');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something Wrong Creating New Expense',
            data:{}
        });
    }
}

export async function deleteExpense(req,res){
    const { id } = req.params;
    try {
        const deleteRowCount = await Expense.destroy({
            where:{
                id
            }
        });
        if(deleteRowCount==1){
            req.flash('danger','Expense Deleted Successfully');
            res.redirect('/api/expenses/list');
        }

    } catch (error) {
        res.json({
            message:'something Wrong Deleting Expense',
            count:deleteRowCount
        });
    }
}