import React from"react";
import homeStyle from"./home.module.css";
import Section1 from "./Section1";
import MainBody from "./MainBody";
import Footer from"../Footer/Footer";
// import backgroundcolor from "./bgcolor.svg";
// import bg1 from"./bg1.svg";
// import bg2 from "./bg2.svg";
// import { useState } from "react";
// import { useEffect } from "react";

export default function Home(){
    return(
        <div className={homeStyle.home_container}>
            <Section1 />
            <MainBody />
            {/* <Footer /> */}
        </div>
    )
}