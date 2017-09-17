import socket from './socket'

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const PLAY_CARD = 'PLAY_CARD';
export const PLAY_THEIR_CARD = 'PLAY_THEIR_CARD';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    HIDE_ALL: 'HIDE_ALL'
};

export function addUser(id, name, currentUser = false) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, id, name, currentUser })

        if (currentUser) {
            socket.emit('add user', { id, name })
        }
    }
}

export function playCard(card) {
    socket.emit('play card', { card })
    return { type: PLAY_CARD, card };
}

export function playTheirCard(userId, card) {
    return { type: PLAY_THEIR_CARD, card, userId };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function removeUser(userId) {
    return { type: REMOVE_USER, userId }
}