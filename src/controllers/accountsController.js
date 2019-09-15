import Account from '../models/Account';

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