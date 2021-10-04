import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from '../Card/Card';




const Service = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/course_data_api.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="container">

            <Row xs={3} md={4} className="g-4 mt-4 mb-4">
                {
                    courses.map(course => <Card courses={course}>


                    </Card>)
                }
            </Row>


        </div >
    );
};

export default Service;