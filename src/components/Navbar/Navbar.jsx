import React, { useState } from "react"
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"

const Navbar = () => {
  const [sideDrawer, sideDrawerOpen] = useState(false)

  const drawerToggleClickHandler = () => {
    sideDrawerOpen(sideDrawer => !sideDrawer)
  }

  return (
    <>
      <Toolbar
        isOpen={sideDrawer}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawer} />
    </>
  )
}

export default Navbar
