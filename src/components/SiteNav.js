import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// import { NavDropdown, MenuItem } from "react-bootstrap";
import "../css/site-nav.css";

function SiteNav(props) {
  return <div id="navbarWrapper">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#headerWrapper" id="brand">
              Chance Peragine
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#aboutMeLoc" className="navLink">
              About Me
            </NavItem>
          <NavItem eventKey={2} href="#myProjectsLoc" className="navLink">
              My Projects
            </NavItem>
            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          <NavItem eventKey={1} href="#skillsLoc" className="navLink">
              Skills
            </NavItem>
          <NavItem eventKey={2} href="#contactMeLoc" className="navLink">
              Contact Me
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>;
}
export default SiteNav;
