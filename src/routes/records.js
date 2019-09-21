import {Router} from 'express';
const router = Router();

import {listRecord} 
from  '../controllers/recordsController';

//module to verificated users are login
const {isLoggedIn} = require('../lib/auth');

//route to show all the records
router.get('/list/:id',isLoggedIn,listRecord);

export default router;