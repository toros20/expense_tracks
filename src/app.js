import express, { json } from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

//importing routes
import startRoutes from './routes/start';
import accountsRoutes from './routes/acounts';
import categoriesRoutes from './routes/categories';

//initializacion
const app = express();
//set the location of view folder
app.set('views', path.join(__dirname,'views'));
//set handlebars as template engine, 
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('viewa'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlerbars')
}));

app.set('view engine','.hbs');

//midellwares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/',startRoutes);
app.use('/api/accounts',accountsRoutes);
app.use('/api/categories',categoriesRoutes);


export default app;