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
    const { title, description, link, linkText, className, img } = this.props
    return (
      <Col xs={12} sm={12} className={"my-3 my-sm-5"}>
        <Row className={`${className}`}>
          <Col
            xs={12}
            sm={6}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="circle-holder mb-3 mb-sm-0">
              <div className={"circle circle-1 animated infinite pulse"} />
              <div className={"circle circle-2 animated infinite pulse slow"} />
              <div className={"circle circle-3 animated infinite pulse slower"}>
                <img
                  src={img}
                  alt={title}
                  className={"service-image"}
                  height={24}
                />
              </div>
            </div>
          </Col>

          <Col xs={12} sm={6}>
            <p className="fs-20 mb-1 fw-400">{title}</p>
            <p className="subtitle mt-3">{description}</p>
            <Link className={"btn-link fs-14"} to={link}>
              {linkText} <img src={Arrow} alt={"arrow"} height={14} />
            </Link>
          </Col>
        </Row>
      </Col>
    )
  }
}
