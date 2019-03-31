import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from "../components/callToAction"

// Developer Section Icons
import Bootstrap from "../images/service-icons/bootstrap.png"
import ES6 from "../images/service-icons/es6.png"
import Facebook from "../images/service-icons/facebook.png"
import HTML5 from "../images/service-icons/html5.png"
import Instagram from "../images/service-icons/instagram.png"
import Invision from "../images/service-icons/invision.png"
import NodeJs from "../images/service-icons/node-js.png"
import Photoshop from "../images/service-icons/photoshop.png"
import ReactIcon from "../images/service-icons/react-js.png"
import Scss from "../images/service-icons/scss.png"
import Sketch from "../images/service-icons/sketch.png"
import Snapchat from "../images/service-icons/snapchat.png"
import WordPress from "../images/service-icons/wordpress.png"

const ServicesPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Services</h1>
            <p>
              We <span className="text-primary">Transform</span> Ideas
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Developers Section */}
    <section className="py-192 bg-light">
      <Container>
        <Row>
          <Col>
            <p className="text-primary mb-0">CUSTOM FULL STACK</p>
            <h1>Web Development</h1>
            <p className="mt-3 mt-sm-5 service-paragraph">
              The web is here to stay. We’ve been working with robust and
              popular web technologies for just about two decades, and it’s
              something we still love doing today. Whether creating a web
              presence for your company, an information hub for your business or
              empowering your apps / IoT devices through backend – we cover a
              wide spectrum of solutions and frameworks by leveraging the power
              of the internet.
            </p>
            <div className="d-flex justify-content-start align-items-center flex-wrap mb-5">
              <img
                src={NodeJs}
                alt="Node JS javascript development"
                className="mr-2"
              />
              <img
                src={ReactIcon}
                alt="ReactJs web development"
                className="mr-2"
              />
              <img
                src={WordPress}
                alt="WordPress CMS development"
                className="mr-2"
              />
              <img
                src={Scss}
                alt="Scss Stylign for web applications"
                className="mr-2"
              />
              <img
                src={HTML5}
                alt="Utilizing the latest HTML5 structure guidelines"
                className="mr-2"
              />
              <img
                src={ES6}
                alt="Facebook marketing"
                className="mr-2 mt-2 mt-sm-0"
              />
              <img
                src={Bootstrap}
                alt="Snapchat marketing"
                className="mr-2 mt-2 mt-sm-0"
              />
            </div>
            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Marketing Section */}
    <section className="py-192">
      <Container>
        <Row>
          <Col>
            <p className="text-primary mb-0">TIME TO GET SOCIAL</p>
            <h1>Digital Marketing</h1>
            <p className="mt-3 mt-sm-5 service-paragraph">
              The web is here to stay. We’ve been working with robust and
              popular web technologies for just about two decades, and it’s
              something we still love doing today. Whether creating a web
              presence for your company, an information hub for your business or
              empowering your apps / IoT devices through backend – we cover a
              wide spectrum of solutions and frameworks by leveraging the power
              of the internet.
            </p>
            <div className="d-flex justify-content-start align-items-center mb-5">
              <img src={Snapchat} alt="Snapchat marketing" className="mr-2" />
              <img src={Facebook} alt="Facebook marketing" className="mr-2" />
              <img src={Instagram} alt="Instagram marketing" className="mr-2" />
            </div>

            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Design Section */}
    <section className="py-192 bg-light">
      <Container>
        <Row>
          <Col>
            <p className="text-primary mb-0">100% PIXEL PERFECT</p>
            <h1>UI & Graphic Design</h1>
            <p className="mt-3 mt-sm-5 service-paragraph">
              The web is here to stay. We’ve been working with robust and
              popular web technologies for just about two decades, and it’s
              something we still love doing today. Whether creating a web
              presence for your company, an information hub for your business or
              empowering your apps / IoT devices through backend – we cover a
              wide spectrum of solutions and frameworks by leveraging the power
              of the internet.
            </p>
            <div className="d-flex justify-content-start align-items-center mb-5">
              <img src={Sketch} alt="Snapchat marketing" className="mr-2" />
              <img src={Photoshop} alt="Facebook marketing" className="mr-2" />
              <img src={Invision} alt="Instagram marketing" className="mr-2" />
            </div>
            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <CallToAction />
  </Layout>
)

export default ServicesPage
