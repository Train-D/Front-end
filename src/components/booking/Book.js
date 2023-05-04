import React from "react";
import style from "./book.module.css"
import Navbar from "../Navbar/Navbar";
import Reservation from "./Reservation";

export default function Book(){
    return(
        <div className={style.book_page}>
            <Navbar />
            <div className={style.book_container}>
                <Reservation />
            </div>
        </div>
    )

}