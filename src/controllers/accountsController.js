import Account from '../models/Account';

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