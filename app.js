const express = require ("express");
const sequelize = require("sequelize");
const cors = require ("cors");
const api = express ();
const routes = require("./routes");
const db = require("./database");
const controllers = require("./controllers/psicologosController");

db.checkConnections (); 

api.use(routes);
api.use(express.json())
api.use(cors());
api.listen (3000, ()=> {
    console.log ("API rodando na porta 3000")
});
