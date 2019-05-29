import React from "react"
import { Row, Col, Container } from "reactstrap"
import { Link } from "gatsby"
import IndividiualService from "./individiualService"
import ServicesData from "../data/ServicesData"
export default class OurServices extends React.Component {
  render() {
    return (
      <section className="pt-5" id="eg-our-services">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} className="text-center text-primary">
              <div className="h1-title-accent" />
              AREAS OF INTEREST
            </Col>
            <Col xs={12} className="text-center">
              <h1 className="mb-5">Skills and Services</h1>
            </Col>

            {ServicesData.map(x => {
              return (
                <IndividiualService
                  key={x.id}
                  title={x.title}
                  description={x.description}
                  link={x.link}
                  linkText={x.linkText}
                  className={x.className}
                />
              )
            })}

            <Col xs={12} className="text-center">
              <Link to="/services" className="my-5 btn btn-primary">
                More Info
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
