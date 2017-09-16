import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Poker from './components/Poker';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" component={Poker} />
                <Route path="/poker/:roomId" component={Poker} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default Routes;