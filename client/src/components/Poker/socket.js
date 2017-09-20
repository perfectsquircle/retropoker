import io from 'socket.io-client'
import * as actions from './actions'

let socket = null;

export function createSocket(store) {
    socket = io("/poker")

    socket.on('connect', () => {
        console.log("connected to socket (socket.js)");

        // TODO: dispatch
    });

    socket.on('message', function (...rest) {
        console.log("Receive:", rest);
    })

    // socket.on('connection', () => {
    //     let state = store.getState();
    //     let user = state.users.find(u => u.currentUser);
    //     let userId = user && user.id;
    //     socket.emit('room', { userId, roomId: state.roomId })
    //     console.log('emit room', userId, state.roomId)
    // })

    socket.on('enter user', (user) => {
        store.dispatch(actions.addUser(user.id, user.name, false));
    });

    socket.on('play card', ({ userId, card }) => {
        store.dispatch(actions.playTheirCard(userId, card))
    })

    socket.on('exit user', (userId) => {
        store.dispatch(actions.removeUser(userId));
    });
}

export function socketMiddleware(store) {
    return next => action => {
        const result = next(action);

        if (socket) {
            switch (action.type) {
                case actions.ADD_USER:
                    socket.emit('add user', { id: action.id, name: action.name })
                    break;
                case actions.PLAY_CARD:
                    socket.emit('play card', { card: action.card })
                    break;
                default:
                    break;
            }
        }

        return result;
    }
}