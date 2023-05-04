import React from"react";
import { useState } from "react";
import Login from "../login/Login";
import styleSign from "./sign.module.css";
import googleIcon from"./flat-color-icons_google.svg";
import facebookIcon from"./logos_facebook.svg";
import logoIcon from"./logo.svg";
import close from"./Vector.svg";
import visibleIcon from"./visible.svg";

export default function Sign(props){
    const [openLogin, setOpenLogin] = useState(false);

    const handleSign = (e) =>{
        e.preventDefault();
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword =()=>{
        setPasswordShown(!passwordShown)
    }


    return(props.trigger) ? (
        <div>
            <div className={styleSign.signPage}>
                <div className={styleSign.sign_container}>
            <div className={styleSign.left_side}>
                <div className={styleSign.sidecotent}>
                    <h5 className={styleSign.welcometext}>Welcome to</h5>
                    <h4 className={styleSign.logo}>TrainD</h4>
                    <img alt=""  src={logoIcon} className={styleSign.logoIcon} />
                </div>
            </div>
            <div className={styleSign.right_side}>
                <img src={close} alt="" className={styleSign.close} onClick={() => props.setTrigger(false)}/> 
                <h4 className={styleSign.title}>SIGN UP</h4>
                <div className={styleSign.signwith_btns}>
                    <a href="https://mail.google.com/mail/u/0/#inbox">
                        <button className={styleSign.google_btn}>
                            <img alt="" src={googleIcon} className={styleSign.googleIcon}/>
                            <span className={styleSign.sign_withgoogle}>Sign Up With Google</span>
                        </button>
                    </a>
                    <a href="/">
                        <button className={styleSign.facebook_btn}>
                            <img alt="" src={facebookIcon} className={styleSign.facebookIcon}/>
                            <span  className={styleSign.sign_withface}>Sign Up With Facebook</span>
                        </button>
                    </a>
                </div>
                <div className={styleSign.or}>
                    <hr/>
                    <span>Or</span>
                    <hr/>
                </div>
                <div className={styleSign.form}>
                    <form className={styleSign.sign_form} onSubmit={handleSign}>
                        <div className={styleSign.name}>
                            <input type="text" name="firstname" className={styleSign.firstname} placeholder="First Name"/>
                            <input type="text" name="lastname" className={styleSign.lastname} placeholder="Last Name"/>                                        
                        </div>
                        <input type="email" name="email" className={styleSign.email} placeholder="E-mail" />
                        <input 
                            type={passwordShown ? "text" : "password"} 
                            name="password" 
                            className={styleSign.password} 
                            placeholder="Password" />
                        <button  
                            className={styleSign.visibleBtn} 
                            onClick={togglePassword}>
                            <img src={visibleIcon} alt=""/>
                        </button>
                        <button type="submit" className={styleSign.sign_btn}  onClick={() => setOpenLogin(true)}><span className={styleSign.signup}>sign up</span></button>
                    </form>
                </div>
                <p className={styleSign.question}>already have an account?<span className={styleSign.login} onClick={() => setOpenLogin(true)}>login</span></p>
            </div>
            </div>
            </div>
            <Login  trigger={openLogin} setTrigger={setOpenLogin}/>
        </div>
    ) :"";
}
