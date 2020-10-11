import React from "react"

export default function Promo(props) {
   return (
      <section className="section--promo flex-container wrapper">
         <h1>{props.promoText}</h1>
      </section>
   )
}