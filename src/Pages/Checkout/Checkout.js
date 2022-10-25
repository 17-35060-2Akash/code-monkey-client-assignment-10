import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const course = useLoaderData();
    // console.log(course)
    const { name, duration, classType, classesperweek, exams, guidence, course_fee } = course;
    return (
        <div>
            <Container className='checkout-container'>
                <Card className="text-center checkout-card">

                    <Card.Header className='pb-4 pt-4 ' style={{ backgroundColor: '#ff1f59' }}>
                        <p className='display-6 text-white'>{name}</p>
                    </Card.Header>
                    <Card.Body className='text-start fs-5 py-5'>
                        <Card.Text>Class Type: <span className='fw-semibold'>{classType}.</span></Card.Text>
                        <Card.Text>Classes: <span className='fw-semibold'>{classesperweek}.</span></Card.Text>
                        <Card.Text>Total Duration: <span className='fw-semibold'>{duration}.</span></Card.Text>
                        <Card.Text>Assesments: <span className='fw-semibold'>{exams}.</span></Card.Text>
                        <Card.Text>Consulting: <span className='fw-semibold'>{guidence}.</span></Card.Text>

                    </Card.Body>
                    <Card.Footer className='pb-4 pt-3' style={{ backgroundColor: '#ff1f59' }}>
                        <Card.Text className='fs-3 text-white'>Course Fee: <span className='fw-semibold'> {course_fee}$</span></Card.Text>

                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default Checkout;


{/* <Card className="text-center">
                
                <Card.Header className='pb-4' style={{ backgroundColor: '#ff1f59' }}>
                    <div className='fs-3 py-2 mt-2 me-2 d-flex align-items-center justify-content-end' title='Download PDF'>
                        <FaFilePdf className='pdf-btn display-6'></FaFilePdf>
                    </div>
                    <div>
                        
                    </div>


                </Card.Header>
                <Card.Body>


                </Card.Body>
                <Card.Footer >

                </Card.Footer>
            </Card> */}