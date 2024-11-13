const dotenv = require('dotenv');
const { sequelize, dbConnect } = require('../config/db.js');
const Usuario = require('../model/Usuario.js');
const Ponto = require('../model/Ponto.js');
const express = require('express');

dotenv.config()
const app = express();


sequelize.sync({ alter: true })
    .then(() => {
        console.log("Sucesso ao sincronizar tabelas!")
    })
    .catch(error => {
        console.log(`Ocorreu um erro ao sincronizar tabelas: ${error}`)
    });

Ponto.create({
    tipo: "E",
    dataHora: "07/04/2005"
}).then(() => {
    console.log("Usuário criado com sucesso!")
})
    .catch(error => {
        console.log(`Erro ao cadastrar usuário! ${error}`)
    })

Usuario.create({
    nome: "Pedrão Sadahn Russein",
    email: "pedraosafado@gmail.com",
    login: "Pedraosafado",
    senha: "pedrogostodocaralhocomacamisadololzin",
    permissao: "ADM"
}).then(() => {
    console.log("Usuário criado com sucesso!")
})
    .catch(error => {
        console.log(`Erro ao cadastrar usuário! ${error}`)
    })

app.get("/pensador", (req, res) => {
    res.send("penso logo existo")
})

app.get("/", (req, res) => {
    res.send("professor Airton Bordin Junior, você prefere levar ferro até enjoar ou madeira até entupir?")
})

app.post('/users', (req, res) => {
    res.send("Rota users usando post");
})

app.get('/user/:id', (req, res) => {
    res.send(`o parâmetro é ${req.params.id}`)
})

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params)
})

app.listen(process.env.PORT, () => {
    console.log("Escutando na porta 3000")
})

dbConnect();