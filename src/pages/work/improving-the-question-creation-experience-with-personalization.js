import React from 'react'
import Layout from '../../components/Layout'
import qbsJourneyMap from '../../images/qbs-journey-map.jpg'
import qbsSketch from '../../images/qbs-sketch.png'
import qbsInterstitial from '../../images/qbs-prototype-interstitial.png'
import qbsPassive from '../../images/qbs-prototype-passive.png'
import qbsPassiveModal from '../../images/qbs-prototype-passive-modal.png'
import qbsAggressive from '../../images/qbs-prototype-aggressive.png'
import qbsLowerPortion from '../../images/qbs-prototype-lower-portion.png'
import qbsFinal1 from '../../images/qbs-final-1.png'
import qbsFinal2 from '../../images/qbs-final-2.png'
import qbsFinal3 from '../../images/qbs-final-3.png'
import qbsFinal4 from '../../images/qbs-final-4.png'
import qbsFinalPostPage from '../../images/qbs-published-post-page.png'

export default function QBS() {
   return (
      <Layout>
         <section className="section--hero wrapper flex-container">
            <h1>Improving the question creation experience with personalization.</h1>
            <h2>By leveraging customer data, I was able to deliver a best-in-class support experience.</h2>
         </section>
         <section className="grey-background">
            <section className="section--case-study wrapper">
               <h2>Background</h2>
               <p>Atlassian products are either hosted in the cloud or on premise. Sometimes this distinction is known by the customer and often times it is not. In the effort of maximizing accuracy of posts being categorized correctly, that is to say that posts about <em>Product X</em> actually go to <em>Product X</em>. The design process and a new technology layer provided a blend of customer success.</p>
            </section>
            <section className="section--case-study wrapper">
               <h2>Details</h2>
               <div className="flex-container">
                  <ul>
                     <li><strong>Capacity</strong></li>
                     <li>Design project lead</li>
                  </ul>
                  <ul>
                     <li><strong>Contributions</strong></li>
                     <li>Design process / UX</li>
                     <li>Prototyping</li>
                     <li>Visual design</li>
                  </ul>
                  <ul>
                     <li><strong>Collaborators</strong></li>
                     <li>Junior UX Designer</li>
                  </ul>
               </div>
            </section>
            
            <section className="section--case-study wrapper">
               <h2>The problem</h2>
               <p>With a recent feature update to the way posts were being cataloged, even though the posts were getting to the right categories, the surrounding contextual information about the post were still missing or incomplete. Specifically around hosting types as a primary concern. When this information is not available to the answerer, there are extra steps involved in asking the original poster to provide these details, so that they can get an accurate response.</p>
               <p>People who are not Atlassian staff account for 10-12% of the population but answer 60% of questions that get asked on the site. It's imperative that these people have what is necessary for them to answer questions in a timely and streamlined manner.</p>
            </section>
               
            <section className="section--case-study wrapper">
               <h2>Business metrics</h2>
               <p>Support had made the conscious decision for community to be the preferred route for troubleshooting and resolution (for select products and hosting types). Due to this shift in strategy, the community would need to scale its ability to receive these people and ensure they have a solid support experience. Personalization of the customer’s entitlements enables the community to be able to capture the right data, so that answers can be given quickly and accurately as possible.</p>
            </section>
            
            <section className="section--case-study wrapper">
               <h2>Success metrics</h2>
               <ol>
                  <li>We will measure success as reduced time for resolution to the customer on their question.</li>
                  <li>We will monitor the abandonment rate throughout the various checkpoints of the create experience.</li>
                  <li>It must perform better (more published questions), or the same, than the previous create form experience.</li>
               </ol>
            </section>

            <section className="section--case-study wrapper">
               <h2>The design process</h2>
               <p>Involving our multi-disciplinary team, we built a three week schedule to deliver a confident vision.</p>
               <ol>
                  <li><strong>Discovery</strong> - Discover insights into the problem by unconvering the problem space.</li>
                  <li><strong>Definition</strong> - Defining the area to focus most efforts</li>
                  <li><strong>Develop</strong> - Develop potential solutions</li>
                  <li><strong>Deliver</strong> - Deliver an experience with confidence</li>
               </ol>
            </section>

            <section className="section--case-study wrapper">
               <h2>Discovery</h2>
               <p>The business is asking for us to solve for support deflection. The user doesn't need to know about the support strategy, they just need to know how to either find their answer or ask their question so that they can get an answer.</p>
                <p><strong>How might we build something that elicits trust, especially because we're showing data that's personal to our customer's Atlassian product instances?</strong></p>
                <p>We first found a post in the community that contained missing information about the product and some back and forth between the author and an answerer.</p>
                <p>We then used this interview as a basis for a journey mapping exercise. Participants of this exercise included the Product owner as well as some engineers.</p>
                <img src={qbsJourneyMap} alt="Journey map photo" />
            </section>

            <section className="section--case-study wrapper">
               <h2>Definition</h2>
               <p>Our journey map gave the team some useful insights:</p>
                <ol>
                    <li><strong>Don't speak the same language</strong> - Participant_1a lacked the implied knowledge of Atlassian products so they didn't know what to include on the question creation form.</li>
                    <li><strong>"Others can't see what I see"</strong> - As a pain point, they couldn't express to the community what they were uniquely seeing. They wanted a way to show their environment and set up so that others could help.</li>
                    <li><strong>Unnecessary complicated</strong> - the back and forth nature of clarifying questions, proved to be laborious and lasted too long (a lot of time elapsed from creation to final follow up).</li>
                    <li><strong>Potentially an unsatisfactory experience</strong> - Atlassian did not give him the best evaluation experience and it may affect whether or not they will purchase in the future.</li>
                </ol>
                <p>Ultimately, we decided to double-down on #2 and make the pain point of not being able to replicate my current environment to be available on every post in the community. It would reduce the number of back and forth comments/answers and drastically cut down the time to getting an answer. Win-win for everybody involved!</p>
            </section>

            <section className="section--case-study wrapper">
               <h2>Develop</h2>
               <p>From the outset, we prioritized earning trust and delivering immediate and tangible value, as our pillars to this experience.</p>
               <p>We started on the whiteboard and in Sketch making rough sketches of what the experience might be like. Early on in the process, we determined that we would need to introduce an interstitial page before the actual form to fill out details and information.</p>
               <img src={qbsSketch} alt="Skech of the experience" />
               <p>This interstitial page provides immediate and tangible value to the customer by showing them the very product they had in mind when they came to ask a question to the community. But how would we ensure that we build trust into every interaction? </p>
               <img src={qbsInterstitial} alt="Create interstitial" />
               
               <h3>Enter rapid prototyping.</h3> 
               <p>Instead of trying to get pixel perfect on one approach to this, we instead quickly stood something up, tested it, iterated, tested again. We repeated this process until we felt confident in where we ultimately landed.</p>
               <p>We asked ourselves, if I was a Jira administrator and I was publishing a question that was publically available on the internet, what kinds of information would I not want to be made public? From the available sources of data, this is what we settled on. Cloud url, hosting type, permissions level and product edition version.</p> 
               <h4>Prototype</h4>
               <p>Of these pieces of information, cloud url was the most important not to reveal publically for various security reasons. This was one of the first areas of focus for prototyping. We could either take a passive approach where the defaulted value upon selecting their product was in a safe position, but if they wanted to change visibility on this information they could.</p>

               <img src={qbsPassive} alt="Prototype images" />

               <p>Cloud url hidden by default, "visibility settings" button to change appearance of other data.</p>

               <img src={qbsPassiveModal} alt="Prototype images" />
               
               <h3>Learn and iterate</h3>
               <p>We heard from customers that the lock icon didn't make sense: <em>Does the lock mean that I can't change it? Do I have the permission to change it?</em></p>
               <p>We also discovered that many administrators of our products didn't know what the cloud url was nor did they understand the severity of displaying publically, this was evident based on how little time they spent looking at or trying to figure it out.</p>
               <p>What if instead of being passive with the visibility settings, we were aggressive and showed your settings right after you chose your product and before you got to the form?</p>

               <img src={qbsAggressive} alt="Aggressive version" />

               <p>Well as it turns out, customers liked that they got to choose these visibility settings but ultimately wanted to get to their questions first before filling in this information.</p>
               <p>Customers also didn't understand the red toggle switch. <em>Does the 'x' mean that it's disabled? If I can't toggle this, why is this on here to begin with?</em></p>
               
               <h3>Learn and iterate</h3>
               <p>At this point, our hypothesis was, there's clearly something about the cloud url as a means of denoting locked or disabled by way of UI that didn't resonate with our users. None of them took any issue with selecting "their" product to move on. So why don't we remove cloud url in next screen after they have chosen their product. We can also move elements around visibility lower on the form in favor of question completion.</p>

               <img src={qbsLowerPortion} alt="Lower portion" />

               <h3>Reaching confidence</h3>
               <p>Customers trusted the last prototype the most. One customer said, <em>"Despite probably being an alternative that will take me more time, it's more reassuring knowing that I can control the data that's being presented in such a fine way."</em> More than trusting the prototype, the efficiency and confidence of which customers created questions (albiet through a prototype) seemed like an improvement. We had a winner!</p>

            </section>

            <section className="section--case-study wrapper">
               <h2>Delivery</h2>
               <p>With customer feedback in the pocket, we began to put the polish on it all. We ran reviews on the copy and looped in legal for approval. This is the final result of the work.</p>

               <img src={qbsFinal1} alt="" />
               <img src={qbsFinal2} alt="" />
               <img src={qbsFinal3} alt="" />
               <img src={qbsFinal4} alt="" />
               <img src={qbsFinalPostPage} alt="" />
            </section>

            <section className="section--case-study wrapper">
               <h2>Outcomes</h2>
               <p>Prior the launch of this new question creation experience, we were experiencing around a 40% abandonment rate on a daily basis. With the release of this feature, we saw an abandonment rate of 33%. <strong>We shored up 7% of posts due to this new experience being a factor</strong>.</p>
               <p>We also wanted to make sure that the form was performing better or the same as the previous create form with regards to the number of successful questions published. With the old form, on a daily basis we were successfully publishing 60% of questions. With the release of this feature, we saw an <strong>increase of 7% </strong> (67% success rate) in successful publishing of questions.</p>
               <p>In terms of measuring "reduced time for resolution to the customer on their question", we unfortuantely didn't get that data tracking in place for launch, so we haven't been able to determine whether or not the time for resolution was ultimately decreased or not. There's an open data analyst request for this at the moment.</p>
            </section>

         </section>
      </Layout>
   )
}