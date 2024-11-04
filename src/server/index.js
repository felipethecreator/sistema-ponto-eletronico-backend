import dotenv from 'dotenv';
import express from 'express';

dotenv.config()

const app = express();

app.get("/pensador",  (req, res) => {
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
