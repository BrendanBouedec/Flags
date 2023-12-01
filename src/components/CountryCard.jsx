import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';


const CountryCard = () => {
    const [data, setData] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])



    return (
        <div>
            <div className="back">
                <Link to="/">
                    Retour
                </Link>
            </div>

            <div className="info">
                {data.map((countrie, index) => {
                    <div className="infoG" key={index}>
                        <h1>{countrie.translations.fra.common}</h1>
                    </div>

                })}
            </div>

        </div>
    )

}





export default CountryCard