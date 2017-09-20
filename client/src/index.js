import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import app from './components/Poker/reducers';
import thunkMiddleware from 'redux-thunk'
import { createSocket, socketMiddleware } from './components/Poker/socket'

let store = createStore(
    app,
    applyMiddleware(thunkMiddleware),
    applyMiddleware(socketMiddleware)
)

createSocket(store)

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
