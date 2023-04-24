import React from "react";
// import Footer from "./components/Footer/Footer";
// import Login from "./components/login/Signin";
import { BrowserRouter, Route, Routes} from "react-router-dom";
//import Footer from "./components/Footer";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import Book from "./components/booking/Book";
import Stations from "./components/stations/Stations";
import Contact from "./components/contact/Contact";
import "./App.css";

// export default function App(){
//   return(
//     <div className="App">
//       {/* <AboutUs /> */}
//       <Home />
//       {/* <Navbar/> */}
//       {/* <Footer /> */}
//       {/* <Sign/> */}
//       {/* <Login/> */}
//     </div>
//   )
// }

export default function App(){
  return(
    <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/stations" element={<Stations />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
  )
}