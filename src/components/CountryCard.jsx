import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';


const CountryCard = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await response.json();
                setCountry(data[0]);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };

        fetchCountryData();
    }, [name]);



    return (
        <div>
            <div className="back">
                <Link to="/">
                    Retour
                </Link>
            </div>

            <div className="info">

                <ul>
                    {/* <li><img src={country.flags.png} alt="Country flag" /></li> */}
                    <li>Name : {name}</li>
                    <li>Population : {country.population}</li>
                    <li>Region : {country.region}</li>
                    <li>Capital : {country.capital}</li>
                    <li>Sub Region : {country.subregion}</li>
                    <li>Top Level Domain : {country.tld}</li>
                </ul>
            </div>

        </div>
    )

}





export default CountryCard