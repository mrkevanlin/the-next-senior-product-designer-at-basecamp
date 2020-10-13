import React from "react"
import { Link } from "gatsby"
import Promo from "../components/promo"

export default function Layout({children}) {
   return (
      <div>
         <nav className="wrapper flex-container">
            <Link to="/" >Intro</Link>
            <Link to="/testimonials/">Testimonials</Link>
            <Link to="/work/">Work</Link>
            <Link to="/resume/">Resume</Link>
            <Link to="/personal/">Personal</Link>
         </nav>
         {children}
         <Promo promoText="I think Basecamp is my next happy place." />
         <footer className="wrapper flex-container">
         <Link to="/" >Intro</Link>
            <Link to="/testimonials/">Testimonials</Link>
            <Link to="/work/">Work</Link>
            <Link to="/resume/">Resume</Link>
            <Link to="/personal/">Personal</Link>
         </footer>
      </div>
   )
}