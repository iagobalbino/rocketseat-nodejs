const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParse: true });

// Primeira rota
app.get('/', (req, res) => {
    res.send('Não esquece de subir pro Github');
});

app.listen(3001);