import React from "react";
import style from "./station.module.css";
import card1Img from"./station1.svg";
import card2Img from"./station2.svg";
import card3Img from"./station3.svg";
import arrowIcon from"./arrow.svg";

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
                        <h1>Fort Railway Station</h1>
                        <p>Fort railway station is a major rail hub in Colombo, Sri Lanka. The station is served by Sri Lanka Railways, 
                            with many inter-city and commuter trains entering each day.
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span>See More</span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card__img}>
                        <img src={card2Img} alt="" className={style.cardImg}/>
                    </div>
                    <div className={style.card__body}>
                        <h1>Fort Railway Station</h1>
                        <p>Fort railway station is a major rail hub in Colombo, Sri Lanka. The station is served by Sri Lanka Railways, 
                            with many inter-city and commuter trains entering each day.
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span>See More</span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card__img}>
                        <img src={card3Img} alt="" className={style.cardImg}/>
                    </div>
                    <div className={style.card__body}>
                        <h1>Fort Railway Station</h1>
                        <p>Fort railway station is a major rail hub in Colombo, Sri Lanka. The station is served by Sri Lanka Railways, 
                            with many inter-city and commuter trains entering each day.
                        </p>
                    </div>
                    <div className={style.card__footer}>
                        <button className={style.more_button}>
                            <span>See More</span>
                            <img src={arrowIcon} alt="" className={style.arrowIcon}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}