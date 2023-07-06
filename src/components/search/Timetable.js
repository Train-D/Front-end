import React, { useContext, useEffect, useState } from "react";
import style from "./tabletime.module.css";
import { Post } from "../../helpers/Backend";
import { Context } from "../../Context/TripContext";
import { Link } from "react-router-dom";

export default function Timetable(props){
    
    // const {selectedTripId, date, creditCardData, selectedSeat} = useContext(Context); 
    const {setSelectedTripId} = useContext(Context)
    var tripsData = props.data;
    
    const getTimeDifference = (startTime, arrivalTime) =>{
        
        const startHours = parseInt(startTime.split(':')[0]);
        console.log(startHours)
        const startMinutes = parseInt(startTime.split(':')[1].split(' ')[0])
        console.log(startMinutes)
        const startAMPM = startTime.split(' ')[1];

        const arrivalHours = parseInt(arrivalTime.split(':')[0]);
        console.log(arrivalHours)
        const arrivalMinutes = parseInt(arrivalTime.split(':')[1].split(' ')[0])
        console.log(arrivalMinutes)
        const arrivalAMPM = startTime.split(' ')[1];

        const startMilitaryHours = startAMPM === 'AM' ? startHours : startHours + 12;
        const arrivalMilitaryHours = arrivalAMPM === 'AM' ? arrivalHours : arrivalHours + 12;

        const timeDifference = (arrivalMilitaryHours * 60 + arrivalMinutes) - (startMilitaryHours * 60 + startMinutes)

        const hoursDifference = Math.floor(timeDifference / 60);
        const positiveHoursDiff = Math.abs(hoursDifference)
        const minutesDifference = timeDifference % 60;
        const positiveMinutesDiff = Math.abs(minutesDifference)

        return `${positiveHoursDiff} h ${positiveMinutesDiff} m`;
    }

    const handleClick = (tripId) =>{
        setSelectedTripId(tripId)
        console.log(`Clicked on trip ${tripId}`)
    }
    
    

    const rowStyles = {
        display: 'flex',
        gap: '23%',
        width: '90%',
        borderBottom: '1px solid rgba(185, 181, 181, 0.89)',
        padding: '0px',
        marginLeft: '5%',
        textDecoration:'none',
    };
    
    const h3Styles = {
        width: '17%',
        fontStyle: 'normal',
        fontFamily: "'Inria Serif', serif",
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '-0.408px',
        color: '#5E514B',
        textAlign: 'center',
        textDecoration:'none',
    };

    return(
        <div className={style.table__time}>
                <div className={style.row1}>
                    <h3>Departure time</h3>
                    <h3>Arrival time</h3>
                    <h3>Duration</h3>
                </div>
                {
                    tripsData.map(trip => {
                        const{startTime, arrivalTime, tripId} = trip;
                        const timeDifference = getTimeDifference(startTime, arrivalTime);
                        return(
                            <Link to="/book" style={rowStyles}>
                                <div key={tripId} style={rowStyles} onClick={() => handleClick(tripId)}>
                                    <h3 style={h3Styles}> {startTime} </h3>
                                    <h3 style={h3Styles}> {arrivalTime} </h3>
                                    <h3 style={h3Styles}> {timeDifference} </h3>
                                </div>
                            </Link>
                        )
                    })
                }
        </div>
    )
}