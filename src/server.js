const express = require('express');
const server = express();
const routes = require('./routes');
const path = require('path')

// Template engine
server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));

// habilitar arquivos statics
server.use(express.static("public"));

// Usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes);

// HEROKU
const porta = process.env.PORT || 8080;


server.listen(porta, () => console.log('rodando'));