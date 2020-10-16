import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import SecondaryButton from "../components/secondaryButton"

export default function Work() {
   return (
      <Layout>
         <section className="section--hero wrapper flex-container">
            <h1>Pencils down, hands up, time to show the work.</h1>
            <h2>You cannot understand good design if you do not understand people; design is made for people.<span className="author">-Dieter Rams</span></h2>
         </section>
         <section className="grey-background">
            
            <section className="section--case-study-preview wrapper">
               <span className="label--heading">Case study</span>
               <h3><Link to="/work/improving-the-question-creation-experience-with-personalization-techniques/">Improving the question creation experience with personalization techniques</Link></h3>
               <ul>
                  <span class="label--heading">Themes</span>
                  <li>Customer-centric</li>
                  <li>Business focus</li>
                  <li>Developer relations</li>
               </ul>
               <p>Customers ask the Atlassian Community all kinds of questions to troubleshoot their issues with our products. Because our question create form doesn't provide specific fields for the customer's product (whether or not it's the cloud or on-prem version, or whether or not they are an admin or not, etc.), this crucial information is missing and makes it difficult for other community members to help this person out. We made this better.</p>
               <SecondaryButton buttonText="Read more" buttonLink="/work/improving-the-question-creation-experience-with-personalization-techniques/"></SecondaryButton>
            </section>
            {/* <section className="section--case-study-preview wrapper">
               <span class="label--heading">Case study</span>
               <h3>When to know it's not okay to ship a feature</h3>
               <ul>
                  <span class="label--heading">Themes</span>
                  <li>Customer-centric</li>
                  <li>Business focus</li>
               </ul>
               <p>Sometimes the customer says what they want, but they really don't know what they want. We heard directly from customers that they wanted the ability to comment on the original question. If you follow the rabbit trail, it leads to a box that no one should have opened in the first place&hellip;</p>
               <SecondaryButton buttonText="Read more" buttonLink="/work/when-to-know-its-not-okay-to-ship-a-feature/"></SecondaryButton>
            </section> */}
         </section>
      </Layout>
   )
}