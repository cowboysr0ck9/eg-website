import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from '../components/callToAction'

const TermsAndConditionsPage = () => (
  <Layout>
    <SEO title="Terms" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Terms</h1>
            <p>
              Conditions<span className="text-primary"> We</span> Follow
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Test</p>
          </Col>
        </Row>
      </Container>
    </section>


    <CallToAction />
  </Layout>
)

export default TermsAndConditionsPage
