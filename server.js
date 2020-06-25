const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Não esquece de subir pro Github');
});

app.listen(3001);