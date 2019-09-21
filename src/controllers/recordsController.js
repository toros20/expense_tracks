import Account from '../models/Account';
import Record from '../models/Records';
import Sequelize from 'sequelize';

//function to list all the Incomes by user_id
export async function listRecord(req,res){
   
    //find the records for this user and count
    const records = await Record.findAll({
        where:{
            user_id : req.user.id,
        },
        order:[
            ['id','DESC']
        ]
    });

    res.render('records/list', {records,message: req.flash('success'),message: req.flash('danger')});
}
