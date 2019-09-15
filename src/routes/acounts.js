import {Router} from 'express';
const router = Router();

import { createAccount,getAccounts } from '../controllers/accountsController';


//create  /api/accounts/
router.post('/',createAccount);
//create  /api/accounts/
router.get('/',getAccounts);




export default router;