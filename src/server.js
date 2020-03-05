/* Requiero el framework express que me va a permitir crear el servidor */
const express = require('express');
//Inicializo mi servidor 
const app = express();
/* Requiero el modulo path que me va a permitir manejar las rutas, es decir
las direcciones, las carpetas dentro del servidor */
const path = require('path');
/* Requiero el modulo mongoose este modulo me va a permitir conectarme
a la base de datos mongodb*/
const mongoose = require('mongoose');
/* Requiero el modulo passport este modulo me va a permitir la autenticacion de
los modulos dentro de mi servidor  */
const passport = require('passport');
/* Requiero el modulo connect-flash me permite mandar mensaje que se almacenan
en el navegador y luego lo podemos pintar en pantalla dependiendo si hugo un
error o no. Es decir, nos va a permitir mandar mensajes cuando el usuario 
cometio un error al iniciar sesion o al registrarse*/
const flash = require('connect-flash');
/* Requiero el modulo morgan me va a permitir poder registrar todas las peticiones
HTTP que llegan al servidor y mostrarlas por consola */
const morgan = require('morgan');
/* Requiero el modulo cookie-parser me permite administrar las cookies del
navegador, es una manera de guardar datos dentro del mismo navegador, lo cual
nos va a servir administrar las sesiones es decir cuando un usuario inicie 
sesion o comprobar si ya esta registrado o no */
const cookieParser = require('cookie-parser');
/* Requiero el modulo body-parser este modulo me va a permitir entender los datos
que llegan del cliente al servidor */
const bodyParser = require('body-parser');
/* Requiero el modulo express-session me permite manejar las sesiones atra vez de 
express, atra vez de las cookies del navegador*/
const session = require('express-session');
/* Le indico un puerto atra vez de process.env.PORT */
const port = process.env.PORT || 3000;

//Configuro la conexion de la BD, importanto la url que se encuentra en la
//carpeta config

const { url } = require('./config/database.js');
//console.log(typeof({ url }));
//console.log( url );

mongoose.connect(url, {
	useMongoClient: true
});

require('./config/passport')(passport);

// Configuro las vistas, indicandole al servidor que estarán dentro de la 
// carpeta views y configuro el motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares 
// Aca le indico que utilice morgan para visualizar las peticiones HTTP en la consola
app.use(morgan('dev'));
app.use(cookieParser());
// utilizo bodyparser para que la informacion que va a recibir de los formularios
// la voy a poder interpretar atra vez de la url y le paso la opcion extended:false
// porque no quiero procesar imagenes solamente quiero procesar datos.
app.use(bodyParser.urlencoded({extended: false}));
// Es para manejar las sesiones de express
app.use(session({
	secret: 'login-nodejs',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// rutas
require('./app/routes.js')(app, passport);

// archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// iniciar el servidor
app.listen(port, () => {
	console.log(`El servidor esta corriendo en http://localhost:${port}`);
});
