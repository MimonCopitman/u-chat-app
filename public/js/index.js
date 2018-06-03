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
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

$('#message_form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, function () {

    });
});