import React from 'react';

let Card = ({ value, selected = false, onClick = () => 0 }) => {
    if (!value) return null;
    return (
        <div className={"card card-" + value + " " + (selected ? ' selected' : '')} onClick={() => onClick()}>
            &nbsp;
        </div>
    );
}

export default Card;