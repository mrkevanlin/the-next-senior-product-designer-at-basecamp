import React from "react"
import Layout from "../components/Layout"
import Tabs from "../components/Tabs"

export default function Testimonials() {
  return (
    <Layout>
       <section className="section--hero wrapper flex-container">
          <h1>Listen to what others have to say about me.</h1>
          <h2>Just like visiting a dentist, you'd want to read reviews first, too.</h2>
       </section>
       <section className="grey-background">
         <section className="wrapper">
            <h4>By Theme</h4>
            <Tabs> 
               <div label="Customer-centricity"> 
                  <div className="section--reviews">
                     <section className="section--good-reviews">
                        <h3>The good stuff</h3>
                        <p>"Kevan holds customers at the highest level of importance. He is an individual that will always go the extra mile to ensure we are considering the customer.”</p>
                        <p>“Your impact on customers is immense. You clearly care about customers and bring that passion and concern to all of our efforts. Please keep being the advocate of the customer because sometimes their voice can be lost in the hustle and bustle of OKRS, professional services, etc.”</p>
                        <p>“Kevan anticipates problems and consisently takes a customer view when finding solutions, respectfully challenging the team in problem solving conversations.”</p>
                     </section>
                     <section className="section--bad-reviews">
                        <h3>Criticisms</h3>
                        <p>“I would suggest Kevan continue to work on improving story telling particularly with stakeholders. We are one team and yes we have a value “Open Company No Bullshit” but stakeholders are also customers and I want to make sure they always see Kevan at his best.”</p>
                        <p>“I would suggest Kevan continue to work on improving story telling particularly with stakeholders. We are one team and yes we have a value “Open Company No Bullshit” but stakeholders are also customers and I want to make sure they always see Kevan at his best.”</p>
                     </section>
                  </div>
                  <section className="section--case-studies">
                     Case Studies go here
                  </section>
               </div> 
               <div label="Business focus"> 
                  <div className="section--reviews">
                     <section className="section--good-reviews">
                        <h3>The good stuff</h3>
                        <p>“You have a great skill of working with people. I admire your ability to offer opposing viewpoints or politely disagree with others during meetings, which serves to enhance the quality of the discussions. It is not an easy skill, but you make it look easy.”</p>
                        <p>“I think the biggest thing I’ve seen is the one-on-one care you put into interactions with leaders, other teammates and the team at-large. I can see that you really want people to succeed and you deeply want to help.”</p>
                     </section>
                     <section className="section--bad-reviews">
                        <h3>Criticisms</h3>
                        <p>“Even though it is maybe a little bit against your nature, I would love to see you grow in your assertiveness to drive change.”</p>
                        <p>“I do think there is room for improvement in terms of bringing outside stakeholders in earlier to ensure alignment as well as reducing potential for duplicate work. I realize that this is a 2-way street and we do not always get this from stakeholders but we can lead by example.”</p>
                        <p>“I’d love to see Kevan tackle more meaty problems and seek more leadership opportunities because I believe he would do well as long as he prioritizes decision making and his time well.”</p>
                     </section>
                  </div>
                  <section className="section--case-studies">
                     Case Studies go here
                  </section>
               </div> 
               <div label="Developer relations"> 
                  <div className="section--reviews">
                     <section className="section--good-reviews">
                        <h3>The good stuff</h3>
                        <p>“When we work together you always bring a can-do attitude to our collaboration. We encounter obstacles yet you keep focused on finding the right solution. Your attitude helps me stay inspired. I also love that you are confident enough to challenge my proposed solutions to wring out the most value for our Community. Honestly, it is a little difficult to hear sometimes as an experienced developer but it is so very crucial to our success on Community. We have to remember that we are all constantly on this journey of learning and discovery. You help me remember to practice this. Thank you, Kevan.”</p>
                        <p>“In addition to your awesome design skills, you have great technical knowledge, which lends to a unique and powerful perspective when approaching problems. This serves to elevate no only my own, but the entire teams performance, which increases the efficiency and effectiveness of our team, creating a richer, fuller, and more powerful experience for our customers!”</p>
                     </section>
                     <section className="section--bad-reviews">
                        <h3>Criticisms</h3>
                        <p>“Kevan is extremely detailed and has great visual design skills. Sometimes this can hinder Kevan as he might get too bogged down into the details. Make sure to zoom out to get a sense of the overall experience a customer is going through to make sure we’re focused on the right problem and the solution that solves that problem.”</p>
                        <p>“I do think there is room for improvement in terms of bringing outside stakeholders in earlier to ensure alignment as well as reducing potential for duplicate work. I realize that this is a 2-way street and we do not always get this from stakeholders but we can lead by example.”</p>
                     </section>
                  </div>
                  <section className="section--case-studies">
                     Case Studies go here
                  </section>
               </div> 
               <div label="Teamwork"> 
                  <div className="section--reviews">
                     <section className="section--good-reviews">
                        <h3>The good stuff</h3>
                        <p>“I love how you truly want to see everyone succeed and always seek to make sure everyone feels valued.”</p>
                        <p>“I always appreciate when Kevan takes on a mentorship role in prompting me to learn and grow on my own.”</p>
                     </section>
                     <section className="section--bad-reviews">
                        <h3>Criticisms</h3>
                        <p>“I think one thing to work on to make everyone more impactful is to be a little bit more clear and concise while presenting things to the team. You are a natural when you are speaking from the gut and sharing what you are comfortable with.”</p>
                     </section>
                  </div>
                  <section className="section--case-studies">
                     Case Studies go here
                  </section>
               </div> 
            </Tabs> 
         </section>
       </section>
    </Layout>
  )
}
