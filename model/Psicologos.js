const db = require ("../database");
const {DataTypes} = require ("sequelize"); 

const Psicologos = db.define(
    "Psicologos",
    {
        id_psicologo:{
            type: DataTypes.INTEGER,
            primaryKey:true, 
            autoincrement: true,
        },
        nome_psicologo:{
            type:DataTypes.STRING,
        },
        email_psicologo:{
            type:DataTypes.STRING,
        },
        senha_psicologo:{
            type:DataTypes.STRING,
        },
        apresentacao:{
            type:DataTypes.STRING,
        }
    },
    { 
        tableName: "psicologos",
        timestamps: false
    }
);

module.exports = Psicologos;

