const db = require("../config/db");

function listarClientes() {

    return new Promise((resolve, reject) => {

        const query = "SELECT * FROM clientes ORDER BY id DESC";

        db.query(query, (err, results) => {

            if (err) return reject(err);

            resolve(results);
        });
    });
};

function criarCliente({ nome, email, telefone }) {

    return new Promise((resolve, reject) => {
        
        const query = "INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)";

        db.query(query, [nome, email, telefone], (err, results) => {

            if (err) return reject(err);

            resolve(results);
        });
    });
};

module.exports = { listarClientes, criarCliente};