import React from 'react';
import { Link } from "react-router-dom";
const Card = ({ countrie }) => {
    return (
        <div className='country'>
            <ul className='countries'>
                <li>{countrie.name.common}</li>
                <img src={countrie.flags.png} alt="Drapeau" />
                <li>Population : {countrie.population}</li>
                <li>Region : {countrie.continents}</li>
                <li>Capital : {countrie.capital}</li>
                <Link to={`/filter/${countrie.name.common}`}>Plus d'informations</Link>
            </ul>
        </div>
    );
};
export default Card;