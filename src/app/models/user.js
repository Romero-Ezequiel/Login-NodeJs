const mongoose = require('mongoose');
/* Requiero el modulo bcrypt-nodejs este modulo me permite cifrar los datos, 
esto es necesario porque cuando voy a guardar los datos dentro de una base
de datos voy a necesitar cifrarlos para que cualquier persona que pueda acceder
a mi base de datos no pueda leer las contraseñas lo cual, lo hace más seguro.*/
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  }
});

// generando un hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// comprobar si la contraseña es válida
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

// crear el modelo para el usuario y exponerlo a nuestra aplicación
module.exports = mongoose.model('User', userSchema);
