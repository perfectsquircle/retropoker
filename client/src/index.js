import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

const socket = io("/poker");

let roomId = 'asdf';

socket.on('connect', () => {
    console.log("Connected, let's sign-up for to receive messages for this room", roomId);
    socket.emit('room', roomId);
});

socket.on('message', function (data) {
    console.log('Incoming message:', data);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
