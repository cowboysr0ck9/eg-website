import React from "react"
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

import Testimonials from "../data/Testimonials"

export default class ClientTestimonials extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === Testimonials.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? Testimonials.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = Testimonials.map(x => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={x.id}
        >
          <img src={x.avatar} alt={x.name} className="eg-testimonial-avatar" />
          <Card className="eg-testimonial">
            <CardBody>
              <h6 className="text-center fs-20">{x.name}</h6>
              <p className="text-center eg-sub-title">{x.company}</p>
              <p className="eg-testimonial-p">{x.description}</p>
            </CardBody>
          </Card>

          <CarouselCaption />
        </CarouselItem>
      )
    })
    return (
      <section className="bg-light py-96" id="eg-testimonials">
        <Container fluid>
          <Row>
            <Col xs={12}>
              <p className="mb-0 text-primary text-center">
                WHAT CLIENTS HAVE TO SAY
              </p>
              <h1 className="text-center">Client Testimonials</h1>
            </Col>
            <Col xs={12}>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={Testimonials}
                  activeIndex={activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={this.previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={this.next}
                />
              </Carousel>
            </Col>

            {/* <img
                className="eg-testimonial-avatar"
                src={JamieErfle}
                alt="Jamie Erfle's client testimonial"
              /> */}
            {/* <Card className="eg-testimonial">
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
              </Card> */}
          </Row>
        </Container>
      </section>
    )
  }
}
