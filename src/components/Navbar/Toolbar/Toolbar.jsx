import React from "react"
import { Link } from "gatsby"

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/">
            <span className="toolbar__logo--first">Knightsbridge</span>
            <span className="toolbar__logo--second">Living</span>
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
          <li className="toolbar__navigation-item find-a-home btn-primary">
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
