import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import startRoutes from './routes/start';
import accountsRoutes from './routes/acounts';
import categoriesRoutes from './routes/categories';

//initializacion
const app = express();

//midellwares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/',startRoutes);
app.use('/api/accounts',accountsRoutes);
app.use('/api/categories',categoriesRoutes);


export default app;