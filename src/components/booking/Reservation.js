import React, { useState, useContext, useEffect } from "react";
import style from "./reservation.module.css";
import car1 from"./car1.svg";
import cars from "./cars.svg";
import shape1 from "./Ellipse 7.svg";
import TrainsCar from "./TrainsCar";
import car from "./Group 283.svg"
import trainLine from "./trainLine.svg";
import { Context } from "../../Context/TripContext";
import axios from "axios";

export default function Reservation(){
    
    const {imageUrl} = `${car}`
    const {setSelectedSeat} =useContext(Context);
    const {selectedTripId, date, token} = useContext(Context);
    console.log(selectedTripId)
    console.log(date)

    const [classes, setClasses] = useState([]);
    const [seats, setSeats] = useState([]);

    const trainData = {
        tripId: selectedTripId,
        date: date,
    };

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch("https://traind.azurewebsites.net/api/Trips/TrainInfo",{
                    method: 'POST',
                    headers:{
                        'Content-Type' : 'application/json',
                        'Accept' : 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(trainData)
                });
                const responseData = await response.json();
                setClasses(responseData.classes);
                setSeats(responseData.seats)
                console.log(responseData.classes)
                console.log(responseData.seats)

            }catch(error){
                console.error(error)
            }
        }
        fetchData();
    },[])
    
    console.log(classes)
    console.log(seats)
    
    const [showBorder1, setShowBorder1] = useState(true);
    const [showBorder2, setShowBorder2] = useState(false);
    const [showBorder3, setShowBorder3] = useState(false);
    const [showBorder4, setShowBorder4] = useState(false);

    const [car1Bg, setCar1Bg] = useState(true)
    
    const style1={
        border : showBorder1 ?  '2px solid #281F1B' : 'none',
    }
    const style2={
        border : showBorder2 ?  '2px solid #281F1B' : 'none',
    }
    const style3={
        border : showBorder3 ?  '2px solid #281F1B' : 'none',
    }
    const style4={
        border : showBorder4 ? '2px solid #281F1B' : 'none',
    }

    const handleBorder1 = () =>{
        setCar1Bg(true)
        setShowBorder1(true);
        setShowBorder2(false);
        setShowBorder3(false);
        setShowBorder4(false);
        console.log(true)
    }
    const handleBorder2 = () =>{
        setShowBorder1(false);
        setShowBorder2(true);
        setShowBorder3(false);
        setShowBorder4(false);
        setCar1Bg(false);
        console.log(true)
    }
    const handleBorder3 = () =>{
        setShowBorder1(false);
        setShowBorder2(false);
        setShowBorder3(true);
        setShowBorder4(false);
        setCar1Bg(false);
        console.log(true)
    }
    const handleBorder4 = () =>{
        setShowBorder1(false);
        setShowBorder2(false);
        setShowBorder3(false);
        setShowBorder4(true);
        setCar1Bg(false);
        console.log(true)
    }


    const handleSeatClick = (seat) => {
        setSelectedSeat(seat);
    };

    return(
        <div className={style.reservation__container}>
            <div className={style.avilableOrNot__container}>
                <div className={style.unavilable__box}></div>
                <h1 className={style.unavilable__text}>Unavilable</h1>
                <div className={style.avilable__box}></div>
                <h1 className={style.avilable__text}>Avilable</h1>
            </div>
            <div className={style.trains}>
                <div className={style.classes}>
                    <div className={style.classA__text}>
                        <h1>1A</h1>
                        <h1>2A</h1>
                        <h1>3A</h1>
                    </div>
                    <div className={style.classB__text}>
                        <h1>4B</h1>
                        <h1>5B</h1>
                        <h1>6B</h1>
                    </div>
                    <div className={style.classC__text}>
                        <h1>7C</h1>
                        <h1>8C</h1>
                        <h1>9C</h1>
                    </div>
                    <div className={style.classD__text}>
                        <h1>11D</h1>
                        <h1>12D</h1>
                        <h1>13D</h1>
                    </div>
                </div>
                <div className={style.trains__body}>
                <div className={style.classA} onClick={handleBorder1} style={style1}>
                    <img src={car1} alt="" className={style.car1img}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classB} onClick={handleBorder2} style={style2}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classC} onClick={handleBorder3} style={style3}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                <div className={style.classD} onClick={handleBorder4} style={style4}>
                    <img src={cars} alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                    <img src={cars}  alt="" className={style.carsimg}/>
                </div>
                </div>
                <div className={style.mainTrain__body}>
                    <div className={style.trainLines}>
                        <img src={trainLine} alt=""/>
                        <img src={trainLine} alt=""/>
                    </div>
                    {
                    showBorder1 &&
                    classes.filter(classItem => classItem.className === "A").map(classItem => (
                        <div key={classItem.className} style={{display:"flex", paddingTop:"1%", paddingBottom:"1%", paddingLeft:"0%", width:"100%", gap:"0%"}}>
                            {[...Array(classItem.coaches)].map((_, index) => (
                                <div key={`coach-${index + 1}`} className={`${style.train__cars} ${classItem.className === "A" && index === 0 ? style.firstClass : ""}`} style={{width:"35%", marginLeft:"auto", marginRight:"auto"}}>
                                    {[...Array(classItem.numberOfSeatsCoach / 4)].map((_, seatGroupIndex) => (
                                        <div key={`seat-group-${seatGroupIndex + 1}`} style={{display: "flex", gap: "6px", flexDirection: "column", margin:"0px", marginTop:"0px", marginLeft:"11%" }}>
                                            {[...Array(4)].map((_, seatIndex) => {
                                                   const seatNumber = seatGroupIndex * 4 + seatIndex + 1;
                                                const isSeatReserved =
                                                    seats.some(seat =>
                                                    seat.coach === index + 1 &&
                                                    seat.class === classItem.className &&
                                                    seat.seatNumber === seatNumber);
                                                return (
                                                    <button
                                                        key={`seat-${seatNumber}`}
                                                        disabled={isSeatReserved}
                                                        onClick={() => handleSeatClick({
                                                            seatNumber,
                                                            coach: index + 1,
                                                            class: classItem.className,
                                                            price: classItem.classPrice,
                                                        })}
                                                        style={{
                                                            backgroundColor: seats.some(seat =>
                                                                seat.coach === index + 1 &&
                                                                seat.class === classItem.className &&
                                                                seat.seatNumber === seatNumber
                                                            ) ? "#4D4039" : "#D6C0B8",
                                                            color: seats.some(seat =>
                                                                seat.coach === index + 1 &&
                                                                seat.class === classItem.className &&
                                                                seat.seatNumber === seatNumber
                                                            ) ? "#D6C0B8" : "#4D4039",
                                                            border: "1px solid rgba(94,59,32,0.5)",
                                                            borderRadius: "10px",
                                                            fontFamily: "'Inria Serif', serif",
                                                            fontStyle: "normal",
                                                            fontSize: "18px",
                                                            fontWeight: "400",
                                                            lineHeight: "22px",
                                                            cursor: "pointer",
                                                            marginTop: "0px",
                                                            width:"105%",
                                                            height:"100",
                                                        }}>
                                                        {seatNumber < 10 ? `0${seatNumber}` : seatNumber}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                    {
                        showBorder2 &&
                        classes.filter(classItem => classItem.className === "B").map(classItem => (
                            <div key={classItem.className} style={{display:"flex", paddingTop:"1%", paddingBottom:"1%", paddingLeft:"0%", width:"100%", gap:"0%"}}>
                            {[...Array(classItem.coaches)].map((_, index) => (
                                <div key={`coach-${index + 1}`}  className={style.train__cars} style={{width:"35%", marginLeft:"auto", marginRight:"auto"}}>
                                {[...Array(classItem.numberOfSeatsCoach / 4)].map((_, seatGroupIndex) => (
                                <div key={`seat-group-${seatGroupIndex + 1}`} style={{ display: "flex", gap: "6px", flexDirection: "column", margin:"0px", marginTop:"0px", marginLeft:"10px" }}>
                                    {[...Array(4)].map((_, seatIndex) => {
                                        const seatNumber = seatGroupIndex * 4 + seatIndex + 1;
                                        const isSeatReserved =
                                        seats.some(seat =>
                                        seat.coach === index + 1 &&
                                        seat.class === classItem.className &&
                                        seat.seatNumber === seatNumber);
                                        return (
                                            <button
                                            key={`seat-${seatNumber}`}
                                            disabled={isSeatReserved}
                                            onClick={() => handleSeatClick({
                                            seatNumber,
                                            coach: index + 1,
                                            class: classItem.className,
                                            price: classItem.classPrice,
                                        })}
                                            style={{
                                            backgroundColor: seats.some(seat =>
                                            seat.coach === index + 1 &&
                                            seat.class === classItem.className &&
                                            seat.seatNumber === seatNumber
                                            ) ? "#4D4039" : "#D6C0B8",
                                            color: seats.some(seat =>
                                            seat.coach === index + 1 &&
                                            seat.class === classItem.className &&
                                            seat.seatNumber === seatNumber
                                            ) ? "#D6C0B8" : "#4D4039",
                                            border: "1px solid rgba(94,59,32,0.5)",
                                            borderRadius: "10px",
                                            fontFamily: "'Inria Serif', serif",
                                            fontStyle: "normal",
                                            fontSize: "18px",
                                            fontWeight: "400",
                                            lineHeight: "22px",
                                            cursor: "pointer",
                                            marginTop: "0px",
                                            width:"105%",
                                            height:"100",
                                            }}>
                                            {seatNumber < 10 ? `0${seatNumber}` : seatNumber}
                                            </button>
                                            );
                                            })}
                                        </div>
                                        ))}
                                </div>
                                ))}
                            </div>
                        ))}
                    {
                        showBorder3 &&
                        classes.filter(classItem => classItem.className === "C").map(classItem => (
                            <div key={classItem.className} style={{display:"flex", paddingTop:"1%", paddingBottom:"1%", paddingLeft:"0%", width:"100%", gap:"2%"}}>
                            {[...Array(classItem.coaches)].map((_, index) => (
                                <div key={`coach-${index + 1}`}  className={style.train__cars}>
                                {[...Array(classItem.numberOfSeatsCoach / 4)].map((_, seatGroupIndex) => (
                                <div key={`seat-group-${seatGroupIndex + 1}`} style={{ display: "flex", gap: "5px", flexDirection: "column", margin:"0px", marginTop:"-7px", marginLeft:"5px" }}>
                                    {[...Array(4)].map((_, seatIndex) => {
                                        const seatNumber = seatGroupIndex * 4 + seatIndex + 1;
                                        const isSeatReserved =
                                        seats.some(seat =>
                                        seat.coach === index + 1 &&
                                        seat.class === classItem.className &&
                                        seat.seatNumber === seatNumber);
                                        return (
                                            <button
                                            key={`seat-${seatNumber}`}
                                            disabled={isSeatReserved}
                                            onClick={() => handleSeatClick({
                                            seatNumber,
                                            coach: index + 1,
                                            class: classItem.className,
                                            price: classItem.classPrice,
                                        })}
                                            style={{
                                            backgroundColor: seats.some(seat =>
                                            seat.coach === index + 1 &&
                                            seat.class === classItem.className &&
                                            seat.seatNumber === seatNumber
                                            ) ? "#4D4039" : "#D6C0B8",
                                            color: seats.some(seat =>
                                            seat.coach === index + 1 &&
                                            seat.class === classItem.className &&
                                            seat.seatNumber === seatNumber
                                            ) ? "#D6C0B8" : "#4D4039",
                                            border: "1px solid rgba(94,59,32,0.5)",
                                            borderRadius: "10px",
                                            fontFamily: "'Inria Serif', serif",
                                            fontStyle: "normal",
                                            fontSize: "18px",
                                            fontWeight: "400",
                                            lineHeight: "22px",
                                            cursor: "pointer",
                                            marginTop: "0px",
                                            width:"105%",
                                            height:"100",
                                            }}>
                                            {seatNumber < 10 ? `0${seatNumber}` : seatNumber}
                                            </button>
                                            );
                                            })}
                                        </div>
                                        ))}
                                </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}