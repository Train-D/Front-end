import React, { useContext, useEffect, useState } from "react";
import style from"./search.module.css";
import Timetable from "./Timetable";
import axios from "axios";
import {Link} from "react-router-dom";
import { Context } from "../../Context/TripContext";


export default function Search(){
    
    const [isShown, setIsShown] = useState(false);
    const [padding, setPadding] = useState("19%");
    const {setDate, token} = useContext(Context)

    ////////Date//////////
    const today = new Date();
    const numberOfDaysToAdd = 0;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split('T')[0]
    const defaultValueAsString = defaultValue.toString();
    console.log(defaultValueAsString)
    /////////////////////////////////////

    ///////////GETDATA////////////
    const [data, setData] = useState({});    
    useEffect(()=>{
    const fetchData = async () =>{
    const response = await fetch("https://traind.azurewebsites.net/api/Trips/FromTo",{
        method:'GET',
        headers:{
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    const responseData = await response.json();
    setData(responseData)
    };
    fetchData();
},[])

const[fromCity, setFromCity] = useState('');    
const[toCity, setToCity] = useState('');
const toOptions = data[fromCity]
const[selectDate, setSelectedDate] = useState(defaultValue)
const [cityData, setCitData] = useState([])

const handleFromCitySelect = (e) =>{
    const city = e.target.value;
    setFromCity(city)
    setToCity("");
}
console.log(fromCity)
console.log(toCity)
const handleToCitySelect = async (e) =>{
    setToCity(e.target.value)
}

const handleSelectedDate = async (e) =>{
    setSelectedDate(e.target.value)
}
console.log(selectDate)
const handleClick = event =>{
        setIsShown(true);
        const data ={
            fromStation: fromCity,
            toStation : toCity,
            date : selectDate
        };
        setDate(data.date)
        console.log(data)
        fetch('https://traind.azurewebsites.net/api/Trips/TripTimes',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(response => (
            response.json()))
        .then((item) => setCitData(item))
        .catch(error =>{
            console.log(error)
        })
        console.log(cityData)
} 

///////////////////////////////////////////
    //////////////HandleHover////////////
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
    ////////////////////////////////////////////

    return(
        <div>
            <div className={style.search_container}>
                <select name="from" 
                        value={fromCity}
                    className={style.from_list}
                    onChange={handleFromCitySelect}
                >
                    <option value="" disabled selected hidden className={style.select_name}> From</option>
                    {
                        Object.keys(data).map((city)=>(
                            <option key={city} value={city}
                            style={selectStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                                    {city}
                            </option>
                        ))
                    }
                </select>
                <select name="To" 
                    value={toCity} 
                    className={style.to_list} 
                    disabled={!fromCity} 
                    onChange={handleToCitySelect}
                >
                <option value=""  disabled selected hidden className={style.select_name}> TO</option>
                {
                    toOptions && toOptions.map((city) =>(
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))
                }
                </select>
                <input 
                    type="date" 
                    className={style.date} 
                    placeholder="Date"
                    name="Date" 
                    value={selectDate}
                    onChange={handleSelectedDate}
                />
                <button className={style.search_btn} onClick={handleClick} ><span>Search</span></button>
            </div>
            {isShown && <Timetable data={cityData} toCity={toCity} date={defaultValue}/>}
        </div>
    )
}