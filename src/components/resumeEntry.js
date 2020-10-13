import React from 'react'

export default function ResumeEntry(props) {
   return (
      <section className="section--resume-entry flex-container">
         <img src={{uri: props.image }} alt={props.logoAltText} />
         <div class="resume--details">
            <h3>{props.title}</h3>
            <h4>{props.companyName}</h4>
            <p className="resume--metadata">{props.duration}</p>
            <p className="resume--metadata">{props.location}</p>
            <p>{props.paragraph}</p>
         </div>
      </section>
   )
}