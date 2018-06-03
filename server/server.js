const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'mike@examel.com',
        text: 'hey hat is goung on',
        createAt: 123
    });

    socket.emit('newMessage', {
        from: 'mike@examel.com',
        text: 'hey hat is goung on form server',
        createAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    });

    socket.on('createMessage', (message) => {
        console.log('message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

});

server.listen(port, () => {
    console.log(`server started on ${port}`);
})