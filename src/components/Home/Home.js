import React from "react";
import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";
import Cards from "../Card/Card";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/course_data_api.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <Carousel fade interval={1500}>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="image/first.jpg"
            alt="First slide"
            width="1200px"
            height="500px"
          />
          <Carousel.Caption>
            <h3>Join us today. Let’s make it happen together!</h3>
            <p>Build Today. Shine Tomorrow!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="image/second.jpg"
            alt="second slide"
            width="1200px"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Be part of the journey. It’s your time to shine!</h3>
            <p>Small Steps. Big Changes!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="image/third.jpg"
            alt="third slide"
            width="1200px"
            height="500px"
          />

          <Carousel.Caption>
            <h3>Step in and explore. A new adventure awaits!</h3>
            <p>Dream Big. Start Now!!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Our Courses</h1>
      <div className="container">
        <Row xs={1} md={4} className="g-4 mt-4">
          {courses.map((course) => (
            <Cards courses={course}></Cards>
          ))}
        </Row>
      </div>
      <div className="m-4 p-4">
        <Link to="/service">
          <Button variant="warning">View More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
