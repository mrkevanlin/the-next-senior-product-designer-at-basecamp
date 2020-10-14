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
               <span class="label--heading">Project name</span>
               <h3>Bringing clarity to the publication of posts</h3>
               <ul>
                  <span class="label--heading">Themes</span>
                  <li>Customer-centric</li>
                  <li>Business focus</li>
                  <li>Developer relations</li>
               </ul>
               <p>Questions from customers were going unanswered in the Atlassian Community and being put into the "Uncategorized" category at an alarm rate. We were asking customers to add their own tags to their questions. We were routing posts to categories on the back-end&hellip;</p>
               <SecondaryButton buttonText="Read more" buttonLink="/work/bringing-clarity-to-the-publication-of-posts"></SecondaryButton>
            </section>
            <section className="section--case-study-preview wrapper">
               <span className="label--heading">Project name</span>
               <h3>Improving the create question experience via personalization</h3>
               <ul>
                  <span class="label--heading">Themes</span>
                  <li>Customer-centric</li>
                  <li>Business focus</li>
                  <li>Developer relations</li>
               </ul>
               <p>Typically, whenever you are asking a question to the Atlassian Community, you're in need of help surrounding one of Atlassian products. Because we have so many products with similar names, why not show you the products you have and let that be your starting point? By matching your data to your question, it enables the Atlassian Community to get you an answer faster.</p>
               <SecondaryButton buttonText="Read more" buttonLink="/work/improving-the-question-creation-experience-with-personalization/"></SecondaryButton>
            </section>
         </section>
      </Layout>
   )
}