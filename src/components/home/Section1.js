import React from "react"
import Navbar from "../Navbar/Navbar";
import sec1Style from"./sec1.module.css";
import {Link} from "react-router-dom";
export default function Section1(){
      // const [transform, settransform]=useState(bg1);
    // const [transition, setTransition]=useState();
    // const listenScrollEvent = (event) => {
    //     if (window.scrollY > 5) {
    //         return (settransform(bg2), setTransition("all 0.5s"))
    //     } else{
    //         return (settransform(bg1), setTransition())
    //     } 
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', listenScrollEvent);
    //     return () =>
    //     window.removeEventListener('scroll', listenScrollEvent);
    // }, []);
    return(
    <div className={sec1Style.sec1} 
    // style={{backgroundImage:`url(${backgroundcolor}) , url(${bg1})`}}
    // style={{
    //     backgroundImage:`url(${backgroundcolor}) , url(${transform})`,
    //     // transform:`${transform}`, 
    //         // transition:`${transition}`,
    //     }}
    >
            <div className={sec1Style.navbar}>
                <Navbar/>
                <h1 className={sec1Style.title}>With Just A Few Clicks <span>You Can Easily Book Your Tickets</span></h1>
                <div className={sec1Style.buttons}>
                    <button style={{textAlign :"center"}} className={sec1Style.book_btn}><span><Link to="/search" style={{ textDecoration: "none", color: "#FFFFFF" }} > BOOK NOW</Link></span></button>
                    <button style={{textAlign :"center"}} className={sec1Style.about_btn}><span><Link to="/about" style={{textDecoration:"none", color:"#FFFFFF"}} > ABOUT</Link></span></button>
                </div>
            </div>
        </div>
    )
}