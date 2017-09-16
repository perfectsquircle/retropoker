import { createStore } from 'redux';
import app from './reducers';

let store = createStore(app, {
    users: []
});

export default store;

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
