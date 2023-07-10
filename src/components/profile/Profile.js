import React, {useContext, useEffect, useState } from "react";
import profStyle from "./Profile.module.css";
import logoIcon from "./logo.svg";
import ProfileIcon from "./ProfileIcon.png";
import NotationIcon from "./NotationIcon.png";
import TicketIcon from "./TicketIcon.png";
import CameraIcon from "./CameraIcon.svg";
import PhoneInput from 'react-phone-number-input/input';
import { Link } from "react-router-dom";
import googleIcon from "./google-play-icon.svg";
import appleIcon from "./apple.svg";
import arrowIcon from "./arrow.svg";
import Navbar from "../Navbar/Navbar";
import ViewTicket from "./ViewT";
import { Context } from "../../Context/TripContext";


export default function Profile() {

    const [openTicket, setOpenTicket] = useState(false)
    const [value, setValue] = useState()
    const [visibleDiv, setVisibleDiv] = useState(1);

    const handleButtonClick = (divNumber) => {
        setVisibleDiv(divNumber);
    };
    return (
        <div className={profStyle.body}>
            <div className={profStyle.part1}>
                <Navbar />
            </div>
            <div className={profStyle.part2}>
                <div className={profStyle.showbox}>
                    <div className={profStyle.profilelist} >
                        <img src={ProfileIcon} alt="" className={profStyle.icon} />
                        <button className={profStyle.data} onClick={() => handleButtonClick(1)}>
                            Profile
                        </button>
                    </div>
                    <hr />
                    <div className={profStyle.profilelist}>
                        <img src={TicketIcon} alt="" className={profStyle.icon} />
                        <button className={profStyle.data} onClick={() => handleButtonClick(2)}>
                            Your Ticket
                        </button>
                    </div>

                </div>
                <div className={profStyle.Profile} style={{ display: visibleDiv === 1 ? 'block' : 'none' }} >
                    <p>Passenger details</p>
                    <hr />
                    <div className={profStyle.profileform}>
                        <div className={profStyle.profilephoto}>
                            <img src={CameraIcon} alt="" className={profStyle.cameraicon} />
                        </div>
                        <div className={profStyle.form_profile}>
                            <form className={profStyle.forminput} >
                                
                                <div className={profStyle.name}>
                                    <input type="text" name="firstname" className={profStyle.firstname} placeholder="First Name" ></input>
                                    <input type="text" name="lastname" className={profStyle.lastname} placeholder="Last Name" ></input>
                                </div>
                                <input type="text" name="User name" className={profStyle.username} placeholder="User name" ></input>
                                <input type="email" name="email" className={profStyle.email} placeholder="E-mail" ></input>
                                <PhoneInput placeholder="Phone number" className={profStyle.num} value={value} onChange={setValue} />
                                <input type="text" name="City" className={profStyle.city} placeholder="City" />
                                <Link className={profStyle.change}>Change Password</Link>
                                <button type="submit" className={profStyle.save_btn}><span className={profStyle.save}>Save</span></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={profStyle.vtiket} style={{ display: visibleDiv === 2 ? 'block' : 'none' }}>
                    <p>Your tickets</p>
                    <hr />
                    <div className={profStyle.ticketbox}>
                        <div>Alexandria</div>
                        <div>9:00 am</div>
                        <div className={profStyle.ticketview} >
                            <button onClick={() => setOpenTicket(true)} >View <img src={arrowIcon} alt="" className={profStyle.arrowIcon} /></button>
                        </div>
                    </div>
                    <div className={profStyle.ticketbox}>
                        <div>Cairo</div>
                        <div>10:30 pm</div>
                        <div className={profStyle.ticketview} >
                            <button onClick={() => setOpenTicket(true)} >View <img src={arrowIcon} alt="" className={profStyle.arrowIcon} /></button>
                        </div>
                    </div>
                </div>
                <div className={profStyle.book} style={{ display: visibleDiv === 2 ? 'block' : 'none', marginRight: "5%" }}>
                    <p style={{ textAlign: "center" }}>You can book tickets</p>
                    <hr />
                    <div style={{ textAlign: "center" }}>
                        <button className={profStyle.book_btn}><span><Link to="/search" style={{ textDecoration: "none", color: "#FFFFFF" }} > BOOK NOW</Link></span></button>
                    </div>
                    <div className={profStyle.or}>
                        <hr />
                        <span>OR</span>
                        <hr />
                    </div>

                    <div>
                        <div style={{ textAlign: "center" }}>Download pplication</div>
                        <div className={profStyle.buttons}>
                            <button className={profStyle.icon_btn}>
                                <img src={googleIcon} className={profStyle.googleIcon} alt="" />
                                <div className={profStyle.text}>
                                    <h6> GET IT ON </h6>
                                    <h5>Google play</h5>
                                </div>
                            </button>
                            <button className={profStyle.icon_btn}>
                                <img src={appleIcon} className={profStyle.appleIcon} alt="" />
                                <div className={profStyle.text}>
                                    <h6> Available on the </h6>
                                    <h5>App Store</h5>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
            <div>
            </div>
            <ViewTicket trigger={openTicket} setTrigger={setOpenTicket} />
        </div>
    )
}