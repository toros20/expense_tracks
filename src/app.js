import express, { json } from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';
import methodoverride from 'method-override';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import passport from 'passport';

var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

//importing routes
import startRoutes from './routes/start';
import authRoutes from './routes/authentication';
import accountsRoutes from './routes/accounts';
import categoriesRoutes from './routes/categories';
import { sequelize } from './database/database';

//import fom lib folder
require ('./models/Session');
require ('./lib/passport');

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
//inicio de almacenar las cookies en la db
app.use(cookieParser());
var myStore = new SequelizeStore({
    db:sequelize
})
app.use(session({
    secret: 'expensetracks', 
    store: myStore,
    resave: false,
    saveUninitialized:false,
}));
myStore.sync();
//fin de almacenar las cookies en db

app.use(flash());

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(json());
app.use(methodoverride('_method'));//metodo para utilizar peticiones delete y put
//passport module
app.use(passport.initialize());//inicializamos el modulo passport
app.use(passport.session());//save the new session


//Global Variables
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.danger = req.flash('danger');
    app.locals.update = req.flash('update');
    next();
});


//routes
app.use('/',startRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/accounts',accountsRoutes);
app.use('/api/categories',categoriesRoutes);

//set location to public folder
app.use(express.static(path.join(__dirname, 'public')));

export default app;