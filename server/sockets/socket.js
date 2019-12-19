const { io } = require('../server')

io.on('connection', ( client ) => { // Información y manejo de una conexión (client es información del cliente conectado)    

    // on -> escuchar / emit -> enviar o emitir señal o mensaje
    console.log('Usuario conectado');
    
    client.emit('enviarMensaje', {
        
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicación'

    });

    // Verificar si el cliente se desconecto
    client.on('disconnect', () => {

        console.log('Usuario desconectado');

    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data); // Broadcast es a todos los otros clientes
   
     
        // Para manejar una condición y devolver diferentes resultados al cliente
        // if( mensaje.usuario ) {

        //     callback({
        //         resp: 'Todo salió bien!'
        //     }); 

        // } else {

            
        //     callback({
        //         resp: 'Todo salió MAL :('
        //     }); 

        // }

        

    });

    

});