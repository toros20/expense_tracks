import Sequelize from 'sequelize';

//import object connection
import {sequelize} from '../database/database';
import Account from './Account';

const Record = sequelize.define('records',{

    id  :{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    user_id:{
        type:Sequelize.INTEGER
    },
    account_id:{
        type: Sequelize.INTEGER
    },
    name:{
        type:Sequelize.STRING
    },
    details:{
        type: Sequelize.TEXT
    },
    type_record:{
        type: Sequelize.STRING
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

Account.hasMany(Record, {foreignKey: 'id'})
Record.belongsTo(Account, {foreignKey: 'account_id'})

export default Expense;