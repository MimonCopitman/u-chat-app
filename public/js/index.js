var socket = io();

socket.on('connect', function () {
    console.log('New user connected');

    socket.emit('createEmail', {
        to: 'jen@gmail.com',
        text: 'Hey jen. how are you'
    });


    socket.emit('createMessage', {
        from: 'mike@examel.com',
        text: 'hey hat is goung on'
    });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
    console.log('New email', email);
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});



