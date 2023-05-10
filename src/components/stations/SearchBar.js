import React from "react";
//import { useState } from "react";

import style from"./SearchBar.module.css";

export const SearchBar = ()=>{
  /*  const [input, setInput]=useState("");

    const fetchData =(value)=>{
        fetch("https://traind.azurewebsites.net/api/Stations")
        .then((response)=>response.json())
        .then((json) => {console.log(json);
        })
    };

    const handleChange=(value)=>{
        setInput(value)
        fetchData(value)
    }
    <input placeholder="Enter station name"
             className={style.search}
             value={input}
             onChange={(e)=>handleChange(e.target.value)}
             />
    */
    return(
        <div className={style.searchbar}>
            <input placeholder="Enter station name"
             className={style.search}
             />
        </div>
    )
    
}
