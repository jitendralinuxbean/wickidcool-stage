import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="my-5" style={{ paddingBottom: `350px` }}>
        <div className="container">
            <div className="row">
            <Seo title="Projects" />
    <h1>Projects</h1>
    <p>We are a full-service technology company specializing in web based applications. We are able to assess your current IT infrastructure processes/procedures, guide you through and implement cost saving strategies for moving your infrastructure to the cloud, integrate your applications so they work more efficiently together as well as develop/implement custom software solutions to automate inefficiencies out of your company.</p>

            </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
