import React from "react"
import Layout from "../components/Layout"

export default function Testimonials() {
  return (
    <Layout>
       <section className="section--hero wrapper flex-container">
          <h1>Listen to what others have to say about me.</h1>
          <h2>Just like visiting a dentist, you'd want to read reviews first, too.</h2>
       </section>
       <section className="grey-background">
         <section className="section--testimonials-tabs wrapper">
            <h4>By Theme</h4>
            <p>Tabs go here</p>
         </section>
       </section>
    </Layout>
  )
}
