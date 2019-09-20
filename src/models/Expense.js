import Sequelize from 'sequelize';

//import object connection
import { sequelize } from '../database/database';

const Expense = sequelize.define('expenses',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING
    },
    details:{
        type: Sequelize.TEXT
    },
    category_id:{
        type:Sequelize.INTEGER
    },
    account:{
        type: Sequelize.STRING
    },
    quantity:{
        type:Sequelize.FLOAT
    },
    user_id:{
        type:Sequelize.INTEGER
    },
    createdAt:{
        type:Sequelize.DATE,
        dafaultValue: Sequelize.NOW
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue:Sequelize.NOW 
    }

}, {timestamps:true});

export default Expense;