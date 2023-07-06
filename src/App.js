import React, {useState, useEffect} from "react";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/login/Signin";
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import Footer from "./components/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import Sign from "./components/sign/Sign";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import Book from "./components/booking/Book";
import Stations from "./components/stations/Stations";
import Contact from "./components/contact/Contact";
import SearchPage from "./components/search/SearchPage";
import MainFooter from "./components/Footer/MainFooter";
import ResetPassword from "./components/login/ResetPassword";
import "./App.css";
import { AllContextProvider, TripProvider } from "./Context/TripContext";
import Timetable from "./components/search/Timetable";
import Reservation from "./components/booking/Reservation";
import Forget from "./components/forget/Forget";

export default function App(){
  return(
    <div className="App">
      <AllContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/reset" element={<ResetPassword/>}/>
          <Route path="reservation" element={<Reservation/>} />
          <Route path="/forget" element={<Forget/>} />
        </Routes>
      </BrowserRouter>
        <MainFooter />
      </AllContextProvider>
        </div>
  )
}