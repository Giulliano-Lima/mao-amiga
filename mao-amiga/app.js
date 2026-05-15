const express = require('express');
const app = express();
const produtoRoutes = require('./src/routes/servisosRoutes');

const db = require('./src/config/database');

db.sync()
  .then(() => console.log('Banco de dados conectado e tabelas sincronizadas!'))
  .catch(err => console.error('Erro ao conectar ao banco:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', produtoRoutes);

app.listen(8081);
    console.log("Servidor rodando na porta http://localhost:8081");