import React from "react";
import style from"./contact.module.css";
import Navbar from"../Navbar/Navbar";
import phoneIcon from"./phoneicon.svg";
import mailIcon from"./mailicon.svg";
import { useState } from "react";
import PhoneInput from 'react-phone-number-input/input'


export default function Contact(){
    const [value, setValue] = useState()
    return(
        <div className={style.contact}>
            <div className={style.maincontact}>
                <div className={style.navbar__container}>
                    <Navbar/>
                </div>
               
                <h1 className={style.title}> Contact Us 
                    <span>We love hearing from our customers! If you have any questions, suggestions, or feedback, Please feel free to get in touch.</span>
                </h1>
                <div className={style.body_contant}>

                    <div className={style.leftpart}>
                        <div className={style.leftpart1}>
                            <div className={style.phoneicon}>
                                <img src={phoneIcon} alt="" className={style.icon}/>
                            </div>
                            <div className={style.icon_data}>
                            <h3>Phone</h3>
                            <p>+1 (xxx) xxx-xxxx</p> 
                            </div>
                        </div>
                        <div className={style.leftpart2}>
                            <div className={style.mailicon}>
                                <img src={mailIcon} alt="" className={style.icon} />
                            </div>
                            <div className={style.icon_data}>
                            <h3>Email</h3>
                            <p>support@railwayreservationname.com</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className={style.rightpart}>
                            <h2 className={style.form_title}>Send Message</h2>
                            <div className={style.form}>
                                <form className={style.contact_form} >
                                    <div className={style.name}>
                                        <input type="text" name="firstname" className={style.firstname} placeholder="First Name"/>
                                        <input type="text" name="lastname" className={style.lastname} placeholder="Last Name"/>                                        
                                    </div>
                                    <input type="email" name="email" className={style.email} placeholder="E-mail" />
                                    <PhoneInput placeholder="Phone number" className={style.num} value={value} onChange={setValue}/>
                                    <input type="text" name="massage" className={style.massage} placeholder="Type your Message"/>
                                    <button type="submit" className={style.send_btn}><span className={style.send}>Send</span></button>
                                </form>
                                    
                        </div>
                    </div>


                    
                </div>
            </div>

        </div>
    )
}