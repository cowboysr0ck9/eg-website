import React from "react"
import { Link } from "gatsby"
import EadsGraphicLogo from "../images/EadsGraphic-main-logo.svg"
import { Collapse, Navbar, Nav, NavItem, Container } from "reactstrap"
import HambugerIcon from "../images/hamburger-menu.svg"

export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  scrollStyle() {
    const globalHeader = document.getElementById("jsx-header")
    let scrollY = window.scrollY
    if (scrollY > 50) {
      globalHeader.classList.add("header-scrolled")
    } else {
      globalHeader.classList.remove("header-scrolled")
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollStyle)
  }

  render() {
    return (
      <header id="jsx-header">
        <Container>
          <Navbar expand="md">
            <Link className="navbar-brand" to="/">
              <img src={EadsGraphicLogo} alt="EadsGraphic Official Logo" />
            </Link>

            <img
              src={HambugerIcon}
              className="navbar-toggler"
              onClick={this.toggle}
              alt="Eadsgraphic mobile menu"
              height={32}
            />

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto align-items-center" navbar>
                <NavItem>
                  <Link className="nav-link" to="/about-us">
                    About
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/our-work">
                    Work
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link" to="/contact-us">
                    Contact
                  </Link>
                </NavItem>

                <NavItem>
                  <Link
                    id="nav-cta-btn"
                    className="btn btn-primary nav-link"
                    to="/contact-us"
                  >
                    Free Quote
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}
