import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/carouselImages/carousel1.jpg";
import carousel2 from "../../assets/carouselImages/carousel2.jpg";
import carousel3 from "../../assets/carouselImages/carousel3.jpg";
import carousel4 from "../../assets/carouselImages/carousel4.jpg";
import './Home.css';
import { FaDatabase, FaGlobe, FaDesktop, FaMobileAlt, FaReact, FaRobot, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='py-5 my-5'>
            <div className=''>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='display-6'>Be A Pro Coder With Code Monkey</h3>
                            <p className='fs-5 mb-5 pb-3'>Build skills by daily problem solving with real time support.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className='display-5'>1K+ Courses & Problem Solving</h3>
                            <p className='fs-5 mb-5 pb-3'>Examine yourself with daily updates questionnaire. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className='display-5'>Lifetime Access</h3>
                            <p className='fs-5 mb-5 pb-3'>Get to here anytime to check materials with updates.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <Container className='get-started-container mt-5 pb-5 d-flex flex-column flex-lg-row flex-md-column'>
                <div className='get-started text-start my-5'>
                    <p className='display-6 text-start p-4'>Get Started with Code Monkey Today to get a
                        <span className='text-primary fw-normal'> flat 50%</span> discount today.</p>
                    <Button className='ms-4 px-5 py-3 fs-3 my-bg-red border-0'>Get Started</Button>
                </div>
                <div className='text-center me-5'>
                    <div className='advertise-panel d-flex align-items-center my-5'>
                        <p className='display-3 text-end mt-4 fw-normal'>
                            Learn Coding Online With Professional Instructors
                        </p>
                    </div>
                </div>

            </Container>
            <div>
                <h4 className='display-3 py-3 my-5 pb-5'>Join us to explore</h4>
            </div>
            <Container className='learn-with-us-container d-flex flex-column flex-sm-column flex-md-column flex-lg-row mb-5 mt-5'>
                <div className='text-start '>
                    <p className='fs-4 fw-normal text-start p-4 me-4 mt-3'>A programming class can teach you enough to mock up a very basic website design
                        or an app you have an idea for.
                        Or, in certain industries, coding chops can impress the hiring manager even if it’s not a part of your job.
                        A little bit of knowledge lets them know that you understand current trends, that you’re proactive and curious,
                        that you’ll be able to communicate with colleagues and clients about the technical aspects, and that just
                        maybe you might be able to pitch in on bigger projects.</p>
                    <Link to='/courses'>
                        <Button className='ms-4 px-5 py-2 fs-3 pt-3 border-0 my-bg-red'>
                            <p className='text-nowrap'>Courses  <FaArrowRight></FaArrowRight></p>
                        </Button>
                    </Link>
                </div>

                <Container className='options-container mt-5 pb-5' >
                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaDatabase></FaDatabase>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>DBMS Programming</h5>
                            <p>Build Your Own DBMS with real time help sessions and our expart tutors.</p>
                        </div>
                    </div>

                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaGlobe></FaGlobe>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>Data Science</h5>
                            <p>Be the leader of data science and analytics. Get hired instantly.</p>
                        </div>
                    </div>

                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaReact></FaReact>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>Web Design</h5>
                            <p>Design real life industry applications with the leading libraries and get hired. </p>
                        </div>
                    </div>

                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaDesktop></FaDesktop>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>Desktop App</h5>
                            <p>Learn aboy desktop applications and make your own with Code Monkey.</p>
                        </div>
                    </div>

                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaMobileAlt></FaMobileAlt>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>Mobile App</h5>
                            <p>Code Monkey helps you to master android and ios platforms and using them.</p>
                        </div>
                    </div>

                    <div className='d-flex flex-row border border-3 ps-2 pe-5 pt-3 options-div'>
                        <div className='fs-3 options-card pt-1'>
                            <FaRobot></FaRobot>
                        </div>
                        <div className='text-start d-flex flex-column justify-content-center'>
                            <h5>CNN</h5>
                            <p>Deep learning and Concolutional Neural Networks is the future. Join us to get Started.</p>
                        </div>
                    </div>
                </Container>
            </Container>


        </div>
    );
};

export default Home;