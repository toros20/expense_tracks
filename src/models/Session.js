//const Sequelize = require('sequelize');
import Sequelize from 'sequelize';
//const sequelize = require('../database/database') ;
import { sequelize } from '../database/database';

const mappings = {
    sid:{
        type: Sequelize.STRING,
        primaryKey: true,
    },
    expires: Sequelize.DATE,
    data: Sequelize.STRING(50000),
};

const Session = sequelize.define('Session', mappings ,{
    indexes: [
        {
            name: 'session_sid_index',
            method: 'BTREE',
            fields: ['sid'],
        },
    ],
});

exports.getMapping = () => mappings;

exports.getModel = () => Session;