import React from "react";
import style from"./mainbody.module.css";
import Search from "./Search";
import Mobilesec from "./Mobilesec";
import Aboutsec from "./Aboutsec";
import Stationsec from "./Stationsec";

export default function MainBody(){
    return(
        <div className={style.mainbody}>
            <Search />
            <Stationsec />
            <Aboutsec />
            <Mobilesec />
        </div>
    )
}