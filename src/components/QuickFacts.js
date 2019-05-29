import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import quickFacts from "../data/QuickFacts"

export default class QuickFacts extends Component {
  render() {
    return (
      <section>
        <Container>
          <Row>
            {quickFacts.map(x => {
              return (
                <Col id={x.id} xs={12} sm={3} className="py-5 text-center">
                  <p className="h1 gradient-text-primary mb-0">{x.fact}</p>
                  <p className="text-dark fs-14">{x.description}</p>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
    )
  }
}
