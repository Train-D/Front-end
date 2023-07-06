import React from "react";
import style from "./Stations.module.css";
import Navbar from "../Navbar/Navbar";
import SearchBar from "./SearchBar";

export default function Stations() {
    return (
        <div className={style.stations}>
            <div className={style.navbar__container}>
                <Navbar />
            </div>
            <div className={style.body_station}>
                <div className={style.leftpart}>
                    <div className={style.leftpart1}>
                        <p><span>Learn more</span> about Egypt's stations.</p>
                    </div>
                    <div className={style.leftpart2}>
                        <p>Choose station and you will get information about it.</p>
                    </div>
                </div>
                <div className={style.rightpart}>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}