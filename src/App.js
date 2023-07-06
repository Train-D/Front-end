import React from "react";
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
import "./App.css";
import StationDetails from "./components/stations/StationDetails";
import SearchBar from "./components/stations/SearchBar";
import Profile from "./components/profile/Profile";

// export default function App(){
//   return(
//     <div className="App">
//       <SearchPage />
//       {/* <AboutUs /> */}
//       {/* <Home /> */}
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
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/" element={<SearchBar />} />
                    <Route path="/stationdetails/:stationName" element={<StationDetails />} />
                    <Route path="/profile" element={<Profile />} />
                    
                </Routes>
            </BrowserRouter>
            <MainFooter />
        </div>
  )
}