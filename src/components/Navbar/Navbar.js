import React, { useState } from "react";
import navStyle from"./navbar.module.css";
import logoIcon from"./logo.svg";
import Sign from "../sign/Sign"
import {Link} from "react-router-dom";
import profileIcon from "./profile.svg";

export default function Navbar(){
    const [openSign, setOpenSign] = useState(false)

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
                            {/* <a href="/">HOME</a> */}
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            {/* <a href="../about/AboutUs.js">ABOUT</a> */}
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            {/* <a href="/">BOOKING</a> */}
                            <Link to="/book">BOOKING</Link>
                        </li>
                        <li>
                            {/* <a href="/">STATIONS</a> */}
                            <Link to="/stations">STATIONS</Link>
                        </li>
                        <li>
                            {/* <a href="/">CONTACT US</a> */}
                            <Link to="/contact">CONTACT US</Link>
                        </li>
                    </ul>
                </li>
                <li className={navStyle.profile}>
                <Link to="/profile"><img src={profileIcon} className={navStyle.profile_btn} alt=""/></Link> 
                </li>
                <li className={navStyle.signup}>
                    <button className={navStyle.sign_btn} onClick={() => setOpenSign(true)}><span>SIGN UP</span></button>
                </li>
            </ul>
            <Sign trigger={openSign} setTrigger={setOpenSign}/>
        </div>
    )
}