import React, { Component } from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MessageReceived from "../images/thank-you/message-received.svg"
export default class ThankYou extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Message Sent"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <section className="bg-primary thanks">
          <Header />
          <Container className="d-flex justify-content-center align-items-center">
            <Row>
              <Col xs={12}>
                <img
                  height={256}
                  src={MessageReceived}
                  alt="Message successfully sent"
                />
              </Col>
              <Col xs={12} className="mt-5">
                <p className="h3">Thanks your message has been received!</p>
                <Link className="mt-3 btn btn-light" to="/">
                  Return Home
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}
