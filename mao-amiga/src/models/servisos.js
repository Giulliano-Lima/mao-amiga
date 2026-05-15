const Sequelize = require('sequelize');
const db = require('../config/database');

const servisos = db.define('servisos', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: Sequelize.STRING,
  valor: Sequelize.DECIMAL(10, 2),
  descricao: Sequelize.TEXT,
  fornecedor: Sequelize.STRING,
  email: Sequelize.STRING,
  telefone: Sequelize.STRING
}, {
  freezeTableName: true
});

module.exports = servisos;