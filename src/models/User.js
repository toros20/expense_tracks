import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

const User = sequelize.define('users',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullname:{
        type: Sequelize.STRING
    },
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    createdAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt:{
        type:Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    }
   
}, {timestamps: true});

export default User;