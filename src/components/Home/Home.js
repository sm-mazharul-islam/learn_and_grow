// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// const Home = () => {
//     return (
//         <div className="container">
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100 mt-4"
//                         src="https://rigorousthemescom-ebizon.netdna-ssl.com/blog/wp-content/uploads/2020/08/screely-1597058704114-1.png"
//                         alt="First slide"
//                     />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block  w-100 mt-4"
//                         src="https://digital-photography-school.com/wp-content/uploads/2021/05/colorful-landscape-photography-1002.jpg"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>

//             </Carousel>
//         </div>
//     );
// };

// export default Home;
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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

