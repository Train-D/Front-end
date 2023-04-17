import React from "react";
import style from "./mobilesec.module.css";
import mobileImg from "./mobiles.svg";
import googleIcon from "./google-play-icon.svg";
import appleIcon from "./apple.svg";

export default function Mobilesec(){
    return(
        <div className={style.mobile_container}>
            <div className={style.leftsec}>
                <h1>Now you can BOOK and TRACK online</h1>
                <h4>Get what you need, when you need it</h4>
                <div className={style.buttons}>
                    <button className={style.google_btn}>
                        <img src={googleIcon} className={style.googleIcon} alt=""/>
                        <div className={style.text}>
                            <h6> GET IT ON </h6>
                            <h5>Google play</h5>
                        </div>
                    </button>
                    <button className={style.apple_btn}>
                        <img src={appleIcon} className={style.appleIcon} alt=""/>
                            <div className={style.text}>
                            <h6> GET IT ON </h6>
                            <h5>Google play</h5>
                        </div>
                    </button>
                </div>
            </div>
            <div className={style.rightsec}>
                <img src={mobileImg} alt="" className={style.mobileImg}/>
            </div>
        </div>
    )
}