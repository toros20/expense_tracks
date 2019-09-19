import {Router} from 'express';
const router = Router();
//functions for each route, in incomesController fiel
import {listIncome,addIncome,deleteIncome} 
from '../controllers/incomesController';

//Module to verificated if user is login
const {isLoggedIn} = require('../lib/auth');

//route to show all the incomes api/incomes/list
router.get('/list',isLoggedIn,listIncome);
//show the form to create a new Income, api/incomes/create
router.get('/create', isLoggedIn,addIncome);
//route to create a new income, api/incomes/
//router.post('/',isLoggedIn,createIncome);
//show one Income , api/incomes/id
//router.get('/:id',isLoggedIn,showIncomes);
//route to delete one income by id, api/incomes/id
//router.delete('/:id',isLoggedIn,deleteIncome);
//route to update one income by id
//router.put('/:id',isLoggedIn,updateIncome);

export default router;
