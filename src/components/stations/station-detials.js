import React from "react";
import style from"./detials.module.css";
import Navbar from"../Navbar/Navbar";

export default function Detials(){
    return(
        <div className={style.detials}>
                <div className={style.navbar__container}>
                    <Navbar/>
                </div>
            <div className={style.body_detials}>
                <div className={style.body}>
                    <div className={style.body_contant1}>
                       <h1>Cairo</h1> 
                    </div>
                    <div className={style.body_contant2}>
                        <div className={style.station_info1}>
                            <div className={style.station_name}>
                               <h1>Cairo Station</h1> 
                            </div>
                            <div className={style.station_info}>
                            The original railway station was built as the terminal of the first rail link from Alexandria to Cairo in 1856. The current building was erected in 1892 and upgraded in 1955. As of January 2001 it was undergoing a major modernisation. In early 2011, following the Egyptian Uprising, Ramses station was fully upgraded and air conditioned with new marble flooring across the station and the addition of escalators. Some critics believe that the modernisations were too modern and destroyed much of the building's original style. Huda Sha'arawi, the Egyptian feminist, famously removed her veil here in 1923.Ramses Station serves both local and long-distance trains. Local trains serve destinations in the Greater Cairo area, such as Giza, Helwan, and Ain Shams. Long-distance trains serve destinations throughout Egypt, such as Alexandria, Luxor, Aswan, and Marsa Matruh.

                            </div>
                        
                        </div>
                        <div className={style.station_info2}>
                        <div>
                            Address : <span>Ramses, Al Fagalah, Al Azbakeya, Cairo Governorate 4321102</span>
                        </div>
                        <div>
                            Hours : <span>24</span>
                        </div>
                        <div>
                            Phone : <span>01210994858</span>
                        </div>
                        </div>

                    </div>

                </div>
            </div> 


            <div className={style.footer}>
                    <h1>@Copyright 2022</h1>
            </div>


        </div>
    )
}