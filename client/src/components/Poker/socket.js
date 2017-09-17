import io from 'socket.io-client'

let socket = io("/poker")

socket.on('connect', () => {
    console.log("connected to socket (socket.js)");

    // TODO: dispatch
});

export default socket;