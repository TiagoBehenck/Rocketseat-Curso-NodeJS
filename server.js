const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o APp 
const app = express();
// Aceitando o JSON
app.use(express.json());
app.use(cors());

// Iniciado o DB
mongoose.connect(
    'mongodb://192.168.99.100:27017/node',
     { useNewUrlParser: true }
);

requireDir('./src/models/');

// Rotas
app.use('/api', require("./src/routes"));

app.listen(3000); 