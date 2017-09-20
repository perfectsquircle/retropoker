import React from 'react';
import FieldContainer from '../containers/FieldContainer';
import HandContainer from '../containers/HandContainer';
import LoginContainer from '../containers/LoginContainer';

let App = ({ currentUser }) => {
    if (currentUser) {
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
    } else {
        return <LoginContainer />
    }
};

export default App;