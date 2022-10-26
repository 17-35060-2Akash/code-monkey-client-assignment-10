import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css';

const FAQ = () => {
    return (
        // blog section starts 
        <div className='container faq-container'>
            <h2 className='display-5 py-5 mt-5 fw-normal'>Frequently Asked Questions</h2>

            <Accordion defaultActiveKey="0" className='pt-5' alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <p className='fs-3 pt-3 ps-3'>What is the purpose of React Router?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <div className='text-start'>
                            <span className='fs-2 text-primary'>React Router</span> is a standard library for routing in React.
                            We simply couple a component with a specific route,
                            which makes our app.js <span className='fw-semibold text-success'>root component</span> which is the
                            <span className='fw-semibold '> clear, maintainable and readable</span>
                            . Without router, either the root component or state would be messy and hard to maintain.
                            <br /><br />
                            React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            Let us create a simple application to React to understand how the React Router works.
                            Using Routers it's possible to build an application that'll contain basically <strong>two parts</strong>.
                            One that is static in every instance and another part that can change.
                            <br /><br />
                        </div>
                        <span className='fs-2 text-primary'>React Router <span className='text-dark fs-4'>vs</span> Conventional Routing: </span>
                        <br /><br />
                        <ol className='text-start text-justified'>
                            <li>We can use only the features what you need from the library.
                                This makes it more lightweight and efficient.</li>
                            <br />
                            <li>We can decide how'll our route look like.
                                This makes it more user-friendly and easier to read.</li>
                            <br />
                            <li>We get the choice of combining multiple routes together.
                                This makes the routing process more flexible.</li>
                            <br />
                            <li>
                                routes can be loaded on-demand, rather than all at once.
                                This makes the application more responsive and efficient.
                            </li>
                            <br />

                        </ol>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <p className='fs-3 pt-3 ps-3'>How does Context API work?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <div className='text-start'>
                            The <span className='fs-2 text-success fs-semibold'>React Context API</span> is a way for a React app to
                            <span className='fw-semibold'> effectively produce global variables</span> that can be passed around.
                            The Context API gives you a dependency injection system based
                            on your component tree.
                        </div>
                        <br />
                        <div className='text-start'>
                            For instance, there are multiple components where we are using prop drilling.
                            For two to five, it can be done without hesitation, but for bigger applications
                            there can be hundard or more components and it's nearly impossible to drag a component from
                            first to last by drilling to destination. To eradicate this problem Context API
                            helps us. <span className='text-primary fs-3'>When you apply the Context API in a range where it is to be applied,
                                we can use the context from this very component to whoever it's child and their
                                childrem and so on.</span>
                        </div>
                        <br />
                        <div className='text-start'>
                            This wasn’t possible in React before and it also
                            integrates very well with function components and hooks. In situations
                            where you have logic and configuration that needs to be accessed by
                            multiple components but doesn’t interact with or depend on external modules,
                            writing your own contexts can be beneficial.
                        </div>
                        <br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <p className='fs-3 pt-3 ps-3'>Why is the  <code className='fs-3'>useRef()</code> Hook used?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <div className='text-start'>
                            The <code className='fs-3'>useRef()</code> Hook allows you to persist values between renders.
                            It can be used to <span className='text-primary'>store a mutable value</span> that does not cause a re-render when updated.
                            <span className='text-primary'> Basically, useRef can be used to store data values just like useState,
                                but the difference is that when that value changes. </span>useRef is like a “box” that can hold a mutable value in its current property.
                        </div>
                        <br />
                        <div className='text-start'>
                            useRef returns a mutable ref object whose .current property is
                            initialized to the passed argument ( initialValue ).
                            The returned object will persist for the full lifetime of the component.
                            <br />

                        </div>
                        <br />
                        <span className='fs-3 text-primary'>Note: </span> <span className='text-success'>useRef is a synchronous Hook and
                            it doesn't trigger a re-render.</span>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;