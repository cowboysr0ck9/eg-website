import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, Card, CardBody } from "reactstrap"

// Testimonial Avatar Images
import JamieErfle from "../images/testimonials/jamie-erfle-eadsgraphic-testimomial.webp"
import MikeCiunci from "../images/testimonials/mike-ciunci-eadsgraphic-testimomial.webp"
import AnthonyGoins from "../images/testimonials/anthony-goins-eadsgraphic-testimomial.webp"

export default class ClientTestimonials extends React.Component {
  render() {
    return (
      <section className="bg-light py-96" id="eg-testimonials">
        <Container>
          <Row>
            <Col xs={12}>
              <p className="mb-0 text-primary text-center">
                WHAT CLIENTS HAVE TO SAY
              </p>
              <h1 className="text-center">Client Testimonials</h1>
            </Col>
            <Col xs={12} sm={4} className="mt-5 text-center">
              <img
                className="eg-testimonial-avatar"
                src={JamieErfle}
                alt="Jamie Erfle's client testimonial"
              />
              <Card className="eg-testimonial">
                <CardBody>
                  <h6 className="text-center">Jamie Gressen Erfle</h6>
                  <p className="text-center eg-sub-title">
                    Jamie Erfle | Keller Williams Reality
                  </p>
                  <p>
                    Tyler is great to work with! He takes initiative in
                    providing design and content for my webpage and social media
                    ads. He is also extremely responsive and implements ideas
                    quickly.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4} className="mt-5 text-center">
              <img
                className="eg-testimonial-avatar"
                src={AnthonyGoins}
                alt="Anthony Goins's client testimonial"
              />
              <Card className="eg-testimonial">
                <CardBody>
                  <h6 className="text-center">Anthony Goins</h6>
                  <p className="text-center eg-sub-title">
                    Quinnipiac University Men's Basketball
                  </p>
                  <p>
                    EadsGraphic is one of the best-kept secrets in the graphic
                    design world. They are professional, extremely creative, and
                    make sure they meet the client's needs. I have used their
                    services for a variety of projects and without fail,
                    everyone asks “Who did the design work?” If you are looking
                    for ANY type of design work, EadsGraphic is the place to go!
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={4} className="mt-5 text-center">
              <img
                className="eg-testimonial-avatar"
                src={MikeCiunci}
                alt="Mike Ciunci's client testimonial"
              />
              <Card className="eg-testimonial">
                <CardBody>
                  <h6 className="text-center">Amy Vinciguerro & Mike Ciunci</h6>
                  <p className="text-center eg-sub-title">
                    Mike Ciunci | Keller Williams Realty
                  </p>
                  <p>
                    Tyler is absolutely fantastic to work with. We work with him
                    for video editing, website, and social media design, and he
                    always goes out of his way to offer a quality product in a
                    very timely fashion. He is responsive, talented and an
                    absolute pleasure to work with!
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
