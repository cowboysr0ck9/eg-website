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

// Section Images
import WebDevelopmentHero from "../images/service-hero-images/eadsgraphic-web-development.svg"
import DigitalMarketingHero from "../images/service-hero-images/eadsgraphic-digital-marketing.svg"
import UIDesignHero from "../images/service-hero-images/eadsgraphic-ui-design.svg"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Services</h1>
            <p>
              We <span className="gradient-text-primary">Transform</span> Ideas
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Developers Section */}
    <section className="py-192" id="eg-service-web-development">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="order-1 order-sm-0">
            <div className="h1-title-accent" />
            <p className="text-primary mb-0">CUSTOM FULL STACK</p>
            <h1 className="mb-0">Web Development</h1>
            <p className="mt-4 service-paragraph">
              A prominent mobile driven web presence is crucial in today’s fast
              paced environment. Converting site views into sales does not have
              to be complicated or expensive. We develop websites that tell a
              story to ensure that we successfully connect our clients with
              their customers. Our battle tested plan of attack focuses on
              providing clients with a solid web foundation that they can manage
              with little to no technical experience.
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

            <ul className="list-unstyled mb-5 ">
              <li>
                <h6>Responsive Mobile Design</h6>
                <p>
                  Our sites are carefully crafted and designed for mobile
                  devices
                </p>
              </li>

              <li>
                <h6>Content Management Systems</h6>
                <p>
                  WordPress allows us to build sites that clients can easily
                  maintain
                </p>
              </li>

              <li>
                <h6>Search Engine Optimization (SEO)</h6>
                <p>
                  Target your audience by tailoring web pages to specific search
                  attributes
                </p>
              </li>
            </ul>

            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>

          <Col xs={12} sm={6} className="order-0 order-sm-1 mb-5 mb-sm-0">
            <img
              src={WebDevelopmentHero}
              className="svg-image"
              alt="EadsGraphic web development service."
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* Marketing Section */}
    <section className="py-192" id="eg-service-digital-marketing">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="mb-5 mb-sm-0">
            <img
              src={DigitalMarketingHero}
              className="svg-image"
              alt="EadsGraphic digital marketing service."
            />
          </Col>
          <Col xs={12} sm={6}>
            <div className="h1-title-accent" />
            <p className="text-primary mb-0">TIME TO GET SOCIAL</p>
            <h1 className="mb-0">Digital Marketing</h1>
            <p className="mt-4 service-paragraph">
              To really stand out amongst competition it is really no longer
              enough to just have a great website. As a business you need to
              constantly be presenting your company to clients on a variety of
              digital mediums. We will provide an in-depth plan to understand
              and identify your desired target audience. From there we will
              craft a digital strategy to ensure you are easily visible to
              clients. Our most successful campaigns heavily focused on social
              media marketing as well as specifically targets ads using google
              adsense.
            </p>
            <div className="d-flex justify-content-start align-items-center mb-5">
              <img src={Snapchat} alt="Snapchat marketing" className="mr-2" />
              <img src={Facebook} alt="Facebook marketing" className="mr-2" />
              <img src={Instagram} alt="Instagram marketing" className="mr-2" />
            </div>

            <ul className="list-unstyled mb-5 ">
              <li>
                <h6>Instagram</h6>
                <p>
                  Reach younger audiences by running ad campaigns on instagram
                </p>
              </li>

              <li>
                <h6>Facebook Ads</h6>
                <p>
                  Target specific demographics and locations using facebook ads
                </p>
              </li>

              <li>
                <h6>Google AdSense</h6>
                <p>
                  AdSense campaigns are great for local business looking to
                  reach new customers
                </p>
              </li>
            </ul>

            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Design Section */}
    <section className="py-192" id="eg-service-graphic-design">
      <Container>
        <Row>
          <Col xs={12} sm={6} className="order-1 order-sm-0">
            <div className="h1-title-accent" />
            <p className="text-primary mb-0">100% PIXEL PERFECT</p>
            <h1 className="mb-0">Creative Design</h1>
            <p className="mt-4 service-paragraph">
              Great design work gives your brand a clear and concise identity
              and character that clients can connect with in a meaningful way.
              Our designers will help to effectively communicate your idea with
              your audience. Our design solutions leave a lasting impact and
              will surely catch the attention of your next customer as we strive
              to elevate your brands recognition. Our designers will work
              directly with our clients to deliver compelling and functional
              designs in various forms.
            </p>
            <div className="d-flex justify-content-start align-items-center mb-5">
              <img src={Sketch} alt="Snapchat marketing" className="mr-2" />
              <img src={Photoshop} alt="Facebook marketing" className="mr-2" />
              <img src={Invision} alt="Instagram marketing" className="mr-2" />
            </div>

            <ul className="list-unstyled mb-5 ">
              <li>
                <h6>UI/UX Design</h6>
                <p>
                  Visualize your next app with wireframes and high fidelity
                  screen designs
                </p>
              </li>

              <li>
                <h6>Graphic Design</h6>
                <p>
                  Custom designed content is a great way to add a professional
                  touch
                </p>
              </li>

              <li>
                <h6>Print Design</h6>
                <p>
                  Reach clients by using printed materials such as posters or
                  business cards
                </p>
              </li>
            </ul>

            <Link to="/contact-us" className="btn btn-primary">
              Learn More
            </Link>
          </Col>
          <Col xs={12} sm={6} className="order-0 order-sm-1 mb-5 mb-sm-0">
            <img
              src={UIDesignHero}
              className="svg-image"
              alt="EadsGraphic UI/UX and graphic design services."
            />
          </Col>
        </Row>
      </Container>
    </section>

    <CallToAction />
  </Layout>
)

export default ServicesPage
