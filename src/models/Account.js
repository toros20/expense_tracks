//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const Account = sequelize.define('accounts',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: Sequelize.TEXT,
    },
    details:{
        type:Sequelize.TEXT
    },
    balance:{
        type:Sequelize.FLOAT
    },
    type:{
        type:Sequelize.TEXT
    },
    user_id:{
        type:Sequelize.INTEGER
    },
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        
    }

},{timestamps:true });

export default Account;