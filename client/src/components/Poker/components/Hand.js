import React from 'react';
import Card from './Card';

let Hand = ({ selectedCard, onClick }) => {
    let cards = [1, 2, 3, 5, 8, 13, 21];
    return (
        <div className="Hand">
            {cards.map((i) => (
                <Card
                    key={i}
                    value={i}
                    selected={selectedCard === i}
                    onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Hand;