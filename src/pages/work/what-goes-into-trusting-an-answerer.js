import React from 'react'
import Layout from '../../components/Layout'
import profileCard1 from '../../images/results-person-person-graphic.png'
import profileCard2 from '../../images/results-apples-to-apples-comparison.png'
import profileCard3 from '../../images/profile-card-previous.png'
import profileCard4 from '../../images/profile-card-sidexside.png'
import profileCard5 from '../../images/profile-card-annotations.png'
import profileCard6 from '../../images/profile-card-states.png'
import { Helmet } from "react-helmet"

export default function ProfileCard() {
   return (
      <Layout>
         <Helmet>
            <meta charSet="utf-8" />
            <title>What goes into trusting an answer(er)? | Kevan Lin</title>
            <link rel="canonical" href="http://heyseniorproductdesigner.design" />
         </Helmet>
         <section className="section--hero section--hero-qbs wrapper flex-container">
            <div className="headline">
               <h1>What goes into trusting an answer(er)?</h1>
               <h2>Are the attributes of trusting a person and their answer definable?</h2>
            </div>
         </section>
         <section className="grey-background">
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
                     <li>Visual design</li>
                     <li>Researcher</li>
                  </ul>
                  <ul>
                     <li><strong>Length of time</strong></li>
                     <li>2 weeks</li>
                  </ul>
               </div>
            </section>

            <section className="section--case-study wrapper">
               <h2>Research question</h2>
               <p>When someone goes to the community to find an answer, what kinds of information are they needing to have so that they can feel confident and trust that the person who provided the answer knows what they are talking about (in other words, do they have credibility?).</p>
            </section>

            <section className="section--case-study wrapper">
               <h2>The business goals</h2>
               <p>Atlassian University is revamping their entire catalog of courses, and with it comes new certifications. Naturally, Community is an extension of where someone might display these accomplishments, or the business would hope that they would. Community has 2 million active users per month coming to the site, this would be a boon for gaining traction in a very contextual market for certifications.</p>
            </section>

            <section className="section--case-study wrapper">
               <h2>What's known about this space?</h2>
               <p>Currently visitors are using a combination of signals to determine credibility:</p>
               <table className="table--trust">
                  <thead>
                     <tr>
                        <td>Location</td>
                        <td>Signal</td>
                        <td>Description</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td rowspan="3" valign="top">On the question page</td>
                     </tr>
                     <tr>
                        <td>Number of upvotes</td>
                        <td>How many people also have upvoted this answer</td>
                     </tr>
                     <tr>
                        <td>Response types</td>
                        <td>Number of comments to answers and how many times they have been 'liked' </td>
                     </tr>
                     <tr>
                        <td rowspan="10" valign="top">Mini profile card (appears when hovering on author's avatar)</td>
                     </tr>
                     <tr>
                        <td>Number of posts of author</td>
                        <td>How many posts? a little or a lot?</td>
                     </tr>
                     <tr>
                        <td>Author's name</td>
                        <td>Is it a human name or an obscure name?</td>
                     </tr>
                     <tr>
                        <td>Author's avatar</td>
                        <td>Do they have one? Is it a real face? Just initials?</td>
                     </tr>
                     <tr>
                        <td>Badges earned</td>
                        <td>Which badges were earned specifically?</td>
                     </tr>
                     <tr>
                        <td>Location</td>
                        <td>Where are they located in the world?</td>
                     </tr>
                     <tr>
                        <td>Company name</td>
                        <td>What size of company do they work for?</td>
                     </tr>
                     <tr>
                        <td>Job title</td>
                        <td>Is it even in the realm of someone who I'd trust? Same industry?</td>
                     </tr>
                     <tr>
                        <td>Accepted answers</td>
                        <td>Others who have deemed that this person's answers are 'correct' as vetted by the community</td>
                     </tr>
                     <tr>
                        <td>Successful answer ratio</td>
                        <td>The total number of accepted answers divided by the total number posts in the community.</td>
                     </tr>
                  </tbody>
               </table>
               
                <p>We also know from our data instrumentation that the hover event for the profile card occurs, on average, 126,000 times per month, denoting that it is getting a lot of attention and usage. This is roughly 29% of all accounted interactions on the site.</p>

                <p class="subscript">* It makes total sense that the number of accepted answers in the community would elicit the most amount of trust. This has been echoed by many customers in various interviews.</p>
            </section>
            
            <section className="section--case-study wrapper">
               <h2>Methodology</h2>
               <p>Using usertesting.com with specific criteria to target people who have experience on online forums for testing.</p>

               <h3>Test A (person to person comparison)</h3>
               <p>While on the same page, in an oversimplified question and answer view of the community (no interaction UI), there are two answers. Each avatar and name for each answer has a hover state. Thomas has more community engagement metrics in his profile card, while Mike has more of the Atlassian Certification information on display in his. </p>
               
               <p>The central question asked in this experience: If all other factors are the same (both Community Leaders, same number of upvotes, both provided good quality answers) Which of these people are you more willing to believe?</p>

               <img src={profileCard1} alt="Person A versus Person B" />

               <h3>Test B (apples to apples comparison)</h3>
               <p>This test includes presenting two distinctly different profile cards, one that is more community engagement metrics and the other that’s more certification focused. This is meant to solicit feedback on which profile card creates more trust with the answer provided. The profile cards will appear on hover over a reduced and simplified experience of the community (only shows the question and an answer, none of the interaction UI will be present).</p>

               <img src={profileCard2} alt="Apples to apples comparison" />
            </section>

            <section className="section--case-study wrapper">
               <h2>The results</h2>
               <h3>Test A (person to person comparison</h3>
               <p>Both certifications earned and community engagement activity help shape the credibility of a person, but they must be shown together to elicit the most amount of trust.</p>
               
               <p>Apart, they reveal a missing counterbalancing element. Together, they prove to be a combination that can’t be beat. Participant 20B's oscillations are clear, as he mentally juggles the merits of certifications with what it means to contribute inside the context of a community</p>

               <blockquote>“I think that if this guy had the certifications, or if all things being equal, I’d still gravitate towards this one [Thomas, the version that had community engagement activity]. I’m not saying that certifications don’t matter or not important, but that doesn’t mean that you’ve been effective at participating within the user community and effectively explaining and answering their questions.”</blockquote>

               <h3>Test B (apples to apples comparison)</h3>
               <p>Both certifications earned and community engagement activities help shape the credibility of a person, but they must be shown together to elicit the most amount of trust.</p>
               
               <p>Apart, they reveal a missing counterbalancing element. Together, they prove to be a combination that can’t be beat.</p>

               <blockquote><strong>"These certifications give me a good sense of the amount of information this guy’s background is in. Being able to see how many time he’s posted and how many of those answers gives me that social proof</strong> that he’s done this before. Someone can be certified but could be a pretty bad communicator. They’re know what they are talking about but can’t get their point across, and so that’s not going to help me in establishing his sense of trustworthiness. but if he’s posted accepted and its been accepted so many times, he is a good communicator, and his answers do work for the vast majority of users that aren’t as tech savvy as he is.”</blockquote>
            </section>

            <section className="section--case-study wrapper">
               <h2>Research conclusion</h2>
               <p>It's evident that the inclusion of certifications is a no brainer, especially if they have them. There is no downside. However, if they do have certifiations, trustworthiness only increases when there is social proof of activity on the platform, other else there's a slight lost of trust.</p>
            </section>

            <section className="section--case-study wrapper">
               <h2>What are the practical implications of this research?</h2>
               <p>It has informed the need to redesign the profile hover card in a way that's more aligned to users of the internet forums.</p>
               <h4 style={{marginBottom:`1rem`}}>Previous profile card</h4>
               <img src={profileCard3} alt="Previous profile card" />
               <h3>Design principles</h3>
               <ol>
                  <li>Less is more, but more of the stuff that builds trust</li>
                  <li>Connect people to collaborate better</li>
               </ol>
               <p>Leaning on the design principles, which piece of existing data builds trust?</p>
               <table>
                  <thead>
                     <tr>
                        <td>Current</td>
                        <td>Proposed</td>
                        <td>Delta</td>
                        <td>Rationale</td>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Avatar</td>
                        <td><strong>Avatar</strong></td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Builds
                              </div>
                           </div>
                        </td>
                        <td>Real faces or images being uploaded versus initials or abstract shapes.</td>
                     </tr>
                     <tr>
                        <td>Name</td>
                        <td><strong>Name</strong></td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Builds
                              </div>
                           </div>
                        </td>
                        <td>Real names or close to a real name.</td>
                     </tr>
                     <tr>
                        <td>Job title</td>
                        <td>Job title</td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Neutral
                              </div>
                           </div>
                        </td>
                        <td>Often times user generated inputs to this profile field isn’t always complete and could be read incorrectly, e.g. “Administrator” Is this someone who is a system administrator or someone who is an administrator of the community?</td>
                     </tr>
                     <tr>
                        <td>Community role</td>
                        <td>Community role</td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Neutral
                              </div>
                           </div>
                        </td>
                        <td>It does build trust, but it’s already displayed next to the person’s name. Is duplication necessary? Additionally, “Community Leader” is insider-baseball language and it’s meaning isn’t totally apparent.</td>
                     </tr>
                     <tr>
                        <td>Company name</td>
                        <td>Company name</td>
                        <td>
                           <div className="lozenge lozenge--red">
                              <div className="lozenge--inner">
                                 Consider removal
                              </div>
                           </div>
                        </td>
                        <td>Relevant information, yes, but adds noise that’s not part of credibility establishment. Can still be found in profile page.</td>
                     </tr>
                     <tr>
                        <td>Location</td>
                        <td>Location</td>
                        <td>
                           <div className="lozenge lozenge--red">
                              <div className="lozenge--inner">
                                 Consider removal
                              </div>
                           </div>
                        </td>
                        <td>Relevant information, yes, but adds noise that’s not part of credibility establishment. Can still be found in profile page.</td>
                     </tr>
                     <tr>
                        <td>No. of accepted</td>
                        <td><strong>No. of accepted answers</strong></td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Builds
                              </div>
                           </div>
                        </td>
                        <td>Yes 💯</td>
                     </tr>
                     <tr>
                        <td>Total posts</td>
                        <td><strong>Total posts</strong></td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Builds
                              </div>
                           </div>
                        </td>
                        <td>Yes 💯</td>
                     </tr>
                     <tr>
                        <td>Badges</td>
                        <td>Badges</td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Neutral
                              </div>
                           </div>
                        </td>
                        <td>Badges are understood but the individual badges themselves may not be totally apparent. e.g. “Rising star” or “May Challenge”</td>
                     </tr>
                     <tr>
                        <td>View profile button</td>
                        <td>View profile button</td>
                        <td>
                           <div className="lozenge lozenge--green">
                              <div className="lozenge--inner">
                                 Neutral
                              </div>
                           </div>
                        </td>
                        <td>Necessary action but when seen in light of the primary action (establishing trust and evaluating whether an answer is worthwhile) this can be seen as a more a neutral building activity and can be seen as adding unnecessary noise.</td>
                     </tr>
                  </tbody>
               </table>
            </section>

            <section className="section--case-study wrapper">
               <h2>Before &amp; After</h2>
               <p>After a few rounds of critique and feedback, this was the result.</p>
               <img src={profileCard4} alt="before and after" />
               <h3>What's changes?</h3>
               <ol>
                  <li>Orientation of the card went from vertical to horizontal</li>
                  <li>The blue header was removed to allow the eye to rest as it takes in this information</li>
                  <li>The above elements (in the table) were removed</li>
                  <li>The elements that stayed in were moved to more prominent and logical positions:</li>
                  <ol>
                     <li>Avatar got moved closer to the person's name</li>
                     <li>Community activity got moved to it's own section with more emphasis on the counts</li>
                     <li>Badges were placed in the upper right as a way to balance out the space and give them a unique place</li>
                  </ol>
                  <li>Certifications have their own place on the profile card and are located right under the person's name and above their accomplishments in the community.</li>
               </ol>
            </section>

            <section className="section--case-study wrapper">
               <h2>Visual changes</h2>
               <img src={profileCard5} alt="visually different" />
               <ol>
                    <li>Avatar</li>
                    <li>Certifications</li>
                    <li>Name of person &amp; link to profile</li>
                    <li>Recently earned badges</li>
                    <li>Total posts</li>
                    <li>Count of answers <em>(creates a ratio of helpfulness)</em></li>
                    <li>Count of answers that have been accepted</li>
                </ol>
                <img src={profileCard6} alt="States" />
            </section>

            <section className="section--case-study wrapper">
               <h2>Outcomes</h2>
               <p>Previous profile card was shown 126,000 times per month, on average. The new profile card has averaging about 150,000 times per month. Which represents a 119% growth in hover events. More than that, the previous 30 day period before shipping, we saw a click through rate to profile around 0.25%. With the new profile the click through rate to the profile has increased to 1%. Which is rather interesting because the button is no longer there, and the name is the only clickable item to get to the profile page.</p>
            </section>


         </section>
      </Layout>
   )
}