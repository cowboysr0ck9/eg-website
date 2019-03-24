import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Card, CardBody } from "reactstrap"

export default class ClientTestimonials extends React.Component {
  render() {
    return (
      <section className="bg-light py-96">
        <Container>
          <Row>
            <Col xs={12}>
              <p className="mb-0 text-primary text-center">
                DON’T TAKE OUR WORD FOR IT
              </p>
              <h1 className="text-center">Client Testimonials</h1>
            </Col>
            <Col xs={12} sm={4} className="mt-5">
              <Card>
                <CardBody>
                  <p>
                    EadsGraphic is one of the best-kept secrets in the graphic
                    design world. They are professional, extremely creative, and
                    make sure they meet the client's needs. I have used their
                    services for a variety of projects and without fail,
                    everyone asks “Who did the design work?” If you are looking
                    for ANY type of design work, EadsGraphic is the place to go!
                  </p>
                  <h6 className="text-center">Anthony Goins</h6>
                  <p className="text-center">
                    Quinnipiac University Men's Basketball Assistant Coach
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4} className="mt-5">
              <Card>
                <CardBody>
                  <p>
                    EadsGraphic is one of the best-kept secrets in the graphic
                    design world. They are professional, extremely creative, and
                    make sure they meet the client's needs. I have used their
                    services for a variety of projects and without fail,
                    everyone asks “Who did the design work?” If you are looking
                    for ANY type of design work, EadsGraphic is the place to go!
                  </p>
                  <h6 className="text-center">Anthony Goins</h6>
                  <p className="text-center">
                    Quinnipiac University Men's Basketball Assistant Coach
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4} className="mt-5">
              <Card>
                <CardBody>
                  <p>
                    EadsGraphic is one of the best-kept secrets in the graphic
                    design world. They are professional, extremely creative, and
                    make sure they meet the client's needs. I have used their
                    services for a variety of projects and without fail,
                    everyone asks “Who did the design work?” If you are looking
                    for ANY type of design work, EadsGraphic is the place to go!
                  </p>
                  <h6 className="text-center">Anthony Goins</h6>
                  <p className="text-center">
                    Quinnipiac University Men's Basketball Assistant Coach
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
