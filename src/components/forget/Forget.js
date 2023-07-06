import React, {useState} from "react";
import style from "./forget.module.css";
import close from "./Vector.svg";
import { useContext } from "react";
import { Context } from "../../Context/TripContext";

export default function Forget(props){
    
    const {token} = useContext(Context)
    const [email, setEmail] = useState({
        email:''
    })
    console.log(token);
    const handleSubmit = async (e) =>{
        const response = await fetch("https://traind.azurewebsites.net/api/User/ForgotPassword",{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body : JSON.stringify(email)
        })
        if(response.ok){
            const res = await response .json();
            console.log(`${JSON.stringify(res)}`)
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setEmail(prev => ({...prev, [name]: value}))
    }
    
    return(props.trigger) ? (
        <div className={style.forgetPage}>
            <div className={style.forget__container}>
                <img src={close} alt="" className={style.close} onClick={() => props.setTrigger(false)} />
            <div className={style.mainBody}>
            <h1 style={{color:"#FFFFFF", fontSize:"30px", fontFamily:"'Inria Serif', serif", fontStyle:"normal", fontWeight:"700", lineHeight:"normal"}}>Reset Password</h1>
            <p style={{width:"100%",color:"#FFFFFF", textAlign:"left", fontSize:"20px", fontFamily:"'Inria Serif', serif", fontStyle:"normal", fontWeight:"300", lineHeight:"normal"}}>
            Enter the email associated with your account and we’ll send an email with instructions to reset your password
            </p>
                <form  onSubmit={handleSubmit} className={style.forgetForm} style={{display:"flex", flexDirection:"column", justifyContent:"left",margin:"0px"}}>
                    <input
                    className={style.email}
                    name="email"
                    value={email.email}
                    required
                    onChange={handleChange}
                    type="email" 
                    placeholder="Enter your E-mail"
                    />
                    <button type="submit" style={{width:"55%",marginTop:"5%", height:"42px", border:"1px solid #41312A", borderRadius:"14px", backgroundColor:"#41312A", cursor:"pointer"}}>
                    <span style={{textAlign:"center", color:"#FFFFFF", fontSize:"18px", fontWeight:"400", lineHeight:"normal", fontStyle:"normal", fontFamily:"'Inria Serif', serif"}}>
                        Send
                    </span>
                    </button>
                </form>
            </div>
        </div>
        </div>
    ) : "";
}