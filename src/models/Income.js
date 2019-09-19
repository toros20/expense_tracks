
import Sequelize from 'sequelize';

//import connection objet
import { sequelize } from '../database/database';

const Income = sequelize.define('incomes',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        aotuIncrement: true,
    },
    name:{
        type: Sequelize.STRING
    },
    details:{
        type:Sequelize.TEXT
    },
    quantity:{
        type:Sequelize.FLOAT
    },
    account:{
        type: Sequelize.INTEGER
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

},{timestamps: true});

export default Income;