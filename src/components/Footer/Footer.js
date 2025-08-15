//
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer-distributed"
        style={{ width: "100%", height: "300px" }}
      >
        <div className="footer-left">
          <div style={{ display: "flex" }}>
            <img
              src="https://i.ibb.co.com/zV8PPNY3/logo-learn-and-grow.png"
              width="50px"
              height="50px"
              alt=""
            />
            <h3>
              Learn <span>&</span> Grow
            </h3>
          </div>

          <p className="footer-links">
            <Link to="/home">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/service">Service</Link>
            <Link to="/controller">Director</Link>
          </p>

          <p className="footer-company-name">Learn & Grow © 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <FontAwesomeIcon className="icon" icon={faMapMarked} size="2x" />
            <p className="d-inline-block">
              <span>Dhanmondi, street-27</span> Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <FontAwesomeIcon className="icon" icon={faPhone} size="2x" />
            <p>+8801111111111</p>
          </div>

          <div>
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="2x" />
            <p>
              <Link to="">learnandgrow@company.com</Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about" style={{ textAlign: "justify" }}>
            <span>About Us</span>
            Knowledge is power. Our team currently serves in Bangladesh with
            dedicated teachers, aiming to grow our community globally.
          </p>

          <div className="footer-icons">
            <FontAwesomeIcon className="icon" icon={faFacebook} size="3x" />
            <FontAwesomeIcon className="icon" icon={faInstagram} size="3x" />
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="3x" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
