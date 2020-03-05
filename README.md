# Login con MongoDB

Realice un login con NodeJs, el cual me permite iniciar sesión en caso de tener una cuenta guardada en una base de datos, o
registrarme en caso de no tener una cuenta. Además al logearse correctamente me muestra una vista del perfil de cada usuario, 
mostrandome algunos datos que los traigo de la base de datos.

### Construido con 🛠️

  _El login está realizada con lo siguiente:_

* [NodeJs](https://nodejs.org/es/) - Es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [Express](https://expressjs.com/es/) - Es un framework de nodejs que nos permite crear un servidor de manera muy sencilla.
* [morgan](https://www.npmjs.com/package/morgan) - Este modulo me permite registrar todas las peticiones HTTP que llegan al servidor y mostrarlas en consola.
* [nodemon](https://nodemon.io/) - Este modulo me permite monitorear el proyecto, de tal manera que no tengo que estar reiniciando el servidor cada vez que realice un cambio.
* [body-parser](https://www.npmjs.com/package/body-parser) - Este modulo nos permite poder entender los datos que llegan del cliente al servidor.
* [express-session](https://www.npmjs.com/package/express-session) - Este modulo nos va a permitir poder manejar las sesiones atra vez de express.
* [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Este modulo nos va a permitir administrar las cookies del navegador, nos sirve para poder administrar las sesiones.
* [connect-flash](https://www.npmjs.com/package/connect-flash) - Este modulo nos va a permitir mandar mensajes que se almacenen en el cliente y luego lo podemos mostrar en pantalla.
* [passport](http://www.passportjs.org/) - Este modulo me permite autenticar los modulos dentro de mi servidor.
* [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt) - Este modulo nos va a permitir cifrar los datos.
* [mongoose](https://mongoosejs.com/) - Este modulo nos va a permitir conectarnos a mongoDB y nos proporciona la caracteristica de poder definir nuestros datos en la base de datos.
* [EJS](https://ejs.co/) - Es un motor de plantillas muy popular de JavaScript.
* [Bootstrap](https://getbootstrap.com/) -  Utilice la CDN de bootstrap para realizar algunos estilos.

### Instalación 🔧

_Para la instalación del proyecto del login, se tiene que ejecutar en la consola el siguiente comando: Para poder descargar
todas las dependencias y modulos que utilice._ 
```
npm install
```
_Una vez de instalar todas las dependencias y modulos que utilice tengo que realizar la importacón del archivo `usuarios.json` en
una base de datos MongoDB. Para eso tengo que utilizar el siguiente comando:_ 
```
mongoimport --db nombre_de_la_BD --collection nombre_de_la_colección --el_archivo_.JSON
```


_Para ejecutar el proyecto del login se tiene que ejecutar el siguiente comando:_
```
npm run dev
```


### _Demo_


### Autor ✒️

* **Ezequiel Romero** - *_Trabajo Inicial_* 
