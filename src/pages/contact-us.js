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
    <section className="pt-5 bg-light">
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <div className="mt-5 h1-title-accent" />
            <h1>Get started with a project estimate</h1>
            <p className="text-muted">
              Fill out the form below, and one of our team members will get back
              to you shortly.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <ContactForm />
    <CallToAction />
  </Layout>
)

export default ContactUsPage
