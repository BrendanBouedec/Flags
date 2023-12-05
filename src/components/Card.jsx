import React from 'react';
import { Link } from "react-router-dom";
const Card = ({ countrie }) => {
    return (
        <div className='country'>
            <ul className='countries'>
                <img src={countrie.flags.png} alt="Drapeau" />
                <li className='nameCountry'>{countrie.name.common}</li>
                <li>Population : {countrie.population}</li>
                <li>Region : {countrie.continents}</li>
                <li>Capital : {countrie.capital}</li>
                <Link to={`/filter/${countrie.name.common}`}>Plus d'informations</Link>
            </ul>
        </div>
    );
};
export default Card;