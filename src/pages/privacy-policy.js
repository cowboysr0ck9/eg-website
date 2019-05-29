import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from "../components/callToAction"

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Privacy</h1>
            <p>
              We<span className="gradient-text-primary"> Respect</span> Privacy
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is very important to us. Accordingly, we have
              developed this Policy in order for you to understand how we
              collect, use, communicate and disclose and make use of personal
              information. The following outlines our privacy policy.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <CallToAction />
  </Layout>
)

export default PrivacyPolicyPage
