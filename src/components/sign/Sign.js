import React from"react";
import { useState, useEffect } from "react";
import Login from "../login/Login";
import styleSign from "./sign.module.css";
import googleIcon from"./flat-color-icons_google.svg";
import facebookIcon from"./logos_facebook.svg";
import logoIcon from"./logo.svg";
import close from"./Vector.svg";
import visibleIcon from"./visible.svg";

export default function Sign(props){
    const [openLogin, setOpenLogin] = useState(false);

    // const handleSubmit = () =>{
    //     setOpenLogin(true)
    //     console.log(firstName, lastName, email, password)
    // }

    const [userData,setUserData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(userData)
        const response = await fetch('https://traind.azurewebsites.net/api/User/Register',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body : JSON.stringify(userData)
        });
        if(response.ok){
            const data = await response.json();
            console.log(`${JSON.stringify(data)}`)
            localStorage.setItem('firstName', userData.firstName)
            localStorage.setItem('lastName', userData.lastName)
            localStorage.setItem('email', userData.email)
            localStorage.setItem('password', userData.password)
            localStorage.setItem('userName', userData.userName)
        }
        else{
            console.error(`${response.status} ${response.statusText}`)
        }


        console.log(userData)
    }

    const handleInputChange = (event) =>{
        const{name, value} = event.target;
        setUserData(prevState => ({...prevState, [name]: value}))
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
                    <form className={styleSign.sign_form} onSubmit={handleSubmit}>
                        <div className={styleSign.name}>
                            <input 
                                type="text"
                                name="firstName"
                                value={userData.firstName}
                                className={styleSign.firstname}
                                placeholder="First Name" 
                                required
                                onChange={handleInputChange}
                            />
                            <input 
                                type="text" 
                                name="lastName"
                                value={userData.lastName}
                                className={styleSign.lastname} 
                                placeholder="Last Name" 
                                required
                                onChange={handleInputChange}
                            />                                        
                        </div>
                        <input 
                                type="text" 
                                name="userName"
                                value={userData.userName}
                                className={styleSign.email} 
                                placeholder="User Name" 
                                required
                                onChange={handleInputChange}
                        />   
                        <input 
                            type="email" 
                            name="email"
                            value={userData.email} 
                            className={styleSign.email} 
                            placeholder="E-mail" 
                            required
                            onChange={handleInputChange}
                        />                                     
                        <input 
                            type={passwordShown ? "text" : "password"} 
                            name="password" 
                            value={userData.password}
                            id="password"
                            className={styleSign.password} 
                            placeholder="Password" 
                            required
                            onChange={handleInputChange}
                        />
                        <button type="submit" 
                            className={styleSign.sign_btn}  
                        ><span className={styleSign.signup}>sign up</span></button>
                    </form>
                </div>
                <p className={styleSign.question}>already have an account?<span className={styleSign.login} onClick={() => setOpenLogin(true)}>login</span></p>
            </div>
            </div>
            </div>
            <Login  trigger={openLogin} setTrigger={setOpenLogin} data={userData.data}/>
        </div>
    ) :"";
}
