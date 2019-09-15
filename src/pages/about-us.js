import React, { Component } from "react"

import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import CallToAction from "../components/callToAction"

import twins from "../images/matt-tyler-eads.png"

// Resume Info
import {
  innovationLab,
  uiTeam,
  headStrong,
  hcphub,
  eadsGraphic,
} from "../data/ResumeInfo"

// Contact Form
import ContactFrom from "../components/contact-form"

export default class AboutUsPage extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: "1",
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <section>
          <Header siteTitle={"EadsGraphic"} />
        </section>

        <section className="twins">
          <Container>
            <Row>
              <Col lg={6}>
                <h1 className="twin-title pt-5">
                  Time to hear
                  <br />
                  our story?
                </h1>
                <p className="mt-5 twin-lead">
                  My brother and I created EadsGraphic back in 2012 with an idea
                  to design and develop an iOS game called SkyDrop. After a
                  successful launch we ventured into graphic design and
                  eventually development. The power of social media has allowed
                  us to showcase our unique talents and connect with a wide
                  variety of clients.
                </p>
              </Col>
              <Col lg={6} className="d-flex align-items-end">
                <img
                  src={twins}
                  alt={"Matt and Tyler Eads"}
                  className={"img-fluid"}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Create Tabs Section */}
        <section>
          <Container>
            <Row>
              <Col lg={12}>
                <Nav tabs>
                  <NavItem className="twin-select">
                    <NavLink
                      className={{
                        active: this.state.activeTab === "1",
                      }}
                      className="twin-link"
                      onClick={() => {
                        this.toggle("1")
                      }}
                    >
                      Tyler Eads
                    </NavLink>
                  </NavItem>
                  <NavItem className="twin-select">
                    <NavLink
                      className={{
                        active: this.state.activeTab === "2",
                      }}
                      className="twin-link"
                      onClick={() => {
                        this.toggle("2")
                      }}
                    >
                      Matt Eads
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </section>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {/* SEI Work Experience */}
            <section className="resume-work-section">
              <Container>
                <Row>
                  <Col lg={12} className={"mb-3"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <h5 className="mb-0 fw-500 text-primary">
                          SEI Investments
                        </h5>
                      </span>
                      <span className="d-block fw-500">Oaks, PA</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <small>
                          SEI Solutions Innovation Lab | Javascript Developer
                        </small>
                      </span>
                      <span className="d-block">
                        <small>July 2017 - September 2019</small>
                      </span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <ul className="experience-list">
                      {innovationLab.map((x, i) => {
                        return <li id={i}>{x.msg}</li>
                      })}
                    </ul>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <small>
                      SEI UI/UX Governance & Standards | UI/UX Developer
                    </small>
                    <ul className="experience-list">
                      {uiTeam.map((x, i) => {
                        return <li id={i}>{x.msg}</li>
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* EadsGraphic */}
            <section className="resume-work-section">
              <Container>
                <Row>
                  <Col lg={12} className={"mb-3"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <h5 className="mb-0 fw-500 text-primary">
                          EadsGraphic.com
                        </h5>
                      </span>
                      <span className="d-block fw-500">Pennsylvania</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <small>
                          Co-founder of freeelance creative development team
                        </small>
                      </span>
                      <span className="d-block">
                        <small>August 2012 - Present</small>
                      </span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <ul className="experience-list">
                      {eadsGraphic.map((x, i) => {
                        return <li id={i}>{x.msg}</li>
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* HeadStrong Lacrosse */}
            <section className="resume-work-section">
              <Container>
                <Row>
                  <Col lg={12} className={"mb-3"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <h5 className="mb-0 d-inline pr-2 fw-500 text-primary">
                          The Headstrong™ Foundation
                        </h5>
                        <small className="d-inline">
                          <em>501(c) non-profit </em>
                        </small>
                      </span>
                      <span className="d-block fw-500">Holmes, PA</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <small>Philanthropic volunteer </small>
                      </span>
                      <span className="d-block">
                        <small>Feb 2015 – Sep 2015</small>
                      </span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <ul className="experience-list">
                      {headStrong.map((x, i) => {
                        return <li id={i}>{x.msg}</li>
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* HCPHUB */}
            <section className="resume-work-section">
              <Container>
                <Row>
                  <Col lg={12} className={"mb-3"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <h5 className="mb-0 d-inline pr-2 fw-500 text-primary">
                          HCPHUB
                        </h5>
                      </span>
                      <span className="d-block fw-500">Malvern, PA</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <small>Business Analyst Intern</small>
                      </span>
                      <span className="d-block">
                        <small>May 2015 – Sep 2015</small>
                      </span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <ul className="experience-list">
                      {hcphub.map((x, i) => {
                        return <li id={i}>{x.msg}</li>
                      })}
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* Education */}
            <section className="resume-work-section pb-5">
              <Container>
                <Row>
                  <Col lg={12} className={"mb-3"}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <h5 className="mb-0 d-inline pr-2 fw-500 text-primary">
                          Saint Joseph's University
                        </h5>
                      </span>
                      <span className="d-block fw-500">Philadelphia, PA</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <span className="d-block">
                        <small>B.S. in Business Administration</small>
                      </span>
                      <span className="d-block">
                        <small>May 2017</small>
                      </span>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <ul className="experience-list">
                      <li>
                        Business Intelligence & Analytics | Major GPA 3.67
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>
          </TabPane>

          <TabPane tabId="2">
            <section>
              <Container>
                <Row>
                  <Col>
                    <h3 className="text-center py-4">
                      Matt's profile is coming soon!
                    </h3>
                  </Col>
                </Row>
              </Container>
            </section>
          </TabPane>
        </TabContent>
        <ContactFrom />
        <CallToAction />
      </Layout>
    )
  }
}
