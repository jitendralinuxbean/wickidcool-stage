import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
     <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="Sitebrand" href="#">
      <StaticImage
        src="../images/wickidcool-logo.png"
        width={327}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Wickidcool"
        style={{ marginBottom: `1.45rem` }}
      />
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">
       <li>
        <Link className="nav-item" to="/">
          Home
       </Link>
       </li>
       <li>
       <Link className="nav-item" to="/about">
          About Us
        </Link>
        </li>
        <li>
        <Link className="nav-item" to="/projects">
          Projects
        </Link>
        </li>
        
      </ul>
      <div class="rightSocial">
       <span>
         <StaticImage
      src="../images/facebookIcon.png"
      width={32}
      alt="Wickidcool"
      //quality={32}
      //formats={["auto", "webp", "avif"]}      
      />
       @wickidcool</span>

       <span><StaticImage
      src="../images/linkedInIcon.png"
      width={32}
      //quality={100}
      alt="Wickidcool"
       /> Wickidcool Software</span>

      </div>
    </div>
  </div>
</nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
