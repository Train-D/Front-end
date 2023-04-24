import React from "react";
import cardStyle from "./card.module.css";

export default function Card(props){
    return(
        <div className={cardStyle.card}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}