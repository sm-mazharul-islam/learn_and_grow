import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ width: "100%", height: "80px" }}
      >
        <Container>
          <Navbar.Brand className="p-2  " href="#home">
            Explore Knowledge
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto p-4">
              <NavLink
                to="/home"
                className="p-2  "
                style={{
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="p-2  "
                style={{
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className="p-2  "
                style={{
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Service
              </NavLink>
              <NavLink
                to="/controller"
                className="p-2  "
                style={{
                  textDecoration: "none",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Director
              </NavLink>
            </Nav>
            <Nav></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
