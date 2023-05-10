import React, {useState} from "react";
import style from "./book.module.css"
import Navbar from "../Navbar/Navbar";
import Reservation from "./Reservation";
import Payment from "./Payment";
import Ticket from "../ticket/Ticket";

export default function Book(){
    const [openTicket, setOpenTicket] = useState(false);
    return(
        <div className={style.book_page}>
            <Navbar />
            <div className={style.main_body}>
                <div className={style.book_container}>
                    <Reservation />
                    <Payment />
                </div>
                <div className={style.book_button}>
                    <div className={style.price}>
                        <span>Price:</span>
                    </div>
                    <button className={style.book_btn }  onClick={() => setOpenTicket(true)}>Book</button>
                </div>
            </div>
            <Ticket trigger={openTicket} setTrigger={setOpenTicket}/>
        </div>
    )

}