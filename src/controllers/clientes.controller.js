const clientesService = require("../services/cliente.service");

async function listarClientes(req, res) {
    
    try {

        const clientes = await clientesService.listarClientes();

        return res.status(200).json({
            message: "Clientes listados com sucesso",
            data: clientes
        });
        
    } catch (err) {
       return res.status(500).json({
        message: "Erro ao listar clientes",
        error: err
       }) 
    };

};

async function criarCliente(req, res) {
    
    try {
        
        const { nome, email, telefone } = req.body;

        if (!nome || !email || !telefone) return res.status(400).json({ message: "Todos os campos são obrigatórios"});

        const resultado = await clientesService.criarCliente({ nome, email, telefone });

        return res.status(201).json({
            message: "Cliente inserido com sucesso",
            data: resultado
        });

    } catch (err) {
        
        return res.status(500).json({
            message: "Erro ao inserir cliente",
            error: err
        });
    }
};

module.exports = { listarClientes, criarCliente };