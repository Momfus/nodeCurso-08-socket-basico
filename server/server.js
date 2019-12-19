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
let io = socketIO(server); 

io.on('connection', ( client ) => { // Información y manejo de una conexión (client es información del cliente conectado)    

    console.log('Usuario conectado');
    
    // Verificar si el cliente se desconecto
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje) => {

        console.log(mensaje);
        

    });

    

});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});