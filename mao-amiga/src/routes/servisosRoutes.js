const express = require('express');
const router = express.Router();
const servisosController = require('../controllers/servisosController');

const path = require('path');

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get("/sobre", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/info.html'));
});

router.get("/cadastro", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/register.html'));
});

router.get("/servisos", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/services.html'));
});

router.get('/api/servisos', servisosController.listar);

router.post('/servisos/enviar', servisosController.criar);

router.get('/servisos/apagar/:id', servisosController.deletar);

module.exports = router;