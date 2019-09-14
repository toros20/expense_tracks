//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Account = sequelize.define('accounts',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.TEXT,
    },
    detail:{
        type:Sequelize.TEXT
    },
    balance:{
        type:Sequelize.FLOAT
    },
    type:{
        type:Sequelize.TEXT
    },
    user_id:{
        type:sequelize.INTEGER
    }

},{timestamps:false });

export default Account;