import React from "react";
import style from "./station.module.css";
import card1Img from"./station1.svg";
import card2Img from"./station2.svg";
import card3Img from"./station3.svg";
import arrowIcon from"./arrow.svg";
import { Link } from "react-router-dom";

export default function Stationsec(){
    return(
        <div className={style.stationsec}>
            <h1>Stations</h1>
            <p>We provide the names of the stations and information about them,
                including thier schedules and contact numbers
            </p>
            <div className={style.cards__components}>
                <div className={style.card}>
                    <div className={style.card__img}>
                        <img src={card1Img} alt="" className={style.cardImg}/>
                    </div>
                    <div className={style.card__body}>
                        <h1>Cairo Station</h1>
                        <p>The original railway station was built as the terminal of the first rail link from Alexandria to Cairo in 1856. The current building was erected in 1892 and upgraded in 1955. As of January 2001 it was undergoing a major modernisation. In early 2011, following the Egyptian Uprising,
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span><Link style={{ textDecoration: "none", color: "white" }} to="/station-details">See More</Link></span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card__img}>
                        <img src={card2Img} alt="" className={style.cardImg}/>
                    </div>
                    <div className={style.card__body}>
                        <h1>Alexandria Station</h1>
                        <p>Alexandria Station,  also known as  Misr Station, is the main railway  station in Alexandria, Egypt. It is located in the center of the city, near the Mediterranean Sea. The station was opened in 1856 and is the second oldest railway station in the  Middle  East and  Africa,
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span><Link style={{ textDecoration: "none", color: "white" }} to="/station-details">See More</Link></span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card__img}>
                        <img src={card3Img} alt="" className={style.cardImg}/>
                    </div>
                    <div className={style.card__body}>
                        <h1>Ismailia Station</h1>
                        <p>Ismailia Station is a railway station in Ismailia, Egypt. It is the main railway station in the city and serves both local and long-distance trains. The station has 10 platforms and a large waiting room. There are also a number of shops and restaurants located in the station.
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span><Link style={{ textDecoration: "none", color: "white" }} to="/station-details">See More</Link></span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}