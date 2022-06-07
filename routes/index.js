const express = require("express");

const psicologosController = require ("../controllers/psicologosController");

const routes = express.Router();


routes.post ("/psicologos", psicologosController.cadastrarPsicologo);
routes.get ("/psicologos", psicologosController.listarPsicologo);
routes.get ("/psicologos/:id", psicologosController.listarPsicologoId);
routes.get ("/psicologos/:nome", psicologosController.listarPsicologoNome);
routes.put ("/psicologos", psicologosController.alterarPsicologo);
routes.delete ("/psicologos", psicologosController.excluirPsicologo);

module.exports = routes;