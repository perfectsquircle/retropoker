import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import { addUser } from './actions'
import thunkMiddleware from 'redux-thunk'
import io from 'socket.io-client'

let store = createStore(
    app,
    applyMiddleware(thunkMiddleware)
);

export default store;

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)


let socket = io("/poker")

socket.on('connect', () => {
    // todo: dispatch 
    console.log("connected to socket (store)")
});

socket.on('add user', (user) => {
    store.emit(addUser(user.id, user.name));
});