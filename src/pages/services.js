import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from '../components/callToAction'

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
    <CallToAction />
  </Layout>
)

export default ServicesPage
