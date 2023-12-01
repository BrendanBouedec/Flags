import axios from "axios";
import { useState } from 'react'
import { useEffect } from "react";
import Card from "./Card";


const Filter = () => {
    const [data, setData] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState("");
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    };
    const handleContinent = (e) => {
        e.preventDefault();
        setSelectedContinent(e.target.value)
    }
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])


    return (
        <div className="global">
            <div className="filtre">
                <div className='searchBar'>
                    <input type="text" onChange={handleSearch} name='searchBar' id='searchBar' placeholder='Rechercher un pays' />
                </div>
                <div className="continent">
                    <select
                        name="select"
                        id="select"
                        className="select"
                        value={selectedContinent}
                        onChange={handleContinent}
                    >
                        <option value="Filtrer par region">Filtrer par region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>

                {selectedContinent && (
                    <button onClick={() => setSelectedContinent("")}>Annuler le Filtre</button>
                )}
            </div>
            <div className="list">
                {data

                    .filter((countrie) => countrie.continents[0].includes(selectedContinent))
                    .filter((countrie) => countrie.translations.fra.common.toLowerCase().includes(search.toLowerCase()))
                    .map((countrie, index) => (
                        <Card key={index} countrie={countrie} />
                    ))}
            </div>
        </div>
    )
}


export default Filter
