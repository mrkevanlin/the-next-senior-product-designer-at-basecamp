import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import HomeFilmstrip from "../components/home-filmstrip"
import Promo from "../components/promo"
import PrimaryButton from "../components/primaryButton"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Basecamp is my next happy place | Home | Kevan Lin</title>
          <link rel="canonical" href="http://heyseniorproductdesigner.design" />
      </Helmet>
      <section className="section--hero section--hero-home wrapper flex-container">
        <h2>Hey, my name is Kevan Lin</h2>
        <h1>I am a UX Designer who loves to speak multiple languages.</h1>
        <div class="hero--details">
          <h4>I'm fluent in</h4>
          <section className="section--hero-home-list wrapper flex-container">
            <ul>
              <li>The language of customers</li>
              <li>The language of business</li>
            </ul>
            <ul>
              <li>The language of developers</li>
              <li>The language of teamwork</li>
            </ul>
          </section>
        </div>
        {/* <div className="toc">
          <p class="descriptor">Jump ahead</p>
        </div> */}
      </section>

      
      <section className="grey-background">
        <section className="section--about-me wrapper">
          <h2>About Kevan</h2>
          <h3>What do they call me at work?</h3>
          <p>I’m a graphic designer turned UX designer who loves to be near the internet at all times. I love speaking the language of the customer and the developers who build the experience - <strong>that’s my happy place.</strong></p>
        
          <h3>What am I like outside of work?</h3>
          <p>I am (hopefully) a loving husband to Holly, a fun father to Malakai and Eleos, and a doggy dad to Mr. Beau the English Setter. When I’m not needed to fulfill my familial duties, I am in the kitchen trying out different recipes. My latest endeavour has been baking my own sourdough (I started before this pandemic, I swear).</p>
          
          <HomeFilmstrip />
          <p>To get a more in-depth close up, check out my <Link to="/personal/">personal page</Link>.</p>
          

          <h3>Who do I work for?</h3>
          <p>I've been working on the Atlassian Community for 3 years 11 months (there’s a lot of sweat equity invested there). I was brought on to build out the community and was part of the team that shipped it. Fast forward a few years, I've worn multiple hats to deliver thoughtful features to customers, developed an ongoing experimentation strategy, and built a strong team culture.</p>

          <p><Link to="testimonials/">What do my teammates have to say about me?</Link>.</p>

          <PrimaryButton buttonLink="/work/" buttonText="See the work"></PrimaryButton>

        </section>
      </section>

      <Promo promoText="I think Basecamp is my next happy place."></Promo>

      <section className="grey-background">
        <section className="section--about-basecamp wrapper">
          <h2>Why is Basecamp my next happy place?</h2>
          <h3>Basecamp is refreshingly unique</h3>
          <p>Especially in this day in age, where design systems are blending together, and features are released to be copied by their competitors (kanban boards anyone?). It’s crucial to stand apart from the rest. Not because of a unique feature but a different point of view of the whole thing. Better to be opinionated and piss some people off, than building a Swiss Army knife that no one understands. I want to be part of a culture that promotes this kind of boldness (and the right way to work).</p>

          <h3>Basecamp inspires me</h3>
          <p>Basecamp's ethos to build better collaboration tools allows me as a collectivistic and holistic thinker, to challenge the status quo. As more companies become remote-first, I'm reminded that the world is not made up one homogenous brain type that acts and feels in one way. <strong>Neither should the software that we create.</strong>  As it so happens, I'm willing to help bridge the gap. Let's build the future together.</p>

          <h3>Basecamp really gets me</h3>
          <p>Help me, help you find our happy place where work gets done and we’re all better for it because we got there without killing ourselves in the process. I want to be part of a company that really considers the individual and how they interact with a team to get stuff done. I hope my addition to Basecamp will only enrichen and embolden the mission of giving a damn. I want to learn from the best and work with the best. The role of Senior Product Designer would allow me this opportunity. </p>
          
        </section>
      </section>
      
    </Layout>
  )
}