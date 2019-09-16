import express, { json } from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import methodoverride from 'method-override';

//importing routes
import startRoutes from './routes/start';
import authRoutes from './routes/authentication';
import accountsRoutes from './routes/accounts';
import categoriesRoutes from './routes/categories';

//initializacion
const app = express();
//set the location of view folder
app.set('views', path.join(__dirname,'views'));

//config handlebars  
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers: require('./lib/handlerbars')
}));

//set .hbs as views engine
app.set('view engine','.hbs');

//midellwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(json());
app.use(methodoverride('_method'));//metodo para utilizar peticiones delete y put

//routes
app.use('/',startRoutes);
app.use('/api/authentications',authRoutes);
app.use('/api/accounts',accountsRoutes);
app.use('/api/categories',categoriesRoutes);

//set location to public folder
app.use(express.static(path.join(__dirname, 'public')));

export default app;