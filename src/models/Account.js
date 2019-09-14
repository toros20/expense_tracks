//para modelar datos 
import Sequelize from 'sequelize';

//import connection object
import { sequelize } from '../database/database';

sequelize.define('accounts',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    
}
   
);