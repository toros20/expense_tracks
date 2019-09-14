import express, { json} from 'express';
import morgan from 'morgan';

//initializacion
const app = express();

//importing routes
import accountsRoutes from './routes/acounts';
import categoriesRoutes from './routes/categories';

//routes
app.use(accountsRoutes);


//midellwares
app.use(morgan('dev'));
app.use(json());

export default app;