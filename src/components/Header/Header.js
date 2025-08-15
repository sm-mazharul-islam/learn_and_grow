import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Container>
          <img
            src="https://i.ibb.co.com/zV8PPNY3/logo-learn-and-grow.png"
            width="10%"
            height="50px"
            alt=""
          />
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ background: "black" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="ms-auto ">
              <NavLink
                to="/home"
                className="p-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="p-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/service"
                className="p-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Service
              </NavLink>
              <NavLink
                to="/controller"
                className="p-2"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{
                  fontWeight: "bold",
                  color: "green",
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
