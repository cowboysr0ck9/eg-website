import React from "react";
import { Button, Row, Col, Container } from "reactstrap"

export default class CallToAction extends React.Component {
  render() {
    return (
      <section className="py-96 " id="eg-cta">
        <Container>
          <Row>
            <Col>
              <p className="h1">What are you waiting for?</p>
              <p id="eg-cta-p">
                Provide us with your contact information and one of our team
                members will reach out to you with the next steps.
              </p>
              <Button id="eg-main-cta-btn" color="primary">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
