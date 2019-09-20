import Sequelize from 'sequelize';
import Category from './Category';

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

Category.hasMany(Expense, {foreignKey: 'id'})
Expense.belongsTo(Category, {foreignKey: 'category_id'})

export default Expense;