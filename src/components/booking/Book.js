import React, {useContext, useState} from "react";
import style from "./book.module.css"
import Navbar from "../Navbar/Navbar";
import Reservation from "./Reservation";
import Payment from "./Payment";
import Ticket from "../ticket/Ticket";
import { Context } from "../../Context/TripContext";


export default function Book(){
    
    const [openTicket, setOpenTicket] = useState(false);
    const [customer, setCustomer] = useState({})
    const [payment, setPayment] = useState({})
    const [ticket, setTicket] = useState({})
    const {selectedTripId, date, creditCardData, selectedSeat, token} = useContext(Context);
    // const {creditData} = useContext(CreditDataContext);
    console.log(selectedSeat)
    console.log(selectedTripId)
    async function bookTicket (jsonBody){
        try{
            const result = await fetch("https://traind.azurewebsites.net/api/Ticket/Book",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify(jsonBody)
            });
            const resultData = await result.json();
            setTicket(resultData)
            console.log(resultData)
        }
        catch(error){
            console.error(error)
        }
    }

    async function addPayment (body){
        console.log(selectedSeat.price)
        const amount = selectedSeat.price * 100
        console.log(amount)
        try{
            const res = await fetch("https://traind.azurewebsites.net/api/Stripe/Payment/add",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify(body)
            });
            const resData = await res.json();
            setPayment(resData)
            console.log(resData)
            const ticketData ={
                tripId: selectedTripId,
                date : date,
                seatNumber: selectedSeat.seatNumber,
                coach:selectedSeat.coach,
                class: selectedSeat.class,
                amount : amount,
                paymentId:payment.paymentId
            }
            console.log(ticketData)
            bookTicket(ticketData)
        }
        catch(error){
            console.error(error)
        }
    }

    
    // console.log(`${selectedTripId}`);
    console.log(`${date}`)
    // console.log(selectedSeat)
    // console.log(creditCardData.name)
    // console.log(creditData)
    // console.log(creditData.name)
    // console.log(creditData.cardNumber)
    // console.log(creditData.cvc)

    async function handleSubmit(event){
        setOpenTicket(true)
        const customerData ={
            email: creditCardData.email,
            name : creditCardData.name,
            creditCard:{
                name : creditCardData.name,
                cardNumber: creditCardData.cardNumber,
                expirationYear:creditCardData.expirationYear,
                expirationMonth: creditCardData.expirationMonth,
                cvc: creditCardData.cvc
            }
        }
        console.log(customerData)
        try{
            const response = await fetch("https://traind.azurewebsites.net/api/Stripe/customer/add",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify(customerData)
            });
            const data = await response.json();
            setCustomer(data);
            console.log(customer)
            console.log(customer.customerId)
            console.log(creditCardData.email)
            const amount = selectedSeat.price * 100
            const paymentData ={
                customerId: customer.customerId,
                receiptEmail: creditCardData.email,
                description: "Test",
                currency: "USD",
                amount: amount
            }
            addPayment(paymentData)
        }
        catch(error){
            console.log(error)
        }
        console.log(customer)
        console.log(payment)
        console.log(ticket)
    }
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
                    <button className={style.book_btn }  onClick={handleSubmit}>Book</button>
                </div>
            </div>
            <Ticket trigger={openTicket} setTrigger={setOpenTicket} />
        </div>
    )

}