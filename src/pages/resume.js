import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import PrimaryButton from "../components/primaryButton"
import Promo from "../components/promo"
import ResumeEntry from "../components/resumeEntry"
import Atlassian from "../images/atlassian.png"
import Amazon from "../images/amazon.png"
import DTS from "../images/dts.png"
import Spiceworks from "../images/spiceworks.png"
import tOSU from "../images/tosu.png"
import Bostwick from "../images/bostwick.png"

export default function Resume() {
   return (
      <Layout>
         <section className="section--hero wrapper flex-container">
            <h1>Yes, it is about where I've come from</h1>
            <h2>… But it's also where I'm going, too.</h2>
         </section>
         <section className="grey-background">
            <section className="wrapper">
               <div className="resume--entry">
                  <img src={Atlassian} alt="Atlassian Logo" />
                  <div class="resume--details">
                     <h3>User Experience Designer</h3>
                     <h4>Atlassian</h4>
                     <ul>
                        <li>Nov 2016 - Present</li>
                        <li>Austin, Texas</li>
                     </ul>
                     
                     <p>With over 2 million community members contributing over 850,000+ posts, the Atlassian Community is the premier place to connect, share and learn all things Atlassian. It's my responsibility to ensure ease of use for all roles of the community.</p>
                     <p>I have the amazing opportunity to work with community management, front and back-end engineers, and great product management. It's my role to bring design thinking into our weekly agile sprints as well as our overall strategy for the community.</p>
                     <p>Practicing design on this team includes engaging in customer interviews, generative research, usability testing, rapid prototyping, a/b and multivariate testing, service blueprints, journey mapping, and user interface design.</p>
                     <p>Working in a cross-disciplinary triad helps ensure that desirability, usability and feasibility are thought of at every step of the way. It's my sole responsibility to ensure that the users' needs are always at the center of our work.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={Amazon} alt="Amazon Logo" />
                  <div class="resume--details">
                     <h3>User Experience Designer</h3>
                     <h4>Amazon</h4>
                     <ul>
                        <li>Apr 2016 - Nov 2016</li>
                        <li>Seattle, Washington</li>
                     </ul>
                     <p>As part of the Products &amp; Services Discovery group, I was responsible for creating new experiences on the amazon.com website that both informs and delights hundreds of millions of customers in the discoverability of the products and services that they need and want. Through user experience principles of user research, rapid prototyping and usability studies, I invented new ways of finding the right product at the right time. Constant communication between business and tech stakeholders are not only necessary to meet business goals and metrics but also to ensure that the customer had a great experience at Amazon.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={Spiceworks} alt="Spiceworks Logo" />
                  <div class="resume--details">
                     <h3>Senior Designer</h3>
                     <h4>Spiceworks</h4>
                     <ul>
                        <li>Apr 2014 - Apr 2016</li>
                        <li>Austin, Texas</li>
                     </ul>
                     <p>In my four year tenure at Spiceworks, there has been no short of work that I haven't done. Still in it's infancy, the then startup necessitated for me to get scrappy and get things done. Worked on everything from event branding for a 2,500+ annual conference, identity work on sub brands for the company, then eventually shifted focus to the digital design domain. It was in that space that I was responsible for art direction, planning and implementation of data research solution products. Was the lead designer on crafting an internet resource hub of all of the online publications for Spiceworks.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={DTS} alt="DTS Logo" />
                  <div class="resume--details">
                     <h3>Associate Director of Visual Design</h3>
                     <h4>Dallas Theological Seminary</h4>
                     <ul>
                        <li>May 2011 - Apr 2012</li>
                        <li>Dallas, Texas</li>
                     </ul>
                     <p>Given to my charge was managing the creative cohesiveness of all advertising pieces that would be featured in magazines and online media campaigns. During this time I was also part of the initial planning and exploratory process for a website redesign.</p>
                  </div>
               </div>
               
               <div className="resume--entry">
                  <img src={DTS} alt="DTS Logo" />
                  <div class="resume--details">
                     <h3>Video Editor</h3>
                     <h4>Dallas Theological Seminary</h4>
                     <ul>
                        <li>Aug 2010 - Oct 2011</li>
                        <li>Dallas, Texas</li>
                     </ul>
                     <p>Responsible for Pre-Production tasks: Location scouting, media preparation, equipment preparation, etc.<br />
                     Production work: Camera Operator, Continuity editor, DP <br />
                     Post-Production Tasks: 1st Editor, Colorist, Motion Graphics, Add/Removal of objects.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={tOSU} alt="OSU Logo" />
                  <div class="resume--details">
                     <h3>Media Specialist</h3>
                     <h4>Fisher College of Business at The Ohio State University</h4>
                     <ul>
                        <li>Dec 2007 - Mar 2009</li>
                        <li>Columbus, Ohio</li>
                     </ul>
                     <p>Designed and created an email newsletter for faculty and staff of the Ohio State University. Video work included pre and post production.Responsible for digitizing media and making content available for online distriubtion.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={tOSU} alt="OSU Logo" />
                  <div class="resume--details">
                     <h3>Production Assistant</h3>
                     <h4>Fisher College of Business at The Ohio State University</h4>
                     <ul>
                        <li>Nov 2007 - Mar 2009</li>
                        <li>Columbus, Ohio</li>
                     </ul>
                     <p>Responsible for the design and implementation of the Educational Technologies e-mail newsletter for faculty and staff of the Ohio State University. Video work includes pre and post production, digitizing of media and video editing content for online distribution.</p>
                  </div>
               </div>

               <div className="resume--entry">
                  <img src={Bostwick} alt="Bostwick Design Partnership Logo" />
                  <div class="resume--details">
                     <h3>Graphic Design Intern</h3>
                     <h4>Bostwick Design Partnership</h4>
                     <ul>
                        <li>Jun 2005 - Sep 2005</li>
                        <li>Cleveland, Ohio</li>
                     </ul>
                     <p>Charged to redesign and streamline the website into a more productive and better aided experience. The gallery section of the website was created to mirror the intentions of the firm; to create an atmosphere where dates could be sifted through without feeling overwhelmed but also maintaining a captive audience.</p>
                  </div>
               </div>
            </section>
               
         </section>
      </Layout>
   )
}