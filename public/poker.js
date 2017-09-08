$(() => {
    // set-up a connection between the client and the server
    const socket = io("/poker");

    socket.on('connect', () => {
        console.log("Connected, let's sign-up for to receive messages for this room", roomId);
        socket.emit('room', roomId);
    });

    socket.on('message', function (data) {
        console.log('Incoming message:', data);
    });

    $("#login").on("submit", (event) => {
        event.preventDefault();
        socket.emit("add user", $("input[name='username']").val());
        return false;
    })
});
