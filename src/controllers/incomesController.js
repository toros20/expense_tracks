import Income from '../models/Income';
import Account from '../models/Account';
import Sequelize from 'sequelize';
import Record from '../models/Records';

//function to list all the Incomes by user_id
export async function listIncome(req,res){
    //find the incomes for this user
    const incomes = await Income.findAll({
        where:{
            user_id : req.user.id
        },
        order:[
            ['id','DESC']
        ]
    });

    res.render('incomes/list', {incomes,message: req.flash('success'),message: req.flash('danger')});
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
            try{
                 //save the income in records table
                let newRecord = await Record.create({
                    user_id:req.user.id,
                    account,
                    name,
                    details,
                    quantity,
                    type_record: 'Income'
                },{
                    fields:['name','details','quantity','account','user_id','type_record']
                })
            }catch (e){
                console.log(e);
                return res.json({
                    message: 'Something Wrong inserting record',
                    data:{}
                });
            }
           
            
            //get the actual balance of the account of this user
            const balance_A = await Account.findOne({
                where:{
                    user_id:req.user.id,
                    type:account
                },  attributes: ['balance'],
            });
          
            //update the balance
            try {
                const result = await Account.update({
                    balance: parseFloat(balance_A.balance) + parseFloat(quantity)
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
                    message: 'Something Wrong in Update',
                    data:{}
                });
            }

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

export async function deleteIncome(req,res){
    const { id } = req.params;
    try {
        const deleteRowCont = await Income.destroy({
            where:{
                id
            }
        });
        if(deleteRowCont==1){
            req.flash('danger','Income Deleted Successfully');
            res.redirect('/api/incomes/list');
        }
    } catch (error) {
        res.json({
            message:'Something Wrong in Delete Income',
            count:deleteRowCont
        });
    }
}
