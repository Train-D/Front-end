import React from "react";
import style from "./about.module.css"
import bookIcon from"./bookicon.svg";
import trustIcon from "./trusticon.svg";
import trainIcon from "./trainIcon.svg";
import safetyIcon from "./safeticon.svg";
import lines from "./lines.svg";
import { Link } from "react-router-dom";

export default function Aboutsec(){
    return(
        <div className={style.about_container}>
            <div className={style.leftsec}>
                <h1>Why Choose us ?</h1>
                <p>We are one-stop destination for all your railway 
                    ticket booking needs. our mission is to simplify the 
                    process of securing train reservation and provide 
                    you with a seamless, hassle-free experience.
                </p>
                <button style={{textAlign :"center"}}  className={style.seemore_btn}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/about">See More</Link>
                </button>
            </div>
            <div className={style.rightsecconent} >
            <div className={style.rightsec}>
                <div className={style.sec1}>
                    <div className={style.book_box}>
                        <img src={bookIcon} alt="" className={style.bookIcon}/>
                        <h1>Booking Tickets</h1>
                        <p>Choose your seats easily and choose the type of your train</p>
                    </div>
                    <div className={style.trust_box}>
                        <img src={trustIcon} alt="" className={style.trustIcon}/>
                        <h1>Trust</h1>
                        <p>Choose your seats easily and choose the type of your train</p>
                    </div>
                </div>
                <div className={style.sec2}>
                    <img src={lines} alt="" className={style.lines}/>
                </div>
                <div className={style.sec3}>
                    <div className={style.safety_box}>
                        <img src={safetyIcon} alt="" className={style.safetyIcon}/>
                        <h1>Safety</h1>
                        <p>Choose your seats easily and choose the type of your train</p>
                    </div>
                    <div className={style.track_box}>
                        <img src={trainIcon} alt="" className={style.trainIcon}/>
                        <h1>Track Your Train</h1>
                        <p>It allows you to track your train step by step</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}