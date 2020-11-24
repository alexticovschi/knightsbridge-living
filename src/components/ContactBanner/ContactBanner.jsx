import React from "react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

import "./contactBanner.scss"

const ContactBanner = () => {
  return (
    <div className="grid-container">
      <div className="contact-banner">
        <h1 className="contact-banner__title">Get In Touch</h1>
        <p className="contact-banner__info">
          <span>We’re Here To Answer Your Questions.</span> Have a question? We
          would love to hear from you. Contact us and get your dream flat today.
          Get in touch by phone or email and our friendly Leasing team can help
          with any questions you have and arrange a type of viewing that suits
          you.
        </p>
        <p className="contact-banner__info-tel">
          Call us on{" "}
          <span className="contact-banner__telephone">020 3361 1497</span>.
        </p>
        <div className="contact-banner__social-block">
          <h5 className="contact-banner__social-block__title">Follow Us</h5>
          <ul className="contact-banner__social-links">
            <li className="contact-banner__social-item">
              <a
                className="contact-banner__social-link"
                href="https://www.instagram.com/"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="contact-banner__social-item">
              <a
                className="contact-banner__social-link"
                href="https://twitter.com/"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="contact-banner__social-item">
              <a
                className="contact-banner__social-link"
                href="https://en-gb.facebook.com/"
              >
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
