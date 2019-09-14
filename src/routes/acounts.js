import {Router} from 'express';
const router = Router();

import { createAccount } from '../controllers/accountsController';


//create  /api/accounts/
router.post('/',createAccount);




export default router;