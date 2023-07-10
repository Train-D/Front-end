import React from "react";
import style from "../ticket/ticket.module.css";
import logoIcon from "../ticket/logo.svg";
import saveIcon from "../ticket/saveIcon.svg";
import train from"../ticket/train.svg";
import lines from "../ticket/lines.svg";
import QRCode from "../ticket/QR Code.svg";
import close from "../ticket/close.svg";

export default function ViewTicket(props){
    return(props.trigger) ? (
        <div className={style.ticketPage}>
            <button className={style.close_btn} onClick={() =>props.setTrigger(false)}>
                <img src={close} alt=""/>
            </button>
            <div className={style.ticket__container}>
            <div className={style.ticket__header}>
                <div className={style.logos}>
                    <img src={logoIcon} alt="" className={style.logoIcon}/>
                    <h1 className={style.logo}>TrainD</h1>
                </div>
                <div className={style.download}>
                    <button className={style.save_btn}>
                        <img src={saveIcon} alt="" className={style.saveIcon}/>
                    </button>
                </div>
            </div>
            <div className={style.train}>
                <img src={train} alt="" className={style.trainimg}/>
            </div>
            <div className={style.trip__times}>
                <div className={style.from}>
                    <span>From</span>
                    <h1 className={style.from__time}>08:30 Am</h1>
                </div>
                <div className={style.duration}>
                    <h1 className={style.duration__time}>2h 30m</h1>
                </div>
                <div className={style.to}>
                    <span>To</span>
                    <h1 className={style.to__time}>10:50 Am</h1>
                </div>
            </div>
            <div className={style.id__container}>
                <h1>ID Number</h1>
            </div>
            <div className={style.data}>
                <div className={style.userData}>
                    <span>Passenger</span>
                    <span className={style.userName} style={{fontWeight:"400", color:"rgba(255,255,255,0.87)"}}>Huda Nady</span>
                </div>
                <div className={style.dateData}>
                    <span>Date</span>
                    <span className={style.date} style={{fontWeight:"400", color:"rgba(255,255,255,0.87)"}}>13/10/2023</span>
                </div>
            </div>
            <div className={style.seatData}>
                <span>Seat</span>
                <span className={style.seat__Number} style={{fontWeight:"400", color:"rgba(255,255,255,0.87)"}}>A2-2</span>
            </div>
            <img src={lines} alt="" className={style.lines}/>
            <div className={style.ticketinfo}>
                <div className={style.ticket__price}>
                    <span>Price:</span>
                    <span className={style.price} style={{fontWeight:"400", color:"rgba(255,255,255,0.87)"}} >  34.5 EGP </span>
                </div>
                <img src={QRCode} alt="" className={style.QRcode} />
            </div>
        </div>
        </div>
    ) : ""
}