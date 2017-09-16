import React from 'react';
import Card from './Card';

let Field = ({ users }) => {
    return (
        <div className="field">
            {users.map((user) => {
                return <figure key={user.id} className="placeholder-outer">
                    <div className="placeholder">
                        <Card value={user.selectedCard} />
                    </div>
                    <figcaption>{user.name}</figcaption>
                </figure>
            })}
        </div>
    );
};

export default Field;