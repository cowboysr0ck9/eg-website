import React from "react"
import { navigateTo } from "gatsby-link"
import { Link } from "gatsby"
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section className="py-5 bg-light text-dark">
        <Container>
          <Row>
            <Col xs={12} sm={8} className="mx-auto">
              <Form
                name="contact"
                method="post"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <Input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <Label>
                    Don’t fill this out:{" "}
                    <Input name="bot-field" onChange={this.handleChange} />
                  </Label>
                </p>

                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    size="lg"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>First Name</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Last Name</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    size="lg"
                    type="tel"
                    name="phoneNumber"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <Input
                    size="lg"
                    type="textarea"
                    name="message"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <small>
                    Need NDA first? E-mail us at{" "}
                    <a
                      href="mailto:eadsgraphics@gmail.com"
                      className="text-dark"
                    >
                      eadsgraphics@gmail.com
                    </a>
                  </small>
                </FormGroup>

                <FormGroup>
                  <small>
                    EadsGraphic needs the contact information you provide to us
                    to contact you about our products and services. You may
                    unsubscribe from these communications at anytime. For
                    information on how to unsubscribe, as well as our privacy
                    practices and commitment to protecting your privacy, check
                    out our{" "}
                    <Link to="/privacy-policy" className="text-dark">
                      Privacy Policy
                    </Link>
                    .
                  </small>
                </FormGroup>

                <FormGroup className="d-flex justify-content-end">
                  <Button color="primary" type="submit">
                    Send Message
                  </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default ContactForm
