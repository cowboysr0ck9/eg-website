import React from "react"
import { Link } from "gatsby"
import EadsGraphicLogo from "../images/EadsGraphic-main-logo.svg"
import { Row, Col, Container } from "reactstrap"

// Social Icons
import BehanceSocial from "../images/social-icons/behance.svg"
import YoutubeSocial from "../images/social-icons/youtube.svg"
import InstagramSocial from "../images/social-icons/instagram.svg"
import DribbbleSocial from "../images/social-icons/dribbble.svg"
import GithubSocial from "../images/social-icons/github.svg"

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="py-96 map-background">
        <Container>
          <Row>
            <Col xs={12} sm={4} className="mb-5 mb-sm-0">
              <img src={EadsGraphicLogo} alt="EadsGraphic Official Logo" />
              <div class="d-flex mt-4">
                <div className="eg-social-btn mr-3">
                  <a href="https://www.behance.net/tylereads">
                    <img
                      src={BehanceSocial}
                      width={32}
                      alt="Follow EadsGraphic on Behance"
                    />
                  </a>
                </div>

                <div className="eg-social-btn mr-3">
                  <a href="https://www.youtube.com/channel/UCzSqOX4lcdU9R-s6qjKQWqQ/featured">
                    <img
                      src={YoutubeSocial}
                      width={32}
                      alt="Follow EadsGraphic on YouTube"
                    />
                  </a>
                </div>

                <div className="eg-social-btn mr-3">
                  <a href="https://www.instagram.com/eadsgraphic/?hl=en">
                    <img
                      src={InstagramSocial}
                      height={28}
                      alt="Follow EadsGraphic on Instagram"
                    />
                  </a>
                </div>

                <div className="eg-social-btn mr-3">
                  <a href="https://dribbble.com/eadsgraphic">
                    <img
                      src={DribbbleSocial}
                      height={28}
                      alt="Follow EadsGraphic on Dribbble"
                    />
                  </a>
                </div>

                <div className="eg-social-btn">
                  <a href="https://github.com/EadsGraphic">
                    <img
                      src={GithubSocial}
                      height={28}
                      alt="Follow EadsGraphic on GitHub"
                    />
                  </a>
                </div>
              </div>
              <p className="mt-4">
                EadsGraphic is a creative development agency based in the
                greater Philadelphia area. Our team focuses on providing clients
                with services that include web development, graphic design,
                digital marketing, and SEO.
              </p>
              <a className="eg-email" href="mailto:eadsgraphics@gmail.com">
                eadsgraphics@gmail.com
              </a>
            </Col>

            <Col xs={6} md={2} className="mb-3 mb-sm-0">
              <h4 className="mb-4">About Us</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about-us">The Story</Link>
                </li>
                <li>
                  <Link to="/about-us">Our Team</Link>
                </li>
                <li>
                  <Link to="/about-us">Testimonials</Link>
                </li>
                <li>
                  <Link to="/contact-us">Customer Support</Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mb-sm-0">
              <h4 className="mb-4">Services</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/services#eg-service-web-development">SEO</Link>
                </li>
                <li>
                  <Link to="/services#eg-service-graphic-design">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="/services#eg-service-graphic-design">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to="/services#eg-service-digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services#eg-service-web-development">
                    Web Development
                  </Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mb-sm-0">
              <h4 className="mb-4">Navigation</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/our-work">Work</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
              </ul>
            </Col>

            <Col xs={6} md={2} className="mb-3 mb-sm-0">
              <h4 className="mb-4">Resources</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/contact-us#eg-faq-section">F.A.Q</Link>
                </li>
                <li>
                  <Link to="/sitemap">Sitemap</Link>
                </li>
                <li>
                  <Link to="/copyright">Copyright</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms and conditions</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-between">
              <span>
                © {new Date().getFullYear()}
                <Link to="/"> EadsGraphic</Link>
              </span>
              <span>English</span>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
