const servisos = require('../models/servisos')

exports.criar = async (req, res) => {
  try {
    const { nome, valor, descricao, fornecedor, email, telefone } = req.body;

    const novo = await servisos.create({
      nome,
      valor,
      descricao,
      fornecedor,
      email,
      telefone
    });

    res.redirect('/servisos');

  } catch (error) {
    res.status(500).send("Erro ao criar: " + error.message);
  }
};

exports.listar = async (req, res) => {
  try {
    const dados = await servisos.findAll();
    res.json(dados);


  } catch (error) {
    res.status(500).send("Erro ao criar: " + error.message);
  }
};

exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;

    await servisos.update(req.body, {
      where: { id }
    });

    res.send('Atualizado');

  } catch (error) {
    res.status(500).send("Erro ao criar: " + error.message);
  }
};

exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;

    await servisos.destroy({
      where: { id }
    });

    res.redirect('/servisos');
  } catch (error) {
    res.status(500).send("Erro ao criar: " + error.message);
  }
};