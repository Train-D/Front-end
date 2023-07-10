import React from "react"

export default function errorMsg(props){
    return(props.trigger) ? (
        <h1>{props.data}</h1>
    ) : ""
}