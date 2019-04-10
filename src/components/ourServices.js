import React from "react"
import { Row, Col, Container } from "reactstrap"
import { Link } from "gatsby"

export default class OurServices extends React.Component {
  render() {
    return (
      <section className="py-192 " id="eg-our-services">
        <Container>
          <Row>
            <Col xs={12} className="text-center text-primary">
              AREAS OF INTEREST
            </Col>
            <Col xs={12} className="text-center">
              <h1>Skills and Services</h1>
            </Col>

            <Col xs={12} sm={4}>
              <div className="eg-service-block">SEO</div>
            </Col>

            <Col xs={12} sm={4}>
              <div className="eg-service-block">UI/UX Design</div>
            </Col>

            <Col xs={12} sm={4}>
              <div className="eg-service-block">Graphic Design</div>
            </Col>

            <Col xs={12} sm={4}>
              <div className="eg-service-block">Digital Marketing</div>
            </Col>

            <Col xs={12} sm={4}>
              <div className="eg-service-block">Web Development</div>
            </Col>

            <Col xs={12} className="text-center">
              <Link to="/our-services" className="btn btn-primary">
                More Info
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
