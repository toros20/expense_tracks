import {Router} from 'express';
const router = Router();

import { createAccount,getAccounts,showAccount } from '../controllers/accountsController';


//create new account  /api/accounts/
router.post('/',createAccount);
//show all accounts  /api/accounts/
router.get('/',getAccounts);
//show one account by id  /api/accounts/id
router.get('/:id',showAccount);


export default router;