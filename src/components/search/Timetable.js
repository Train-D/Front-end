import React from "react";
import style from "./tabletime.module.css";

export default function Timetable(){
    return(
        <div className={style.table__time}>
                <div className={style.row1}>
                    <h3>Departure time</h3>
                    <h3>Arrival time</h3>
                    <h3>Duration</h3>
                </div>
                <div className={style.row2}>
                    <h3>9:30am</h3>
                    <h3>11:00am</h3>
                    <h3>1h 30m</h3>
                </div>
                <div className={style.row3}>
                    <h3>12:00pm</h3>
                    <h3>1:00pm</h3>
                    <h3>1h</h3>
                </div>
                <div className={style.row4}>
                    <h3>3:30pm</h3>
                    <h3>6:00pm</h3>
                    <h3>2h 30m</h3>
                </div>
                <div className={style.row5}>
                    <h3>6:40pm</h3>
                    <h3>10:30pm</h3>
                    <h3>4h 25m</h3>
                </div>
        </div>
    )
}