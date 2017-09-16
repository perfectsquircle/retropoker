import React from 'react';

let Card = ({ value, selected = false, onClick = () => 0 }) => {
    if (!value) return null;
    return (
        <button className={"card" + (selected ? ' selected' : '')} onClick={() => onClick()}>
            {value}
        </button>
    );
}

export default Card;