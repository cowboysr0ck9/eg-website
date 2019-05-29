import React, { Component } from "react"
import { Link } from "gatsby"
import { Col } from "reactstrap"

export default class IndividiualService extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { title, description, link, linkText, bgColor } = this.props
    return (
      <Col xs={12} sm={12} className="my-3">
        <div className="services-wrapper">
          <div className="eg-service-block">
            <div
              className="single-service-icon animated pulse"
              style={{ backgroundColor: `${bgColor}` }}
            >
              <img src={"#"} alt={"Test"} height={24} />
            </div>

            <p className="fs-20 mb-1 fw-400">{title}</p>
            <p className="subtitle">{description}</p>
            <Link className={"btn-link fs-14"} to={link}>
              {linkText}
            </Link>
          </div>
        </div>
      </Col>
    )
  }
}
