"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Account = _database.sequelize.define('accounts', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  detail: {
    type: _sequelize["default"].TEXT
  },
  balance: {
    type: _sequelize["default"].FLOAT
  },
  type: {
    type: _sequelize["default"].TEXT
  },
  user_id: {
    type: _database.sequelize.INTEGER
  }
}, {
  timestamps: false
});

var _default = Account;
exports["default"] = _default;