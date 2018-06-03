var socket = io();

socket.on('connect', function () {
    console.log('Conected to web');

    // socket.emit('createMessage', {
    //     from: 'mike@examel.com',
    //     text: 'hey hat is goung on',
    // });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});


