import React from "react";
import navStyle from"./navbar.module.css";
import logoIcon from"./logo.svg";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className={navStyle.navbar_container}>
            <ul className={navStyle.nav_list}>
                <li className={navStyle.logos}>
                    <img src={logoIcon} className={navStyle.logoIcon} alt=""/>
                    <h1 className={navStyle.logo}>TrainD</h1>
                </li>
                <li className={navStyle.links}>
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/">ABOUT</a>
                        </li>
                        <li>
                            <a href="../booking/Book.js">BOOKING</a>
                        </li>
                        <li>
                            <a href="../stations/Stations.js">STATIONS</a>
                        </li>
                        <li>
                            <a href="/">CONTACT US</a>
                        </li>
                    </ul>
                </li>
                <li className={navStyle.signup}>
                    <button className={navStyle.sign_btn}><span>SIGN UP</span></button>
                </li>
            </ul>
        </div>
    )
}