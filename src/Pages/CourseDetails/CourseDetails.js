import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaFilePdf } from "react-icons/fa";
import { FaStar, FaClock, FaArrowRight } from "react-icons/fa";
import './CourseDetails.css';
import { Button, Container } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, image, details, ratings, duration, curriculam } = course;
    // const [open, setOpen] = useState(false);

    // console.log(course);
    return (
        <div className=''>
            <Card className="bg-dark text-white details-card d-none d-sm-block d-md-block d-lg-block" >
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay className='card-writings'>
                    <div>
                        <div className='fs-3 pt-2 mt-2 me-2 d-flex align-items-center justify-content-end' title='Download PDF'>
                            <FaFilePdf className='pdf-btn display-6'></FaFilePdf>
                        </div>

                        <p className='course-title'>{name}</p>

                        <div className='d-flex align-items-center justify-content-between mt-1 '>
                            <Card.Title className='d-flex align-items-center course-ratings '>
                                <FaStar className='text-warning'></FaStar>
                                <span className='ps-1'>{ratings}</span>
                            </Card.Title>
                            <Card.Title className='d-flex align-items-center course-ratings '>
                                <FaClock></FaClock>
                                <span className='ps-1'>{duration}</span>
                            </Card.Title>
                        </div>
                        <Card.Text className='card-details'>
                            {details}
                        </Card.Text>

                        <div className='d-flex justify-content-around align-items-center flex-row flex-md-column flex-lg-column curriculam-details {
    /* padding: 10px 0; */
    font-size: 1.8vw;

}'>
                            <div className='text-start'>
                                {
                                    curriculam.map((cur, idx) => <li className='py-1'
                                        key={idx}>{cur}</li>)
                                }
                            </div>


                            <div className=' flex-grow-1 align-items-center btn-container'>
                                <Link to={`/checkout/${id}`}>
                                    <Button className='my-bg-pink premium-btn fs-2 px-4 py-3'>Get Premium Access <FaArrowRight></FaArrowRight></Button>

                                </Link>
                            </div>
                        </div>


                        <Card.Footer>
                        </Card.Footer>
                    </div>
                </Card.ImgOverlay>
            </Card>

            <Container className='small-screen-card d-block d-sm-none d-md-none d-lg-none d-flex justify-content-around align-items-center'>
                <Card className='border-0 me-1' style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className='display-6 mt-3'>{name}</Card.Title>
                        <Card.Text className='mt-5'>
                            {details}
                        </Card.Text>
                        <div>
                            <div className='text-start py-2 pt-3'>
                                {
                                    curriculam.map((cur, idx) => <li className=''
                                        key={idx}>{cur}</li>)
                                }
                            </div>
                        </div>
                        <div className=' flex-grow-1 align-items-center '>

                            <Link to={`/checkout/${id}`}>
                                <Button className='my-bg-pink premium-sm-btn px-4 py-3 fs-5 my-4'>Get Premium Access <FaArrowRight></FaArrowRight></Button>

                            </Link>
                        </div>

                    </Card.Body>
                </Card>
            </Container>

        </div >
    );
};

export default CourseDetails;



