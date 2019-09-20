import Account from '../models/Account';
import Income from '../models/Income';
import Category from '../models/Category';
import Expense from '../models/Expense';

//function to list all the Account created
export async function listAccount(req,res){
    //find the acconuts of this user 
    const accounts = await Account.findAll({
         where: {
            user_id : req.user.id
        }
    });

    res.render('accounts/list',{accounts, messages:req.flash('success')});
   
}

//function to show the form to create account (/api/accounts/create => GET)
export async function addAccount(rea, res){
    res.render('accounts/create');
}


//function to crate a new account (/api/accounst/ => POST)
export async function createAccount(req, res) {

    const { name, details, balance, type, user_id } = req.body;
    try {
        let newAccount = await Account.create({
            name,
            details,
            balance,
            type,
            user_id:req.user.id
        },{
            fields:['name','details','balance','type','user_id']
            }

        );

        if (newAccount) {
            req.flash('success','Account Created Successfully');
            res.redirect('/api/accounts/list');
            /*return res.json({
                messge: 'Account Create Successfully',
                data: newAccount
            });*/
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data:{}
        });
    }

    /*console.log(req.body);
    res.send('datos recibidos');*/
}

//function to get all the accounts (/api/accounts/ => GET)
export async function getAccounts(req, res){
    const accounts = await Account.findAll();
    res.json({
        data:accounts
    });
}

//function to show one account by id  (/api/accounts/:id =>GET)
export async function showAccount(req, res){

    const { id } = req.params;
    //get this account
    const account_A = await Account.findOne({
        where:{
            id
        }
    });
    //get the incomes of this user on this account
    const incomes = await Income.findAll({
        where:{
            account:account_A.type,
            user_id: account_A.user_id

        }
    });
    //get the expense made for this user in this account
    const expenses = await Expense.findAll({
        where:{
            account:account_A.type,
            user_id: account_A.user_id
        }, include:[{ model:Category, required:true} ],
        order:[
            ['id','DESC']
        ]
    });
    res.render('accounts/show',{account_A,incomes,expenses});
}

//function to delete one account by id (/api/accounts/:id => DELETE)
export async function deleteAccount(req , res){
    const { id } = req.params;
    try {
         //return the number od deleted rows
        const deleteRowCount = await Account.destroy({
            where:{
                id
            }
        });
     
        if(deleteRowCount==1){
            req.flash('danger','Account Deleted Successfully');
            res.redirect('/api/accounts/list');
        }
    } catch (error) {
        res.json({
            message: 'something Wrong in Delete action',
            count:deleteRowCount
        });
    }
   
    
}

//function to update one account by id (/api/accounts/:id => PUT)
export async function updateAccount(req,res){

    const { id } = req.params;
    const {name,details,balance,type,user_id} = req.body;

    try { 
        const result = await Account.update({
            name,
            details,
            balance,
            type,
            user_id,
        },
        {
            where:{id}
        }
        );

        if(result){
             req.flash('update','Account Updated Successfully');
             res.redirect('/api/accounts/list');
        }
       
        
    }catch(erro){
        console.log(erro);
        return res.json({
            message: 'Something Wrong in Update',
            data:{}
        });
    }
}

//function to show the form to update an account
export async function editAccount(req,res){
    const { id } = req.params;
    try {
         const account = await Account.findOne({
            where:{
                id
            }
        });
        //console.log(account.balance);
        res.render('accounts/edit',{account});
    } catch (error) {
        console.log(error);
    }
   
}