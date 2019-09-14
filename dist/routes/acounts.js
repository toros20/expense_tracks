"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _accountsController = require("../controllers/accountsController");

var router = (0, _express.Router)();
//create  /api/accounts/
router.post('/', _accountsController.createAccount);
var _default = router;
exports["default"] = _default;