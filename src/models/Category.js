import Sequelize from 'sequelize';

//import objet connection
import {sequelize} from '../database/database';

const Category = sequelize.define('categories',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: Sequelize.STRING
    },
    icon:{
        type: Sequelize.STRING
    }
},{timestamps:false});

export default Category;