import {Router} from 'express';
const router = Router();

import { createAccount,getAccounts,showAccount,deleteAccount,updateAccount,addAccount,listAccount,editAccount } 
from '../controllers/accountsController';

//module to verificated user is LogIn
const { isLoggedIn } = require('../lib/auth');

//list all the account /api/account/list
router.get('/list',isLoggedIn,listAccount);
//show form to create account /api/accounts/create
router.get('/create',isLoggedIn,addAccount);
//create new account  /api/accounts/
router.post('/',isLoggedIn,createAccount);
//show all accounts  /api/accounts/
router.get('/show/:id',isLoggedIn,showAccount);
//show one account by id  /api/accounts/id
router.get('/:id',isLoggedIn,showAccount);
//delete one acocunt by id /api/accounts/id
router.delete('/:id',isLoggedIn, deleteAccount);
//show form to edit account by id /api/account/edit/id
router.get('/edit/:id',isLoggedIn,editAccount);
//update one account by id /api/account/id
router.put('/:id',isLoggedIn,updateAccount);

export default router;