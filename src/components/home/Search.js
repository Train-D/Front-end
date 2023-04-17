import React, { useState } from "react";
import style from"./search.module.css";
export default function Search(){
    const[select, setSelect] = useState("");
    
    const[isHover, setIsHover] = useState(false);
    const handleMouseEnter = () =>{
        setIsHover(true);
        console.log("true")
    };
    const handleMouseLeave = () =>{
        setIsHover(false);
    };
    const selectStyle={
        // backgroundColor: isHover ? 'black' : '#F2F2F2',
        color: isHover ? 'red' : "#696969",
    };
    
    const today = new Date();
    const numberOfDaysToAdd = 0;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split('T')[0]
    return(
        <div className={style.search_container}>
                <select name="From" 
                    className={style.from_list}
                    onChange={(e)=>{
                        const selected = e.target.value;
                        setSelect(selected);
                    }}
                >
                <option value=""  disabled selected hidden className={style.select_name}> From</option>
                    <option 
                        value="cairo"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Cairo
                    </option>
                    <option 
                        value="Alexandria"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Alexandria
                    </option>
                    <option 
                        value="Ismailia"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Ismailia
                    </option>
                    <option 
                        value="PortSaid"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        PortSaid
                    </option>
                    <option 
                        value="Aswan"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Aswan
                    </option>
                    <option 
                        value="Luxor"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Luxor
                    </option>
                </select>
                <select name="To" className={style.to_list}>
                <option value=""  disabled selected hidden className={style.select_name}> TO</option>
                <option 
                        value="cairo"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Cairo
                    </option>
                    <option 
                        value="Alexandria"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Alexandria
                    </option>
                    <option 
                        value="Ismailia"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Ismailia
                    </option>
                    <option 
                        value="PortSaid"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        PortSaid
                    </option>
                    <option 
                        value="Aswan"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Aswan
                    </option>
                    <option 
                        value="Luxor"
                        style={selectStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Luxor
                    </option>
                </select>
                <input type="date" className={style.date} placeholder="Date" defaultValue={defaultValue}/>
                    <button className={style.search_btn}><span>Search</span></button>
            </div>
    )
}