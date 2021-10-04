
import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

import { Link } from "react-router-dom";
import Cards from '../Card/Card';


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data.slice(0, 4)))
    }, [])
    return (
        <div>

            <Carousel fade interval={1500}>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="image/first.jpg"
                        alt="First slide"
                        width="1500px"
                        height="800px"

                    />
                    <Carousel.Caption>
                        <h3>Class Example</h3>
                        <p>You can come if you want!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="image/second.jpg"
                        alt="second slide"
                        width="1500px"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>Class Example</h3>
                        <p>You can come if you want!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="image/third.jpg"
                        alt="third slide"
                        width="1500px"
                        height="800px"
                    />

                    <Carousel.Caption>
                        <h3>Class Example</h3>
                        <p>You can come if you want!!</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
            <h1>Our Courses</h1>
            <div className="container">

                <Row xs={3} md={4} className="g-4 mt-4">
                    {
                        courses.map(course => <Cards courses={course}>
                        </Cards>)
                    }
                </Row>
            </div >
            <Link to="/service">
                <Button variant="warning" >
                    View More
                </Button>
            </Link>
        </div>
    );
};

export default Home;

