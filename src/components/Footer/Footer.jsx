import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="footer__container">
          <div className="footer__logo">
            <span className="footer__logo--first">Knightsbridge</span>
            <span className="footer__logo--second">Living</span>
          </div>
          <ul className="footer__links">
            <li>
              <Link to="/buildings" className="footer__link">
                Buildings
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/knightsbridge">
                Knightsbridge
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/living-with-us">
                Living With Us
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="footer__link" to="/terms-and-conditions">
                T&C
              </Link>
            </li>
          </ul>
          <ul className="footer__social-links">
            <li>
              <a className="footer__social-icon" href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                className="footer__social-icon"
                href="https://www.instagram.com/"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="footer__social-icon"
                href="https://en-gb.facebook.com/"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
