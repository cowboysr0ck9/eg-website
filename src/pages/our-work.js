import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from "../components/callToAction"
import { youtube } from "../data/YoutubeTutorials"

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
              Clients <span className="gradient-text-primary">Love</span> Us
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="video-tutorials">
      <Container fluid>
        <Row className="justify-content-center">
          {youtube.map(x => {
            return (
              <Col className="px-0 my-0">
                <iframe
                  width="560"
                  height="315"
                  src={`${x.link}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>

    <CallToAction />
  </Layout>
)

export default OurWorkPage
