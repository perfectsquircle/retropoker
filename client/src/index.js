import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

import store from './components/App/store'

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

registerServiceWorker();
