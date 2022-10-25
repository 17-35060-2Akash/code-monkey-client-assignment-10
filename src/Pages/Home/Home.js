import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../assets/carouselImages/carousel1.jpg";
import carousel2 from "../../assets/carouselImages/carousel2.jpg";
import carousel3 from "../../assets/carouselImages/carousel3.jpg";
import carousel4 from "../../assets/carouselImages/carousel4.jpg";

const Home = () => {
    return (
        <div>
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


        </div>
    );
};

export default Home;