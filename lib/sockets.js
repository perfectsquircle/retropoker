const rooms = require("./poker/rooms");
const io = require('socket.io')();

let pokerIo = io.of("poker");
pokerIo.on("connection", socket => {

    console.log("Got a poker connection", socket.id)
    socket.on("room", roomId => {
        console.log("socket joining room", socket.id, roomId);
        socket.join(roomId);
        socket.roomId = roomId;
    });

    socket.on('add user', user => {
        console.log("add user", user)

        // we store the username in the socket session for this client
        socket.userId = user.id;

        let room = rooms.get(socket.roomId);
        if (room) {
            room.addUser(user);
        }

        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('enter user', user);
    });

    socket.on('play card', (event) => {
        console.log('play card', socket.userId, event.card)

        let userId = socket.userId;

        let room = rooms.get(socket.roomId);
        if (room) {
            room.playCard(event.card);
        }

        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('play card', { userId, card: event.card });
    });

    socket.on('disconnect', () => {
        // echo globally that this client has left
        socket.broadcast.emit('exit user', socket.userId);
    });
});

module.exports = io;


/*
// Chatroom

let numUsers = 0;

io.on('connection', socket => {
    let addedUser = false;

    // when the client emits 'new message', this listens and executes
    socket.on('new message', data => {
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    // when the client emits 'add user', this listens and executes
    socket.on('add user', username => {
        if (addedUser) return;

        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', () => {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    // when the client emits 'stop typing', we broadcast it to others
    socket.on('stop typing', () => {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', () => {
        if (addedUser) {
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});
*/