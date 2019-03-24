import React from "react"
import { navigateTo } from "gatsby-link"
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
      <section className="py-96 bg-light">
        <Container>
          <Row>
            <Col className="col-12 mx-auto">
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
                  <Label>Name:</Label>
                  <Input
                    size="lg"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Email:</Label>
                  <Input
                    size="lg"
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Message:</Label>
                  <Input
                    size="lg"
                    type="textarea"
                    name="message"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
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
