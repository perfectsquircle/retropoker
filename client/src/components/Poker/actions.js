import io from 'socket.io-client'


let socket = io("/poker")

socket.on('connect', () => {
    console.log("connected to socket (actions)")
});

export const ADD_USER = 'ADD_USER';
export const PLAY_CARD = 'PLAY_CARD';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    HIDE_ALL: 'HIDE_ALL'
};

export function addUser(id, name, currentUser = false) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, id, name, currentUser })

        socket.emit('add user', { id, name })
    }
}

export function playCard(card) {
    return { type: PLAY_CARD, card };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}