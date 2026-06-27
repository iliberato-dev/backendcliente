const express = require("express");
const cors = require("cors");
require("dotenv").config();

const clienteRoutes = require("./routes/clientes.routes");

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {

    db.getConnection((err, connection) => {

        if (err) {

            return res.status(500).json({
                status: "error",
                message: "Erro ao conectar ao banco de dados",
                error: err
            });

        }

        connection.release();

        res.status(200).json({
            status: "ok",
            message: "Servidor rodando normalmente",
            conexao: "Conexão bem sucedida com o banco de dados"
        });

    });
});

app.use("/api/clientes", clienteRoutes);

app.listen(process.env.PORT, () => {
    console.log("Servidor on")
    console.log(`Rota health rodando em http://localhost:${process.env.PORT}/health`);
    console.log(`Rota clientes rodando em http://localhost:${process.env.PORT}/api/clientes`);
});