import { VisibilityFilters, ADD_USER, PLAY_CARD, SET_VISIBILITY_FILTER } from './actions';
import { combineReducers } from 'redux';

const assign = Object.assign.bind(Object, {});

function users(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            if (state.find(u => u.id === action.id)) return state;
            return [...state, { id: action.id, name: action.name }];
        case PLAY_CARD:
            return state.map(u => u.currentUser ? assign(u, { selectedCard: action.card }) : u);
        default:
            return state;
    }
}

function visibilityFilter(state = VisibilityFilters.HIDE_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const app = combineReducers({
    visibilityFilter,
    users
});

export default app;