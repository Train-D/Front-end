import React, { useState } from "react";
import style from "./reservation.module.css";
import car1 from"./car1.svg";
import cars from "./cars.svg";
import shape1 from "./Ellipse 7.svg";

export default function Reservation(){
    const [showBorder1, setShowBorder1] = useState(true);
    const [showBorder2, setShowBorder2] = useState(false);
    const [showBorder3, setShowBorder3] = useState(false);
    const [showBorder4, setShowBorder4] = useState(false);

    const style1={
        border : showBorder1 ?  '2px solid #281F1B' : 'none',
    }
    const style2={
        border : showBorder2 ?  '2px solid #281F1B' : 'none',
    }
    const style3={
        border : showBorder3 ?  '2px solid #281F1B' : 'none',
    }
    const style4={
        border : showBorder4 ? '2px solid #281F1B' : 'none',
    }

    const handleBorder1 = () =>{
        setShowBorder1(true);
        setShowBorder2(false);
        setShowBorder3(false);
        setShowBorder4(false);
        console.log(true)
    }
    const handleBorder2 = () =>{
        setShowBorder1(false);
        setShowBorder2(true);
        setShowBorder3(false);
        setShowBorder4(false);
        console.log(true)
    }
    const handleBorder3 = () =>{
        setShowBorder1(false);
        setShowBorder2(false);
        setShowBorder3(true);
        setShowBorder4(false);
        console.log(true)
    }
    const handleBorder4 = () =>{
        setShowBorder1(false);
        setShowBorder2(false);
        setShowBorder3(false);
        setShowBorder4(true);
        console.log(true)
    }

    return(
        <div className={style.reservation__container}>
            <div className={style.avilableOrNot__container}>
                <div className={style.unavilable__box}></div>
                <h1 className={style.unavilable__text}>Unavilable</h1>
                <div className={style.avilable__box}></div>
                <h1 className={style.avilable__text}>Avilable</h1>
            </div>
            <div className={style.trains}>
                <div className={style.classes}>
                    <div className={style.classA__text}>
                        <h1>1A</h1>
                        <h1>2A</h1>
                        <h1>3A</h1>
                    </div>
                    <div className={style.classB__text}>
                        <h1>4B</h1>
                        <h1>5B</h1>
                        <h1>6B</h1>
                    </div>
                    <div className={style.classC__text}>
                        <h1>7C</h1>
                        <h1>8C</h1>
                        <h1>9C</h1>
                    </div>
                    <div className={style.classD__text}>
                        <h1>11D</h1>
                        <h1>12D</h1>
                        <h1>13D</h1>
                    </div>
                </div>
                <div className={style.trains__body}>
                <div className={style.classA} onClick={handleBorder1} style={style1}>
                    <img src={car1} alt="" className={style.car1img}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classB} onClick={handleBorder2} style={style2}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classC} onClick={handleBorder3} style={style3}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classD} onClick={handleBorder4} style={style4}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                </div>
                <div className={style.mainTrain__body}>
                    <div className={style.train__car1}>
                        <div className={style.leftsec}>
                            <img src={shape1} alt=""  className={style.shape}/>
                        </div>
                        <div className={style.rightsec}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}