const express = require('express');
const socketIO = require('socket.io'); // Traido con "npm i socket.io --save"
const http = require('http'); // Permite levantar un servidor y otras conexiones

const path = require('path');

const app = express();

let server = http.createServer(app); // Se monta el servidor con las configuracions hechas del express


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);  // De esta manera se exporta la variable para usar en el archivo socket.js
require('./sockets/socket.js'); // Traer el archivo con la configuración de los sockets


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});