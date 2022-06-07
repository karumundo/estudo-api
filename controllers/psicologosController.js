const Psicologos = require ("../model/Psicologos");
const bcrypt = require ("bcryptjs");

const psicologosController = {

    async cadastrarPsicologo (req, res){
        console.log("Você está na área de cadastrar psicólogos")
        const {nome_psicologo, email_psicologo , senha_psicologo , apresentacao} = req.body;
        const novaSenha = bcrypt.hashSync(senha_psicologo,10);
        console.log(`Nova senha ${novaSenha}`);
        const novoPsicologo = await Psicologos.create({
            nome_psicologo, 
            email_psicologo, 
            senha_psicologo:novaSenha, 
            apresentacao
        })

        return res.status(200).json(novoPsicologo)
    },
    async listarPsicologo (req, res){
        try {
            const listaDePsicologos = await Psicologos.findAll();
            res.status(200);
            res.json(listaDePsicologos);
        }
        catch (error){
            res.status(500);
            res.send("Erro ao recuperar dados dos Psicólogos")
        } 
    },
    
    async listarPsicologoId (req, res){
        const listarPsicologosId = req.params["id"];
        console.log("id da URL recuperado = " + req.params["id"]);
        try{
            const psicologoId = await Psicologos.findByPk(id);
            if (psicologoId){
                res.status(200);
                res.json(psicologoId)
            }
            else{
                res.status(404);
                res.send('Psicólogo de ${listarPsicologosId} não encontrado')
            }

        }
        catch (error){
            res.status(500);
            res.send("Erro ao recuperar dados do Psicólogo pelo Id")
        }
    },

    async listarPsicologoNome (req, res){
        const listarPsicologoNome = req.params["nome_psicologo"];
        console.log("Nome da URL recuperado = " + req.params["nome_psicologo"]);
        try{
            const psicologoNome = await Psicologos.findByPk(nome_psicologo);
            if (psicologoNome){
                res.status(200);
                res.json(psicologoNome)
            }
            else{
                res.status(404);
                res.send('Psicólogo de ${listarPsicologosNome} não encontrado')
            }

        }
        catch (error){
            res.status(500);
            res.send("Erro ao recuperar dados do Psicólogo pelo Nome")
        }
    },
    alterarPsicologo (req, res){
        res.send("Espaço que permite alterar as informações dos psicólogos cadastrados")
    },
    excluirPsicologo (req, res){
        res.send("Espaço que permite excluir psicólogos cadastrados")
    },
    desativarPsicologo (req, res){
        res.send("Espaço que permite indicar que o psicólogo cadastrado se encontra desativado")
    },
};
module.exports = psicologosController;