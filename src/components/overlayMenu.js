import React, { Component } from "react"
import { Link } from "gatsby"

// Social Icons
import BehanceSocial from "../images/social-icons/behance.svg"
import YoutubeSocial from "../images/social-icons/youtube.svg"
import InstagramSocial from "../images/social-icons/instagram.svg"
import DribbbleSocial from "../images/social-icons/dribbble.svg"
import GithubSocial from "../images/social-icons/github.svg"

export default class OverlayMenu extends Component {
  /* Close */
  closeNav() {
    document.getElementById("mobileNav").style.display = "none"
  }
  render() {
    return (
      <div id="mobileNav" class="overlay">
        {/* eslint-disable-next-line */}
        <a href={"#"} class="closebtn" onClick={this.closeNav}>
          &times;
        </a>
        <div class="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/our-work">Work</Link>
          <Link to="/contact-us">Contact</Link>
          {/* Social Icons */}
          <div className="mt-5 d-flex justify-content-center eg-social-hero">
            <a href="https://www.youtube.com/channel/UCzSqOX4lcdU9R-s6qjKQWqQ/featured">
              <img
                src={YoutubeSocial}
                height={32}
                alt="Follow EadsGraphic on YouTube"
              />
            </a>

            <a href="https://www.behance.net/tylereads">
              <img
                src={BehanceSocial}
                height={32}
                alt="Follow EadsGraphic on BeHance"
              />
            </a>
            <a href="https://www.instagram.com/eadsgraphic/?hl=en">
              <img
                src={InstagramSocial}
                height={32}
                alt="Follow EadsGraphic on Instagram"
              />
            </a>
            <a href="https://dribbble.com/eadsgraphic">
              <img
                src={DribbbleSocial}
                height={32}
                alt="Follow EadsGraphic on Dribbble"
              />
            </a>

            <a href="https://github.com/EadsGraphic">
              <img
                src={GithubSocial}
                height={32}
                alt="Follow EadsGraphic on GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
