import React from"react";
import { useState } from "react";
import styleLogin from "./login.module.css";
import googleIcon from"./flat-color-icons_google.svg";
import facebookIcon from"./logos_facebook.svg";
import logoIcon from"./logo.svg";
import visibleIcon from"./visible.svg";
import close from"./Vector.svg";

export default function Signin(){

    const handleLogin = (e) =>{
        e.preventDefault();
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const toggleShoownPassword =()=>{
        setPasswordShown(!passwordShown)
    }

    return(
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
                <img src={close} alt="" className={styleLogin.close}/> 
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
                        <input type="text" name="name" className={styleLogin.username} placeholder="Name" />
                        <input type={passwordShown ? "text" : "password"} 
                            name="password" 
                            className={styleLogin.password} 
                            placeholder="Password"/>
                        <button  
                            className={styleLogin.visibleBtn} 
                            onClick={toggleShoownPassword}>
                            <img src={visibleIcon} alt=""/>
                        </button>
                        <button type="submit" className={styleLogin.sign_btn}><span className={styleLogin.login}>LOGIN</span></button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}