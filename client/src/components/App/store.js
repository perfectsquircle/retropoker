import { createStore } from 'redux'
import app from './reducers'

import {
    addUser,
    playCard,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

let store = createStore(app)

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

// Dispatch some actions
store.dispatch(addUser(1, 'Learn about actions'))
store.dispatch(addUser(2, 'Learn about reducers'))
store.dispatch(addUser(3, 'Learn about store'))
store.dispatch(addUser(3, 'Learn about store'))
store.dispatch(addUser(3, 'Learn about store'))
store.dispatch(playCard(0))
store.dispatch(playCard(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))

// Stop listening to state updates
unsubscribe()