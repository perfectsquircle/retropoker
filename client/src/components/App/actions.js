export const CREATE_USER = 'CREATE_USER';
export const ADD_USER = 'ADD_USER';
export const PLAY_CARD = 'PLAY_CARD';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    HIDE_ALL: 'HIDE_ALL'
};

export function createUser(name) {
    return { type: CREATE_USER, name };
}

export function addUser(id, name) {
    return { type: ADD_USER, id, name };
}

export function playCard(userId, card) {
    return { type: PLAY_CARD, userId, card };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}