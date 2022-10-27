import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Course from '../Course/Course';
import './Courses.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Courses = () => {
    const courses = useLoaderData();

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <div className='courses-page-container'>
                <ListGroup className={`bg-${theme} rounded-0 `}>
                    {
                        courses.map(course =>

                            <ListGroup.Item className='course-categories text-start ps-3 mb-3 fs-6 d-flex align-items-center justify-content-center'
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