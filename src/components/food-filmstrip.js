import React from 'react'
import Thumb1 from "../images/food-thumb-1.png"
import Thumb2 from "../images/food-thumb-2.png"
import Thumb3 from "../images/food-thumb-3.png"
import Thumb4 from "../images/food-thumb-4.png"
import Thumb5 from "../images/food-thumb-5.png"
import Thumb6 from "../images/food-thumb-6.png"

export default function FoodFilmStrip(props) {
   return (
      <div className="filmstrip wrapper flex-container">
         <img src={Thumb1} alt="My wife and I" />
         <img src={Thumb2} alt="Halloween" />
         <img src={Thumb3} alt="Pasta making buddy" />
         <img src={Thumb4} alt="Cactus shirts" />
         <img src={Thumb5} alt="Donut day" />
         <img src={Thumb6} alt="Me with the boys" />
      </div>
   )
}