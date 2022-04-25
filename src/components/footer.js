import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => (
  <footer>

      
            <div className="container">
                <h2>Contact Us!</h2>
                <div className="row">
                    <div className="col-md-3">
                        <p>
                        Wickidcool Software LLC <br />
                        W237N7364 Monterey Ct<br />
                        Sussex, WI 53089
                        </p>
                    </div>
                    <div className="col-md-1"><span className="spcr"></span></div>
                    <div className="col-md-3">
                        <div className="footersocial">
                            <span><Link to="#">
                                <StaticImage
                            src="../images/facebookIcon.png"
                            width={32}
                            alt="Wickidcool"
                            quality={50}
                            formats={["auto", "webp", "avif"]}
                            style={{ marginRight: `10px` }}   
                            />
                            @wickidcool</Link></span>

                            <span><Link to="#">
                                <StaticImage
                            src="../images/linkedInIcon.png"
                            width={32}
                            quality={100}
                            formats={["auto", "webp", "avif"]}
                            alt="Wickidcool"
                            /> Wickidcool Software</Link></span>
                        </div>
                    </div>
                    <div className="col-md-1"><span className="spcr"></span></div>
                    <div className="col-md-3">
                    <div className="footersocial">
                            <span><Link to="#">
                                <StaticImage
                            src="../images/phoneIcon.png"
                            width={32}
                            alt="Wickidcool"
                            quality={100}
                            formats={["auto", "webp", "avif"]}      
                            />
                            &nbsp;(414) 614-3623</Link></span>

                            <span><Link to="#">
                                <StaticImage
                            src="../images/emailIcon.png"
                            width={32}
                            //quality={100}
                            alt="Wickidcool"
                            /> info@wickidcool.com</Link></span>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <small>©2022 Wickidcool Software LLC</small>
                </div>
            </div>
        
     
  </footer>
)



export default Footer
