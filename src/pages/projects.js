import * as React from "react"


import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const Projects = () => (
  <>
  <Header />
  <Seo title="Projects" />
  <section className="my-5" style={{ paddingBottom: `350px` }}>
        <div className="container">
            <div className="row">
           
    <h1>Projects</h1>
    <p>We are a full-service technology company specializing in web based applications. We are able to assess your current IT infrastructure processes/procedures, guide you through and implement cost saving strategies for moving your infrastructure to the cloud, integrate your applications so they work more efficiently together as well as develop/implement custom software solutions to automate inefficiencies out of your company.</p>

            </div>
        </div>
    </section>

  <Footer />
  </>
)

export default Projects
