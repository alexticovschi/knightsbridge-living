import React from "react"
import { Link } from "gatsby"
import logo from "../../../images/svg/logo1.svg"

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/">
            <img className="toolbar__logo--icon" src={logo} alt="" />
          </Link>
        </div>
        <div className="spacer" />
        <ul className="toolbar__navigation-items">
          <li className="toolbar__navigation-item">
            <Link to="/buildings">Buildings</Link>
          </li>
          <li className="toolbar__navigation-item">
            <Link to="/knightsbridge">Knightsbridge</Link>
          </li>
          <li className="toolbar__navigation-item">
            <Link to="/living-with-us">Living With Us</Link>
          </li>
          <li className="toolbar__navigation-item">
            <Link to="/about">About</Link>
          </li>
          <li className="toolbar__navigation-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="toolbar__navigation-item find-a-home">
            <Link to="/apartments">Find A Home</Link>
          </li>
        </ul>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </div>
      </nav>
    </div>
  </header>
)

export default Toolbar
