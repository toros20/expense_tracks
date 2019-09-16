import Account from '../models/Account';
//Create CRUD to Accounts

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
            user_id,
        },{
            fields:['name','details','balance','type','user_id']
            }
        
        );

        if (newAccount) {
            return res.json({
                messge: 'Account Create Successfully',
                data: newAccount
            });
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
    const account = await Account.findOne({
        where:{
            id
        }
    });
    res.json({
        data:account
    });
}

//function to delete one account by id (/api/accounts/:id => DELETE)
export async function deleteAccount(req , res){
    const { id } = req.params;
    //return the number od deleted rows
    const deleteRowCount = await Account.destroy({
        where:{
            id
        }
    });
    res.json({
        message: 'Account Delete Successfully',
        count:deleteRowCount
    });
}

//dunction to update one account by id (/api/accounts/:id => PUT)
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

        return res.json({
            message: 'Account Updated Successfully',
            data:result
        });
        
    }catch(erro){
        console.log(erro);
        return res.json({
            message: 'Something Wrong in Update',
            data:{}
        });
    }
}