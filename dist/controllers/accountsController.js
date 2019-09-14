"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccount = createAccount;

function createAccount(req, res) {
  console.log(req.body);
  res.send('datos recibidos');
}