import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from '../components/callToAction'
const CopyrightPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Copyright</h1>
            <p>Law <span className="text-primary">Abiding</span> Designers</p>
          </Col>
        </Row>
      </Container>
    </section>

    <CallToAction />
  </Layout>
)

export default CopyrightPage
