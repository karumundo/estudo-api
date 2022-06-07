const sequelize = require("sequelize");
const PORT = 3306;
const HOSTNAME = "localhost";
const sua_senha = "Hardc0reMac";

const DATABASE_NAME = "default_schema"; 
const USER_NAME  = "root";
const PASSWORD = sua_senha;
const DB_SETUP = {
    dialect: "mysql",
    host: HOSTNAME,
    port: PORT,
    define: {
        timestamps: false
    }
};

let db = {};

try{
    db = new sequelize (DATABASE_NAME, USER_NAME, PASSWORD, DB_SETUP),
    console.log ("Conexão com o banco de dados estabelecida")
}
catch(error){
    console.log ("Erro ao tentar se conectar ao banco de dados"),
    console.error (error)
}
async function checkConnections () {
    try{
        await db.authenticate ();
        console.log("Banco de Dados conectado com sucesso")
    }
    catch (error) {
        console.log ("Não foi possível se conectar ao Banco de Dados");
        console.error (error);
    }
}

Object.assign (db, {checkConnections})

module.exports = db;