import React, {useState, useRef, useEffect, useCallback} from "react";
import style from "./traincars.module.css";

export default function TrainsCar(){
    // const [x, setBackground] = useState(false);
    // const [color, setColor] = useState(false);
    // const unavilableStyle = {
    //     backgroundColor : x ? "#4D4039" : "#D6C0B8",
    //     color : color ? "#FFFFFF" : "#4E4039"
    // }

    // // const handleButtonChange = () =>{
    // //     setBackground(!background);
    // //     setColor(!color)
    // // }
    // const buttonRef = useRef(null);
    // const handleClick = () =>{
    //     setBackground(!buttonRef.current.x);
    //     // buttonRef.current.setBackground = !background;
    //     console.log(setBackground);
    // };
    return(
        <div className={style.train__cars}>
        <div className={style.cars__seats}>
            <div className={style.group1}>
            <button className={style.seat4} >04</button>
            <button className={style.seat8}>08</button>
            <button className={style.seat12}>12</button>
            <button className={style.seat16}>16</button>
            </div>
            <div className={style.group2}>
            <button className={style.seat4}>03</button>
            <button className={style.seat8}>07</button>
            <button className={style.seat12} >11</button>
            <button className={style.seat16}>15</button>
            </div>
            <hr style={{width:"110%"}}/>
            <div className={style.group3}>
            <button className={style.seat4}>02</button>
            <button className={style.seat8}>06</button>
            <button className={style.seat12}>10</button>
            <button className={style.seat16}>14</button>
            </div>
            <div className={style.group4}>
                <button className={style.seat4} >01</button>
                <button className={style.seat8}>05</button>
                <button className={style.seat12}>09</button>
                <button className={style.seat16} >13</button>
            </div>
        </div>
    </div>
    )
}