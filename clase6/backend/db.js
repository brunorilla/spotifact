/* Este archivo debe ser requerido, unicamente, por los modelos */

const Sequelize = require('sequelize');
const db = new Sequelize('mysql://root:@localhost:3306/spotifact');


module.exports = { Sequelize, db }