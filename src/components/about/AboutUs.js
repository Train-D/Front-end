import React from "react";
import style from "./aboutus.module.css"
import Navbar from"../Navbar/Navbar";
import Card from "./Card";

export default function AboutUs(){
    return(
        <div className={style.about__page}>
            <div className={style.navbar__container}>
                <Navbar/>
            </div>
            <div className={style.mainBody}>
                <div className={style.sec1}>
                    <div className={style.sec1body}>
                        <h1>About Us</h1>
                        <p>We are a one-stop destination for all your railway ticket booking needs.
                            Our mission is to simplify the process of securing train reservations and provide
                            you with a seamless, hassle-free experience.
                        </p>
                    </div>
                </div>
                <div className={style.sec2}>
                    <h1 className={style.title1}>Our Services</h1>
                    <div className={style.cards}>
                    <Card
                        title="Seat Availability"
                        text="Check real time seat availability for your preferred train and class"
                    />
                    <Card
                        title="Train Schedule"
                        text="Access uo to date train schedules, including arrival and departure times"
                    />
                    <Card
                        title="Live Train Tracking"
                        text="Monitor the real time location of your train with our live train tracking tool"
                    />
                    <Card
                        title="Ticket Booking"
                        text="Book your train tickets with ease using our user-friendlt interface"
                    />
                    </div>
                </div>
                <div className={style.sec3}>
                <h1>Why Choose Us ?</h1>
                    <p>Our website is designed to be intuitive and easy to navigate for users of all ages and abilities,
                        <br/>
                        We prioritize your safety and use advanced encryption technology to protect
                        your personal information and payment details,
                        <br/>
                        We offer competitive rates and exclusive discounts on train tickets, ensuring you get the best deals,
                        Book tickets on the go with our convenient mobile app, available for both iOS and Android devices.</p>
                </div>
                <div className={style.footer}>
                    <h1>@Copyright 2022</h1>
                </div>
            </div>
        </div>
    )
}