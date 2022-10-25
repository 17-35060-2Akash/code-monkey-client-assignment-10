import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <div>
            <div className='courses-page-container'>
                <ListGroup className='courses-sidebar bg-light'>
                    {
                        courses.map(course =>

                            <ListGroup.Item className='course-categories text-start ps-3 mb-3 d-flex align-items-center justify-content-center'
                                key={course.id}>
                                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            </ListGroup.Item>)
                    }
                </ListGroup>
                <div >
                    <h2 className='py-5 mt-4 display-4 home-title'>Check All The Courses here<br />and Start RightAway</h2>
                    <Row xs={1} sm={1} md={2} lg={3} className='courses-cards g-4 px-5 py-4 pb-5 mb-5 '>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}></Course>)
                        }
                    </Row>
                </div>
            </div>


        </div >
    );
};

export default Courses;