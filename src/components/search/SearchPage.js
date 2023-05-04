import React from "react";
import {useState, useEffect} from "react";
import style from "./page.module.css";
import Navbar from "../Navbar/Navbar";
import Search from "./Search";

export default function SearchPage(){
    return(
        <div className={style.search__page}>
            <div className={style.container}>
                <Navbar />
                <div className={style.search}>
                    <Search />
                </div>
                </div>
            </div>
    )
}