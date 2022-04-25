/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import { Link } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 import Header from "./header"
 import Footer from "./footer"
 
 import "./layout.css"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
 
     
     <>
     <Header />
           <section className="welcomsec">
         <div className="container">
           <div className="heroSection">
             <h1>Welcome to Wickidcool Software LLC!</h1>
             <h2> We are a full-service technology company specializing in web based applications.  We are able to assess your current IT infrastructure processes/procedures,  guide you through and implement cost saving strategies for moving your infrastructure to the cloud, integrate your applications so they work more efficiently together as well as develop/implement custom software solutions to automate inefficiencies out of your company.
            </h2>
            <h3>Scroll for more information on the services we offer!</h3> 
           </div>
         </div>
 
       </section>
 
 
       <section className="ITassesec">
         <div className="container-fluid">
           <div className="row">
           <div className="col-md-6 offset-0 offset-lg-1">
             <div className="ItLEftbox">   
             <h2>IT Assessments</h2>
               <p>We provide services to review your current technology plan as well as work with your current processes and procedures to update them.  This includes creating ones where they don't exist.
               We will also look for ways to cut down on costs associated with outdated or inadequate procedures.</p>
 
               <Link to="#"><StaticImage
                   src="../images/rightArrow.png" width={15} style={{ marginRight: `10px` }} />Contact us for more information</Link>
               </div>
            </div>
 
            <div className="col-md-5 p-0 p-0">
                 <StaticImage
                   src="../images/IT-assessments.png"
                   width={789}
                   quality={100}
                   formats={["auto", "webp", "avif"]}
                   alt="Wickidcool"
                   
             />
            </div> 
            </div> 
           </div>
       </section>
 
 <section className="Mentoringsec">
         <div className="container-fluid">
           <div className="row">
           <div className="col-md-6 p-0 order-2 order-lg-0">
 
           <StaticImage
                   src="../images/mentoringPics.png"
                   width={906}
                   quality={100}
                   formats={["auto", "webp", "avif"]}
                   alt="Wickidcool"
                   
             />
            
            </div>
 
            <div className="col-12 col-md-5 order-1 order-lg-0">
            <div className="menRightbox">   
             <h2>Mentoring</h2>
               <p>We can work with your developers to help them grow as a team as well as using agile methodologies to improve or hone their coding and design practices.  We have worked with several teams over the years and worked with many developers to teach effective ways of development.  We have also learned a lot about working with several different styles of developers.
 
 </p>
 
               <Link to="#">Contact us for more information <StaticImage
                   src="../images/rightArrow.png" width={15} style={{ marginLeft: `10px` }} /></Link>
               </div>
                
            </div>
 
            </div>
 
           </div>
         
 
 </section>
 
 <section className="Devsec">
         <div className="container-fluid">
           <div className="row">
           <div className="col-md-6 offset-0 offset-lg-1">
             <div className="ItLEftbox">   
             <h2>Development</h2>
               <p>We develop using unit tests to ensure that the system works the way we believe it is intended.  We also work well in small groups that include testers, dba's, business analysts as well as the development team.  We use continuous integration to ensure that code that is checked in builds, passes all unit tests, and adheres to the standards we have agreed upon</p>
 
               <Link to="#"><StaticImage
                   src="../images/rightArrow.png" width={15} style={{ marginRight: `10px` }} />Contact us for more information</Link>
               </div>
            </div>
 
            <div className="col-md-5 p-0">
                 <StaticImage
                   src="../images/developmentPics.png"
                   width={809}
                   quality={100}
                   formats={["auto", "webp", "avif"]}
                   alt="Wickidcool"
                   
             />
            </div>
 
            </div>
 
           </div>
         
 
       </section>
       <Footer />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 