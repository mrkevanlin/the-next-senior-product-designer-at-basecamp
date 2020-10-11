import React from "react"
import Thumb1 from "../images/home-thumb-1.png"
import Thumb2 from "../images/home-thumb-2.png"
import Thumb3 from "../images/home-thumb-3.png"
import Thumb4 from "../images/home-thumb-4.png"
import Thumb5 from "../images/home-thumb-5.png"
import Thumb6 from "../images/home-thumb-6.png"
import Thumb7 from "../images/home-thumb-7.png"

export default function Filmstrip(props) {
   return (
      <div class="filmstrip wrapper flex-container">
         <img src={Thumb1} alt="Homemade pasta drying on rack" />
         <img src={Thumb2} alt="My wife Holly and I" />
         <img src={Thumb3} alt="Sourdough bread fresh from the oven" />
         <img src={Thumb4} alt="Me with a piping bag full of ricotta cheese" />
         <img src={Thumb5} alt="Pretty dinner plate" />
         <img src={Thumb6} alt="Me with my boys" />
         <img src={Thumb7} alt="Pizza that I made" />
      </div>
   )
}