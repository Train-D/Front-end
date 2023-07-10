import React from "react";
import success from "./mdi_success-circle-outline.svg";
import error from "./Vector.svg";

export default function PopUpMessage({message, type, onClose}){
    
    const style={
        position:"fixed",
        zIndex:"999",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        backgroundColor:"rgba(0.8745, 0.8353, 0.8039, 0.6)",
        width:"100%",
        height:"100%",
        paddingTop:"20%"
    }

    const popupStyle ={
        width:"30%",
        height:"50%",
        backgroundColor: "#7E706A",
        border: "1px solid #7E706A",
        color:"#E7E7E7",
        paddingTop:"3%",
        paddingBottom:"4%",
        paddingLeft:"4%",
        paddingRight:"3%",
        display:"flex",
        flexDirection:"column",
        marginLeft:"auto",
        marginRight:"auto",
        textAlign:"center"
    }

    return(
        <div style={style}>
                <div className={`popup ${type}`} style={popupStyle}>
            <img src={type === 'success' ? success : error} alt=""  style={{marginBottom:"6%",width:"50%", height:"50%", marginLeft:"auto", marginRight:"auto"}}/>
            <span  className="popup-message">
                {message}
            </span>
            <button className="popup-close" onClick={onClose} 
            style={{marginTop:"6%",cursor:"pointer",width:"3%",marginLeft:"auto",marginRight:"auto",color:"#FFFFFF", backgroundColor:"#4C4033", border:"1px solid #4C4033", borderRadius:"18px", paddingTop:"3%", paddingBottom:"3%"}}>OK</button>
        </div>
        </div>
    )
}