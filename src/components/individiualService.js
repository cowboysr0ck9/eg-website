import React, { Component } from "react"
import { Link } from "gatsby"
import { Col, Row } from "reactstrap"
import Arrow from "../images/long-arrow-alt-right-solid.svg"

export default class IndividiualService extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { title, description, link, linkText, className } = this.props
    return (
      <Col xs={12} sm={12}>
        <Row className={`${className}`}>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={"#"} alt={"Test"} />
          </Col>

          <Col xs={12} sm={6}>
            <p className="fs-20 mb-1 fw-400">{title}</p>
            <p className="subtitle mt-3">{description}</p>
            <Link className={"btn-link fs-14"} to={link}>
              {linkText} <img src={Arrow} height={14} />
            </Link>
          </Col>
        </Row>
      </Col>
    )
  }
}
