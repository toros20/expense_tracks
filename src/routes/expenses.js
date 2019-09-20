import {Router} from 'express';
const router = Router();

import {listExpenses,addExpense,createExpense,deleteExpense,updateExpense} 
from  '../controllers/expensesController';

//module to verificated users are login
const {isLoggedIn} = require('../lib/auth');

//route to show all the expenses
router.get('/list',isLoggedIn,listExpenses);

//route to show the form to create a new Expense /api/expenses/create
router.get('/create',isLoggedIn,addExpense);

//route to save the new expense /api/expenses/
router.post('/',isLoggedIn,createExpense);

//route  to show one especific expense
//router.get('./:id',isLoggedIn,showExpense);

//route to delete an especific expense
//router.delete('./:id',isLoggedIn,deleteExpense);

//route to update an especific expense
//router.put('/:id',isLoggedIn,updateExpense);

export default router;