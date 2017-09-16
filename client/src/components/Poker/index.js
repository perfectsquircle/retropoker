import React, { Component } from 'react';
import Field from './components/Field';
import FieldContainer from './containers/FieldContainer';
import Hand from './components/Hand';
import HandContainer from './containers/HandContainer';
import Login from './components/Login';
import './style.css';

let App = () => {
    // if (currentUser) {
    return (
        <main>
            <section className="table">
                <FieldContainer />
            </section>
            <section>
                <HandContainer />
            </section>
        </main>
    );
    // } else {
    //     return <Login onLogin={(username) => onLogin(username)} />
    // }
};

export default App;