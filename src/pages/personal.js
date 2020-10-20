import React from "react"
import Layout from "../components/Layout"
import FamilyFilmStrip from "../components/family-filmstrip"
import FoodFilmStrip from "../components/food-filmstrip"
import FermentationFilmStrip from "../components/fermentation-filmstrip"
import { Helmet } from "react-helmet"

export default function Testimonials() {
  return (
    <Layout>
       <Helmet>
          <meta charSet="utf-8" />
          <title>Personal | Kevan Lin</title>
          <link rel="canonical" href="http://heyseniorproductdesigner.design" />
      </Helmet>
       <section className="section--hero section--hero-personal wrapper flex-container">
          <h1>I'm a whole person, <br />not a cog in a machine.</h1>
          <div class="hero--details">
             <h2>There's much more to me than just my trade skills as a designer. I'd love to share my holistic self with you, care to join?</h2>
          </div>
       </section>
       <section className="grey-background">
         <section className="section--personal-family wrapper">
            <h2>Family</h2>
            <FamilyFilmStrip />
            <h3>I'm a family man</h3>
            <p>My father has played a role in my life to teach me how to have a great work ethic, to never quit and to always strive for perfection. He wasn’t always present though. So as I examine what it looks like to be a father, I want to both instill hard work into my boys, but I also want to be present with them as well. Physically present, emotionally present and spiritually present.</p>
         </section>

         <section className="section--personal-family wrapper">
            <h2>Food</h2>
            <FoodFilmStrip />
            <h3>I like to cook</h3>
            <p>During college a friend of mine and I got tired of all the food that was being served to us in the cafeteria and all the other restaurants felt expensive and out of reach. So we decided that we wanted to cook for ourselves. Out of this moment birthed a passion for food. It’s translated into making my own pasta, pies, fancy pureés, and other savory yummy things. I love to entertain friends and friends of friends with food (and good wine). If you’re ever in my neck of the woods, please stop by!</p>
         </section>

         <section className="section--personal-family wrapper">
            <h2>Fermentation</h2>
            <FermentationFilmStrip />
            <h3>I'm into sourdough</h3>
            <p>Before this pandemic hit, I legitimately ventured into sourdough bread-making. If you haven’t picked up already, I’m really into making food. Bread was just the next thing. I remember making my first loaf, it was awfully thick like a hockey puck! I was a little disheartend, but I stuck it out and started to experiment with various things (temperature, duration of fermentation, flour types, etc.) and eventually I dialed into how my environment was contributing to the bread’s formation and controlled the process to make bread. It’s been very catharic and cerebral at the same time.</p>
         </section>
      </section>
    </Layout>
  )
}
