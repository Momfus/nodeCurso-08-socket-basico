var socket = io(); // Se usa "var" por temas de compatilibidad, aunque hoy en día debería agarrar el "let"

// on -> escuchar / emit -> enviar o emitir señal o mensaje

// Cuando tengo un canal de comunicación con el cliente.
socket.on('connect', function(){

    console.log('Conectado al servidor');

});


// Al perder la conexión
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// Enviar información al servidor
socket.emit('enviarMensaje', {

    usuario: 'Momfus',
    mensaje: 'Hola Mundo'

}, function( resp ){ // Este argumento es la función a ejecutar luego de hacer el emit

    // console.log('Se disparó el callback');
    console.log('respuesta server: ', resp);
    

});

// Escuchar información del servidor
socket.on('enviarMensaje', function( mensaje ) {

    console.log('Servidor: ', mensaje);

});