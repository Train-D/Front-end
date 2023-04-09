import React from"react";
import footerStyle from "./footer.module.css";
import facebookIcon from"./facebook.svg";
import instgramIcon from"./instgram.svg";
import logoIcon from"./logo.svg";

export default function Footer(){
    return(
        <div className={footerStyle.footer_container}>
            <footer className={footerStyle.footer}>
                <div className={footerStyle.sec1}>
                    <div className={footerStyle.left_sec}>
                        <ul className={footerStyle.list}>
                            <li className={footerStyle.list_items}><a href="/">HOME</a></li>
                            <li className={footerStyle.list_items}><a href="/">ABOUT</a></li>
                            <li className={footerStyle.list_items}><a href="/">BOOKING</a></li>
                            <li className={footerStyle.list_items}><a href="/">STATIONS</a></li>
                            <li className={footerStyle.list_items}><a href="/">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className={footerStyle.contact_sec}>
                        <h1 className={footerStyle.title}>Contact Us</h1>
                        <h4 className={footerStyle.telphone}>tel:033-122-444</h4>
                        <h4 className={footerStyle.email}>e-mail: xxx@gmail.com</h4>
                        <div className={footerStyle.icons}>
                            <a href="/" ><img src={facebookIcon} alt="" className={footerStyle.facebookIcon}/></a>
                            <a href="/"><img src={instgramIcon} alt=""  className={footerStyle.instgramIcon}/></a>
                        </div>
                    </div>
                    <div className={footerStyle.logos}>
                        <img src={logoIcon} alt="" className={footerStyle.logoIcon}/>
                        <h1 className={footerStyle.logo}>TrainD</h1>
                    </div>
                </div>
                <div className={footerStyle.sec2}>
                    <h1 className={footerStyle.footer_text}>@ copyright 2022 </h1>
                </div>
            </footer>
        </div>
    )
}