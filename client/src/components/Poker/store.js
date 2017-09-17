import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import { addUser, removeUser, playTheirCard } from './actions'
import thunkMiddleware from 'redux-thunk'
import socket from './socket'

let store = createStore(
    app,
    applyMiddleware(thunkMiddleware)
);

export default store;

let unsubscribe = store.subscribe(() => console.log(store.getState()))

socket.on('connection', () => {
    let state = store.getState();
    let user = state.users.find(u => u.currentUser);
    let userId = user && user.id;
    socket.emit('room', { userId, roomId: state.roomId })
    console.log('emit room', userId, state.roomId)
})

socket.on('enter user', (user) => {
    console.log('receive: enter user', user)
    store.dispatch(addUser(user.id, user.name, false));
});

socket.on('play card', ({ userId, card }) => {
    console.log('receive: play card', userId, card)
    store.dispatch(playTheirCard(userId, card))
})

socket.on('exit user', (userId) => {
    console.log('receive: exit user', userId)
    store.dispatch(removeUser(userId));
});