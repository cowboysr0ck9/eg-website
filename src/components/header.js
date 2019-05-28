import React from "react"
import { Link } from "gatsby"
import EadsGraphicLogo from "../images/EadsGraphic-main-logo.svg"
import EadsGraphicLogoWhite from "../images/EadsGraphic-main-logo-white.svg"
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
    const globalHeader = document.getElementById("eg-header")
    const egLogo = document.getElementById("egLogo")
    const jsLinks = document.getElementsByClassName("jsLink")
    const linkCount = jsLinks.length
    let scrollY = window.scrollY

    let i = 0
    if (scrollY > 50) {
      globalHeader.classList.add("header-scrolled")
      egLogo.setAttribute("src", EadsGraphicLogo)

      for (i; i < linkCount; i++) {
        jsLinks[i].style.color = "#1F2025"
      }
    } else {
      globalHeader.classList.remove("header-scrolled")
      egLogo.setAttribute("src", EadsGraphicLogoWhite)

      for (i; i < linkCount; i++) {
        jsLinks[i].style.color = "white"
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollStyle)
  }

  render() {
    return (
      <header id="eg-header">
        <Container>
          <Navbar expand="md">
            <Link className="navbar-brand" to="/">
              <img
                src={EadsGraphicLogoWhite}
                alt="EadsGraphic Official Logo"
                id="egLogo"
              />
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
                  <Link className="nav-link jsLink" to="/about-us">
                    About
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link jsLink" to="/services">
                    Services
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link jsLink" to="/our-work">
                    Work
                  </Link>
                </NavItem>

                <NavItem>
                  <Link className="nav-link jsLink" to="/contact-us">
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
