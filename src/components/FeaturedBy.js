import React, { Component } from "react"
import { Row, Col, Container } from "reactstrap"
import clientLogos from "../data/ClientLogos"

export default class FeaturedBy extends Component {
  render() {
    return (
      <section className="py-5">
        <Container>
          <Row className="text-center">
            <Col xs={12}>
              <div className="h1-title-accent" />
              <h6 className="text-muted fs-14">
                OUR PROJECTS WERE FEATURED BY
              </h6>
            </Col>
            <Col
              xs={12}
              className="py-3 d-flex justify-content-between flex-wrap"
              style={{ opacity: 0.25 }}
            >
              {clientLogos.map(x => {
                return (
                  <a id={x.id} href={x.href} rel="nofollow" className="py-2">
                    <img src={x.src} alt={x.alt} title={x.src} height={32} />
                  </a>
                )
              })}
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
