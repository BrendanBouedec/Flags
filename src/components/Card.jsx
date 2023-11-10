import React from 'react';

const Card = ({ countrie }) => {
    return (
        <ul>
            <li>{countrie.translations.fra.common}</li>
            <img src={countrie.flags.png} alt="Drapeau" />
        </ul>
    );
};

export default Card;