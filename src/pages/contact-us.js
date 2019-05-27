import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactForm from "../components/contact-form"
import CallToAction from "../components/callToAction"
const ContactUsPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Contact</h1>
            <p>
              Time <span className="gradient-text-primary">To</span> Talk
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h6>Contact Info</h6>
            <address>EadsGraphic Philadelphia, PA</address>
          </Col>
          <Col xs={12} sm={6}>
            <h6>Contact Info</h6>
          </Col>
        </Row>
      </Container>
    </section>

    <ContactForm />
    <CallToAction />
  </Layout>
)

export default ContactUsPage
