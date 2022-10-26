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
                        <p className='fs-3 pt-3 ps-3'>What knowledge do you need to be a programmer?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <div className='text-start'>
                            To succeed in computer programming,
                            it's helpful to have strong skills in <span className='text-primary'>computer
                                languages, math, science and logic.</span> In addition to these skills, coders also benefit from the following soft skills: Problem solving: By coding, computer programmers
                            create solutions for different industry needs.
                        </div>
                        <br /><br />
                        <div className='text-start'>
                            A great programmer is able to understand problems clearly,
                            break them down into hypotheses, and propose solutions in a coherent manner. They understand concepts quickly, or ask the right questions to help make them clear, and don't need to have everything written down in a specifications document.
                        </div> <br />


                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <p className='fs-3 pt-3 ps-3'>Is programming a skill or talent?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <div className='text-start'>
                            It is a skill, Because everyone can learn programming language (which is a tool) but implementing the correct algorithm is where it comes.
                            So programming is a skill which everyone can develop.
                        </div>
                        <br />


                        <div className='text-start'>
                            Coding is important to learn because it teaches you important skills such as critical thinking, problem solving and creativity. But also talent will go in vain if you don't do the hardworks.
                        </div>


                        <br />

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <p className='fs-3 pt-3 ps-3'>What're the things to know before You Try Coding as your profession?</p>
                    </Accordion.Header>
                    <Accordion.Body className='fs-4'>
                        <ul className='text-start'>
                            <li>Start coding whatever comes to your mind.</li>
                            <li>Repeat the known this again and again.</li>
                            <li>Solve All Your Programming Related Questions.</li>
                            <li>Get the basics right.</li>
                            <li>Build patience.</li>
                            <li>Set a goal & move towards it.</li>
                            <li>Do more projects.</li>
                            <li>Get into social coding.</li>
                            <li>Balance your learning. </li>
                            <li>Learn algorithms.</li>

                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;