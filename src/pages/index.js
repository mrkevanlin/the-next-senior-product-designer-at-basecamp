import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import HomeFilmstrip from "../components/home-filmstrip"
import Promo from "../components/promo"
import PrimaryButton from "../components/primaryButton"

export default function Home() {
  return (
    <Layout>
      <section className="section--hero section--hero-home wrapper flex-container">
        <h1>Kevan is a UX Designer who loves to speak in multiple languages.</h1>
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
          <h2>About me</h2>
          <h3>What do they call me at work?</h3>
          <p>I’m a graphic designer turned UX designer who loves to be near the internet at all times. I love speaking the language of the customer and the developers who build the experience - <strong>that’s my happy place.</strong></p>
        
          <h3>What are you like outside of work?</h3>
          <p>I am (hopefully) a loving husband to Holly, a fun father to Malakai and Eleos, and a doggy dad to Mr. Beau the English Setter. When I’m not needed to fulfill my familial duties, I am in the kitchen trying out different recipes. My latest endeavour has been baking my own sourdough (I started before this pandemic, I swear). Next up, pavlova. To get a more in-depth close up, check out my <Link to="/personal/">personal page</Link> .</p>

          {/* <HomeFilmstrip /> */}

          <h3>Who do you work for?</h3>
          <p>Currently I work for Atlassian. I have been on the same team for 3 years 11 months working on the Atlassian Community (there’s a lot of sweat equity invested there). I was brought on to build out the community and was part of the team that shipped it. Fast forward a few years, and I’ve shipped some neat features, developed an experimentation culture, and create some epic year-end recap videos.</p>

          <p><Link to="testimonials/">Read about what my teammates have said about me</Link>.</p>
          
          <p>Atlassian is a great place work. The level of autonomy is amazing. The people that work for Atlassian are smart and talented. My team is an amazing bunch of people that I love to surround myself with. But, as I drift away from getting into the codebase, and move away from customers, and am now in the orbit of what we should work on instead of doing the things we should. I want to go back to my happy place.</p>

          <PrimaryButton buttonLink="/work/" buttonText="See the work"></PrimaryButton>

        </section>
      </section>

      <Promo promoText="I think Basecamp is my next happy place."></Promo>

      <section className="grey-background">
        <section className="section--about-basecamp wrapper">
          <h2>Thought about Basecamp</h2>
          <h3>Why are you so refreshingly unique?</h3>
          <p>Especially in this day in age, where design systems are blending together, and features are released to be copied by their competitors (kanban boards anyone?). It’s crucial to stand apart from the rest, but not because of a unique feature but a different point of view of the whole thing. Better to be opinionated and piss some people off, than trying to be all for all people and diluted in the process. I want to be part of a culture that promotes this kind of boldness (and the right way to work).</p>

          <h3>Have you considered diversity of thinking?</h3>
          <p>The world is not made up of one homogenous brain type that acts and feels in one way. I am a holistic thinker. I think concentrically and not linear, by default. I am a collectivist person not an individualistic person. As the world continues to become more adoptive of remote practices, it’s going to need to include other modes of thought. It should be integrated in the software people use to work together. Lucky for you, you’ve got me to help bridge that gap. Let’s build it together.</p>

          <h3>Have you considered me as an addition?</h3>
          <p>Help me, help you find the happy place where work gets done and we’re all better for it because we got there without killing ourselves in the process. I want to be part of a company that really considers the individual and how they interact with a team to get stuff done. I hope my addition to Basecamp will only enrichen and embolden the mission of giving a damn. I want to learn from the best and work with the best and the role of Senior Product Designer would allow me this opportunity. </p>
        </section>
      </section>
      
    </Layout>
  )
}
