import React from"react";
import { useState } from "react";
import styleLogin from "./login.module.css";
import googleIcon from"./flat-color-icons_google.svg";
import facebookIcon from"./logos_facebook.svg";
import logoIcon from"./logo.svg";
import visibleIcon from"./visible.svg";
import close from"./Vector.svg";
import Forget from "../forget/Forget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Context/TripContext";

export default function Login(props){
    
    const [openForgetScreen, setOpenForgetScreen] = useState(false)
    const {setToken} = useContext(Context);
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })

    console.log(props.data);

    // console.log(loginData.username)
    // console.log(loginData.password)

    function handleChange(event){
        const{name, value} = event.target;
        setLoginData(prev => ({...prev, [name]: value}))
    }
    const handleLogin = async(e) =>{
        e.preventDefault();
        fetch('https://traind.azurewebsites.net/api/User/Login',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
            },
            body : JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then(data => {
            const token = data.token;
            const message = data.message;
            setToken(token)
            localStorage.setItem("toke", token)
            console.log(token)
            console.log(message)
        })
        .catch(error => console.error(error))
    }

    const [passwordShown, setPasswordShown] = useState(false);

    return(props.trigger) ? (
        <div className={styleLogin.loginPage}>
            <div className={styleLogin.login_container}>
            <div className={styleLogin.left_side}>
                <div className={styleLogin.sidecotent}>
                    <h5 className={styleLogin.welcometext}>Welcome Back to</h5>
                    <h4 className={styleLogin.logo}>TrainD</h4>
                    <img alt=""  src={logoIcon} className={styleLogin.logoIcon} />
                </div>
            </div>
            <div className={styleLogin.right_side}>
                <img src={close} alt="" className={styleLogin.close} onClick={() => props.setTrigger(false)}/> 
                <h4 className={styleLogin.title}>LOGIN</h4>
                <div className={styleLogin.signwith_btns}>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <button className={styleLogin.google_btn}>
                            <img alt="" src={googleIcon} className={styleLogin.googleIcon}/>
                            <span className={styleLogin.sign_withgoogle}>Login With Google</span>
                        </button>
                    </a>
                    <a href="/">
                        <button className={styleLogin.facebook_btn}>
                            <img alt="" src={facebookIcon} className={styleLogin.facebookIcon}/>
                            <span  className={styleLogin.sign_withface}>Login With Facebook</span>
                        </button>
                    </a>
                </div>
                <div className={styleLogin.or}>
                    <hr/>
                    <span>Or</span>
                    <hr/>
                </div>
                <div className={styleLogin.form}>
                    <form className={styleLogin.sign_form} onSubmit={handleLogin}>
                        <input 
                        type="text" 
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                        className={styleLogin.username} 
                        placeholder="Name" />
                        <input type={passwordShown ? "text" : "password" } 
                            name="password"
                            passWordValue={loginData.password}
                            onChange={handleChange}
                            className={styleLogin.password} 
                            placeholder="Password"
                        />
                            <button 
                            onClick={() => setOpenForgetScreen(true)}
                            style={{border:"0px", color:"#FFFFFF", fontSize:"16px", fontWeight:"700", lineHeight:"normal", fontFamily:"'Inria Serif', serif", cursor:"pointer", backgroundColor:"transparent", marginLeft:"55%" }}>
                                Forget Password
                            </button>
                        <button type="submit" className={styleLogin.sign_btn}><span className={styleLogin.login}>LOGIN</span></button>
                    </form>
                </div>
            </div>
        </div>
        <Forget trigger={openForgetScreen} setTrigger={setOpenForgetScreen} />
        </div>
    ) : "";
}