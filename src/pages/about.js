import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

const About = () => (
  <>
  <Header />
  <Seo title="About Us" />
  <section className="my-5" style={{ paddingBottom: `350px` }}>
        <div className="container">
            <div className="row">

              <div className="col-10">
                <h1>About Us!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sem eget sem faucibus eleifend id quis ipsum. Aliquam ac felis id turpis laoreet euismod. Cras pretium, neque in aliquet tempor, erat neque suscipit magna, scelerisque cursus lectus lacus eu leo. Suspendisse egestas dictum eros et sodales. </p>

              </div>    

            </div>

        </div>
    </section>

  <Footer />
  </>
)

export default About
