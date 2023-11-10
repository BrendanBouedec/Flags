import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";
import Card from "./Card";


const List = () => {
    const [data, setData] = useState([]);
    const region = ["Africa", "America", "Oceania", "Asia", "Europe"];
    const [selectedContinent, setSelectedContinent] = useState("");
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])


    return (
        <div className="global">
            <div className='searchBar'>
                <input type="text" onChange={handleSearch} name='searchBar' id='searchBar' placeholder='Rechercher un pays' />
            </div>
            {region.map((continents) => (
                <li className="radio">
                    <input type="radio" checked={continents === selectedContinent} id={continents} name="continentsRadio" onChange={(e) =>
                        setSelectedContinent(e.target.id)} />
                    <label htmlFor={continents}>{continents}</label>
                </li>
            ))}
            {selectedContinent && (
                <button onClick={() => setSelectedContinent("")}>Annuler le Filtre</button>
            )}
            <div className="list">
                {data

                    .filter((countrie) => countrie.continents[0].includes(selectedContinent))
                    // .filter((countrie) => {
                    //     countrie.name.includes(search)
                    // })
                    .map((countrie, index) => (
                        <Card key={index} countrie={countrie} />
                    ))}
            </div>
        </div>
    )
}


export default List
