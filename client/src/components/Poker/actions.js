export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const PLAY_CARD = 'PLAY_CARD';
export const PLAY_THEIR_CARD = 'PLAY_THEIR_CARD';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const REQUEST_ROOM = 'REQUEST_ROOM';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    HIDE_ALL: 'HIDE_ALL'
};

export function addUser(id, name, currentUser) {
    return { type: ADD_USER, id, name, currentUser }
}

export function playCard(card) {
    // socket.emit('play card', { card })
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

function requestRoom(roomId) {
    return {
        type: REQUEST_ROOM,
        roomId
    }
}

function receiveRoom(roomId, json) {
    return {
        type: RECEIVE_ROOM,
        roomId,
        posts: json,
        receivedAt: Date.now()
    }
}

function fetchRoom(roomId) {
    return async dispatch => {
        dispatch(requestRoom(roomId))
        let request = fetch(`https://www.reddit.com/r/${roomId}.json`)
        let json = request.json();
        dispatch(receiveRoom(roomId, json))
    }
}

function shouldFetchRoom(state, roomId) {
    // const posts = state.postsBySubreddit[roomId]
    // if (!posts) {
    //     return true
    // } else if (posts.isFetching) {
    //     return false
    // } else {
    //     return posts.didInvalidate
    // }
    return true;
}

export function fetchRoomIfNeeded(roomId) {
    return (dispatch, getState) => {
        if (shouldFetchRoom(getState(), roomId)) {
            return dispatch(fetchRoom(roomId))
        }
    }
}