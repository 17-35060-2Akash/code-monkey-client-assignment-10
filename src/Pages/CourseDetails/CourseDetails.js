import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaFilePdf } from "react-icons/fa";
import { FaStar, FaClock, FaArrowRight } from "react-icons/fa";
import './CourseDetails.css';
import { Button } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, image, details, ratings, duration, curriculam } = course;
    // const [open, setOpen] = useState(false);

    console.log(course);
    return (
        <div className=''>
            <Card className="bg-dark text-white details-card" >
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay className='card-writings '>
                    <div className='fs-3 pt-2 mt-2 me-2 d-flex align-items-center justify-content-end' title='Download PDF'>
                        <FaFilePdf className='pdf-btn display-6'></FaFilePdf>
                    </div>
                    <Card.Title className='display-6 mb-4 fw-normal course-title'>{name}</Card.Title>
                    <Card.Text className='d-flex align-items-center justify-content-between mt-1'>
                        <Card.Title className='d-flex align-items-center course-name'>
                            <FaStar className='text-warning'></FaStar>
                            <span className='ps-1'>{ratings}</span>
                        </Card.Title>
                        <Card.Title className='d-flex align-items-center course-name'>
                            <FaClock></FaClock>
                            <span className='ps-1'>{duration}</span>
                        </Card.Title>
                    </Card.Text>
                    <Card.Text className=''>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-center flex-row flex-md-column flex-lg-column '>
                        <Card.Text className='text-start'>
                            {
                                curriculam.map((cur, idx) => <li className='py-1'
                                    key={idx}>{cur}</li>)
                            }
                        </Card.Text>
                        <div className='d-flex justify-content-center align-items-top btn-container'>
                            <Link to={`/checkout/${id}`}>
                                <Button className='my-bg-pink premium-btn'>Get Premium Access <FaArrowRight></FaArrowRight></Button>

                            </Link>
                        </div>
                    </div>


                    <Card.Footer>
                    </Card.Footer>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default CourseDetails;



