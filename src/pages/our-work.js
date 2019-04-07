import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from '../components/callToAction'

const OurWorkPage = () => (
  <Layout>
    <SEO title="Work" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Our Work</h1>
            <p>
              Clients <span className="text-primary">Love</span> Us
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <CallToAction />
  </Layout>
)

export default OurWorkPage
