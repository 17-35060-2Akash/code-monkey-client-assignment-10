import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';
import { FaStar, FaClock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, image, ratings, duration } = course;

    const navigate = useNavigate();

    const handleClickingCard = () => {
        navigate(`/courses/${id}`);
    }

    return (
        <Col>
            <Card onClick={() => handleClickingCard()} className="bg-dark text-white border border-0 rounded-4 course-card">
                <Card.Img src={image} alt="Card image" className='img-bg' />
                <Card.ImgOverlay className='card-writings flex-grow-1 align-items-end'>
                    <Card.Title className='card-text flex-grow course-name fs-4 fw-normal '>{name}</Card.Title>

                    <section className='d-flex align-items-center justify-content-between mt-1'>
                        <Card.Title className='d-flex align-items-center course-name'>
                            <FaStar className='text-warning'></FaStar>
                            <span className='ps-1'>{ratings}</span>
                        </Card.Title>
                        <Card.Title className='d-flex align-items-center course-name'>
                            <FaClock></FaClock>
                            <span className='ps-1'>{duration}</span>
                        </Card.Title>
                    </section>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default Course;