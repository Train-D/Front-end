import React, {useState, useContext} from "react";
import style from "./payment.module.css";
import creditIcon from "./crediticon.svg"
import { Context } from "../../Context/TripContext";
// import { CreditDataContext } from "../../Context/TripContext";

export default function Payment(){
    
    const {setCreditCardData} = useContext(Context)
    const {token} = useContext(Context)
    const [creditData, setCreditData] = useState({
        name:"",
        cardNumber:"",
        email:"",
        expirationYear:"",
        expirationMonth:"",
        cvc:""
    })

    function handleChange(event){
        const {name, value} = event.target;
        setCreditData(prevData => ({
            ...prevData,
            [name] : value
        }))
    }
    
    setCreditCardData(creditData)
    return(
        <div className={style.payment__container}>
            <div className={style.creditcard}>
                <img src={creditIcon} alt="" style={{margin:"0px"}}/>
                <div className={style.credit_expiryDate}><h1 style={{textAlign:"right", marginTop:"-5%"}} >{creditData.expirationMonth === "" && creditData.expirationYear === "" ? "Expiry Date" : creditData.expirationMonth + "/" + creditData.expirationYear}</h1></div>
                <div className={style.credit_cardNumber}><h1>{creditData.cardNumber === "" ? "Card Number" : creditData.cardNumber}</h1></div>
                <div className={style.credit_userName}><h1>{creditData.name === "" ? "Name" : creditData.name}</h1></div>
                <div className={style.credit_DebitCard}><h1  style={{textAlign:"right", color:"rgba(255,255,255,0.57)", marginTop:"-5%"}}>Debit Card</h1></div>
            </div>
            <div className={style.payment__form}>
                <form>
                    <div className={style.cardNumber}>
                        <label for="cardNumber" style={{fontSize:"1.25em", color:"#FFFFFF",fontWeight:"400"}} >card Number</label>
                        <label  style={{fontSize:"1em", color:"rgba(240,240,240,0.9)",fontWeight:"300"}}>Enter the 16-digit card number on the card</label>
                        <input 
                            type="text" 
                            name="cardNumber" 
                            placeholder="XXXX - XXXX - XXX - XXX"
                            value={creditData.cardNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.cvvNumber}>
                        <div className={style.labels}>
                            <label for="cvvNumber" style={{fontSize:"1.25em", color:"#FFFFFF",fontWeight:"400"}} >cvv Number</label>
                            <label  style={{fontSize:"1em", color:"rgba(240,240,240,0.9)",fontWeight:"300"}}>Enter the 3 or 4 digit number on the card</label>
                        </div>
                        <input 
                            type="text" 
                            name="cvc"
                            value={creditData.cvc}
                            placeholder="123"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.expiryDate}>
                        <div className={style.labels}>
                            <label for="expiryDate" style={{fontSize:"1.25em", color:"#FFFFFF",fontWeight:"400"}}>Expiry Date</label>
                            <label  style={{fontSize:"1em", color:"rgba(240,240,240,0.9)",fontWeight:"300"}}>Enter expiration date of the card</label>
                        </div>
                        <div className={style.inputs}>
                            <input 
                                type="text" 
                                name="expirationMonth" 
                                placeholder="mm"
                                value={creditData.expirationMonth}
                                onChange={handleChange}
                            />
                            <hr style={{color:"#FFFFFF",border:"1px solid #FFFFFF", width:"1%",transform:"rotate(209.29deg)"}}/>
                            <input 
                                type="text" 
                                name="expirationYear" 
                                placeholder="YY"
                                value={creditData.expirationYear}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={style.userName}>
                        <label for="Name" style={{fontSize:"1.25em", color:"#FFFFFF",fontWeight:"400"}} >Name</label>
                        <label  style={{fontSize:"1em", color:"rgba(240,240,240,0.9)",fontWeight:"300"}}>Enter your name on the card</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="your name"
                            value={creditData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.userEmail}>
                        <label for="Email" style={{fontSize:"1.25em", color:"#FFFFFF",fontWeight:"400"}} >Email</label>
                        <label  style={{fontSize:"1em", color:"rgba(240,240,240,0.9)",fontWeight:"300"}}>Enter your email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={creditData.email}
                            onChange={handleChange}
                            placeholder="name@example"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}