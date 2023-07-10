import React from "react";
import style from "./send.module.css";
import trueIcon from "./true.png"
import { Link } from "react-router-dom";

export default function Send(){
    return (
        <div className={style.sendPage}>
            <div className={style.send__container}>
            <div className={style.send__header}>
                    <h1 className={style.sendtitel}>Thank You!</h1>
                    <p>
                        The form was submitted successfully.
                    </p>
                    <img alt=""  src={trueIcon} className={style.trueIcon} />
                    <button type="submit" className={style.send_btn}><span className={style.send}><Link to="/">Back to home</Link></span></button>
            </div>
            
            </div>
        </div>
    ) 
}