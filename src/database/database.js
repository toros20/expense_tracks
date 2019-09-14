import Sequelize from 'sequelize';
//create cadena de conexion
export const sequelize = new Sequelize(
    'expense_tracks',
    'postgres',
    'sistemas20',
    {
        host:'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        }
    }
);