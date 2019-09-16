import {Router} from 'express';
const router = Router();

import { createAccount,getAccounts,showAccount,deleteAccount,updateAccount } 
from '../controllers/accountsController';


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