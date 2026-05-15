const Sequelize = require('sequelize');

const sequelize = new Sequelize('informacoes', 'root', 'ouroot', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;