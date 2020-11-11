import React from "react"
import { Link } from "gatsby"
import "./SideDrawer.scss"

const SideDrawer = ({ show }) => {
  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <Link to="/buildings">Buildings</Link>
        </li>
        <li>
          <Link to="/knightsbridge">Knightsbridge</Link>
        </li>
        <li>
          <Link to="/living-with-us">Living With Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/apartments">Find A Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
