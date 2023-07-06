import React, { useState, useEffect } from "react";
import style from "./SearchBar.module.css";
import { Link } from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://traind.azurewebsites.net/api/Stations")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
        const filteredValues = value.filter((v) =>
            v.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        if (filteredValues.length > 0) {
            acc[key] = filteredValues;
        }
        return acc;
    }, {});

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className={style.rightpart}>
            <div className={style.searchbar}>
                <input type="text" className={style.search} placeholder="Enter station name" value={searchTerm} onChange={handleSearch} />
                <div className={style.searchresult}>
                    {Object.entries(filteredData).map(([key, value]) => (
                        <div key={key}>
                            <h2>{key}</h2>
                            <ul>
                                {value.map((item) => (
                                    <li key={item}>
                                        <Link className={style.link} to={`/stationdetails/${item}`}>{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;