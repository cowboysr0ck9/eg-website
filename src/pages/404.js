import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from "../components/callToAction"
import { Link } from "gatsby"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Error" />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col className="justify-content-center text-center">
            <h1>404 Error</h1>
            <p>
              Page <span className="gradient-text-primary">Doesn't</span> exist
            </p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
          </Col>
        </Row>
      </Container>
    </section>
    <CallToAction />
  </Layout>
)

export default NotFoundPage
