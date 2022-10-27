import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FaFilePdf } from "react-icons/fa";
import { FaStar, FaClock, FaArrowRight } from "react-icons/fa";
import './CourseDetails.css';
import { Button, Container } from 'react-bootstrap';

import jsPDF from 'jspdf';

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, image, details, ratings, duration, curriculam } = course;
    // const [open, setOpen] = useState(false);

    const generatePDF = () => {
        const doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.querySelector('#card-to-pdf'), {
            callback: function (pdf) {
                const pageCount = doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save("mypdf.pdf");
            }
        });


    };

    return (
        <div className=''>
            <Card className="bg-dark text-white details-card d-none d-sm-block d-md-block d-lg-block" >
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay className='card-writings' >
                    <div>
                        <div className='fs-3 pt-2 mt-2 me-2 d-flex align-items-center justify-content-end' title='Download PDF'>
                            <FaFilePdf onClick={generatePDF} className='pdf-btn display-6'></FaFilePdf>
                        </div>

                        <p className='course-title'>{name}</p>

                        <div className='d-flex align-items-center justify-content-between  course-ratings'>
                            <Card.Title className='d-flex align-items-center '>
                                <FaStar className='text-warning rating-duration-text'></FaStar>
                                <span className='ps-1 rating-duration-text'>{ratings}</span>
                            </Card.Title>
                            <Card.Title className='d-flex align-items-center rating-duration-text'>
                                <FaClock className='text-info me-2 rating-duration-text'></FaClock>
                                <span className='ps-1 rating-duration-text'>{duration}</span>
                            </Card.Title>
                        </div>
                        <Card.Text className='card-details'>
                            {details}
                        </Card.Text>

                        <div className='d-flex justify-content-around align-items-center flex-row flex-md-column flex-lg-column curriculam-details '>
                            <div className='text-start'>
                                {
                                    curriculam.map((cur, idx) => <li className='py-1'
                                        key={idx}>{cur}</li>)
                                }
                            </div>


                            <div className=' flex-grow-1 align-items-center btn-container'>
                                <Link to={`/checkout/${id}`}>
                                    <Button className='my-bg-pink premium-btn px-5 py-3  d-flex align-items-center justify-content-center'><span className='rating-duration-text me-2'>Premium Access</span> <span><FaArrowRight className='rating-duration-text'></FaArrowRight></span></Button>

                                </Link>
                            </div>
                        </div>


                        <Card.Footer>
                        </Card.Footer>
                    </div>
                </Card.ImgOverlay>
            </Card>



            <Container className='small-screen-card d-block d-sm-none d-md-none d-lg-none d-flex justify-content-around align-items-center'>
                <Card className='border-0 me-1' style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={image} />
                    <Card.Body id='card-to-pdf'>
                        <div className='fs-3 pt-2  d-flex align-items-center justify-content-end' title='Download PDF'>
                            <FaFilePdf onClick={generatePDF} className='pdf-btn display-6 text-danger'></FaFilePdf>
                        </div>
                        <Card.Title className='display-6 mt-3 fw-normal'>{name}</Card.Title>

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

                        <Card.Text className='mt-2'>
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
                                <Button className='my-bg-pink px-4 py-2 fs-6 my-4'>Premium Access <FaArrowRight></FaArrowRight></Button>

                            </Link>
                        </div>

                    </Card.Body>
                </Card>
            </Container>
            <div className='d-none'>
                <Card className="text-center rounded-0 ">
                    <Card.Header className=''>
                        <Card.Title className=''>{name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className=''>
                            Course Duration: {duration}
                        </Card.Text>

                        <Card.Text className=''>
                            {details}
                        </Card.Text>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='text-start py-2 pt-3'>
                                {
                                    curriculam.map((cur, idx) => <li className=''
                                        key={idx}>{cur}</li>)
                                }
                            </div>
                        </div>

                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>

        </div >
    );
};

export default CourseDetails;



