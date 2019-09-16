import {Router} from 'express';
const router = Router();

import { createAccount,getAccounts,showAccount,deleteAccount,updateAccount,addAccount,listAccount } 
from '../controllers/accountsController';

//list all the account /api/account/list
router.get('/list',listAccount);
//show form to create account /api/accounts/create
router.get('/create',addAccount);
//create new account  /api/accounts/
router.post('/',createAccount);
//show all accounts  /api/accounts/
router.get('/',getAccounts);
//show one account by id  /api/accounts/id
router.get('/:id',showAccount);
//delete one acocunt by id /api/accounts/id
router.delete('/:id', deleteAccount);
//update one account by id /api/account/id
router.put('/:id',updateAccount);

export default router;