import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./detials.module.css";
import Navbar from "../Navbar/Navbar";

export default function StationDetails() {
    const [station, setStation] = useState({});
    const { stationName } = useParams();

    useEffect(() => {
        fetch(`https://traind.azurewebsites.net/api/Stations/${stationName}`)
            .then((response) => response.json())
            .then((data) => setStation(data));
    }, [stationName]);

   
    return (
        <div className={style.detials}>
            <div className={style.navbar__container}>
                <Navbar />
            </div>
            <div className={style.body_detials}>
                <div className={style.body}>
                    <div className={style.body_contant1}>
                        <h1>{station.stationName}</h1>
                    </div>
                    <div className={style.body_contant2}>
                        <div className={style.station_info1}>
                            <div className={style.station_name}>
                                <h1> {station.stationName} Station</h1>
                            </div>
                            <div className={style.station_info}>
                            {station.stationInfo}

                            </div>

                        </div>
                        <div className={style.station_info2}>
                            <div>
                                Address : <span>{station.address}</span>
                            </div>
                            <div>
                                Hours : <span>{station.hoursOpen}</span>
                            </div>
                            <div>
                                Phone : <span>{station.phone}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}