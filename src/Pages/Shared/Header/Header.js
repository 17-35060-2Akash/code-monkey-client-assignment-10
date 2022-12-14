import React, { useState } from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Header.css';
// import logo from '../../images/logo2.png';
import logo2 from '../../../assets/images/logo2.png';
import logo22 from '../../../assets/images/logo22.png';
import { FaToggleOn, FaToggleOff, FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { ThemeContext } from '../../../App';
import ReactSwitch from "react-switch";


const Header = () => {
    const [open, setOpen] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const { user, logOut } = useContext(AuthContext);

    const handleLOgOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    return (
        <div className=''>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg={theme} expand={expand} className="" >
                    <Container fluid className='mx-3'>

                        <Navbar.Brand>
                            <Link to='/'><img className='logo-img img-fluid pb-2 me-5' src={theme === 'light' ? logo2 : logo22} alt="" /></Link>
                        </Navbar.Brand>
                        <h4></h4>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img className='logo-img img-fluid ps-2 ms-2 mt-2' src={logo2} alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="flex-grow-1 justify-content-around nav-links">
                                    <Form className="d-flex d-lg-none py-2 w-75 justify-content-center align-items-center mx-4">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search Courses"
                                            id="search-bar"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="outline-success">Search</Button>
                                    </Form>

                                    <Nav className='flex-grow-1 pb-2 '>

                                        {/* for side menu   */}
                                        <div className='fs-1 px-3 ms-1 d-lg-none d-flex align-items-center '>
                                            {
                                                user?.uid ?
                                                    <>
                                                        {
                                                            user?.photoURL ?
                                                                <span className='text-nowrap ms-3'>
                                                                    <span title={user?.displayName}><Image className='me-3 ' roundedCircle src={user.photoURL} style={{ height: '40px' }} ></Image></span>
                                                                    <Button onClick={handleLOgOut} className='btn-danger fs-6 pb-2'>LOGOUT</Button>
                                                                </span>
                                                                :
                                                                <span className='text-nowrap ms-3'>
                                                                    <span title={user?.displayName}><FaUser className='me-3 rounded-circle p-1 fs-1 bg-info' ></FaUser></span>
                                                                    <Button onClick={handleLOgOut} className='btn-danger fs-6 pb-2'>LOGOUT</Button>
                                                                </span>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <Link className='' to="/login">
                                                            <Button variant='light' className='fs-6 pb-2 px-4'>Login</Button>
                                                        </Link>
                                                        <Link className='' to="/register">
                                                            <Button variant='light' className='fs-6 pb-2 px-3'><span className='text-nowrap'>Sign Up</span></Button>
                                                        </Link>
                                                    </>
                                            }

                                            <div className='ms-3 mt-4'>
                                                {
                                                    open ?

                                                        <>
                                                            {/* <FaToggleOn onClick={() => setOpen(!open)} className='text-danger display-5 ms-5 mb-2' title='Dark Mode Switch'></FaToggleOn> */}
                                                            {/* <p>ON</p> */}

                                                        </>
                                                        :
                                                        <>
                                                            {/* <FaToggleOff onClick={() => setOpen(!open)} className='text-secondary display-5 ms-5 mb-2'></FaToggleOff> */}
                                                            {/* <p>OFF</p> */}
                                                        </>



                                                }
                                                <div title={`${theme} mode`} className='mb-2 pb-1'>
                                                    <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}></ReactSwitch>
                                                </div>
                                            </div>

                                        </div>
                                        <Nav className='justify-content-center flex-grow-1 ps-3 nav-links mt-2 pt-1' >
                                            <Link className=' fw-semibold mx-4 text-secondary ' to="/">Home</Link>
                                            <Link className=' fw-semibold mx-4 text-secondary' to="/courses">Courses</Link>
                                            <Link className=' fw-semibold mx-4 text-secondary' to="/blog">Blog</Link>
                                            <Link className=' fw-semibold mx-4 text-secondary' to="/faq">FAQ</Link>
                                        </Nav>

                                        <Nav className='d-flex flex-row align-items-center justify-content-center nav-links d-none d-lg-block mt-3'>
                                            {
                                                user?.uid ?
                                                    <>
                                                        {
                                                            user?.photoURL ?
                                                                <span className='text-nowrap ms-3'>
                                                                    <span title={user?.displayName}><Image className='me-3 ' roundedCircle src={user.photoURL} style={{ height: '40px' }} ></Image></span>
                                                                    <Button onClick={handleLOgOut} className='btn-danger fs-6 pb-2 mt-1 ms-1'>LOGOUT</Button>
                                                                </span>
                                                                :
                                                                <span className='text-nowrap ms-3'>
                                                                    <span title={user?.displayName}><FaUser className='me-3 rounded-circle p-1 fs-1 bg-info' ></FaUser></span>
                                                                    <Button onClick={handleLOgOut} className='btn-danger fs-6 pb-2 mt-1 ms-1'>LOGOUT</Button>
                                                                </span>
                                                        }
                                                        {/* <span >{user?.displayName}</span> */}
                                                    </>
                                                    :
                                                    <>
                                                        <span className='text-nowrap'>
                                                            <Link className='' to="/login">
                                                                <Button variant='light' className=' px-3 py-1 mb-1 mt-1'>Login</Button>
                                                            </Link>
                                                            <Link className='' to="/register">
                                                                <Button variant='light' className=' px-2 py-1 mb-1 mt-1'><span className='text-nowrap'>Sign Up</span></Button>
                                                            </Link>
                                                        </span>
                                                    </>
                                            }
                                        </Nav>

                                        {/* theme button */}
                                        <div className='display-5 px-3 pb-1 d-none d-lg-block  mt-1'>
                                            {
                                                open ?

                                                    <>
                                                        {/* <FaToggleOn onClick={() => setOpen(!open)} className='text-danger' title='Dark Mode Switch'></FaToggleOn> */}
                                                        {/* <p>ON</p> */}
                                                    </>
                                                    :
                                                    <>
                                                        {/* <FaToggleOff onClick={() => setOpen(!open)} className='text-secondary'></FaToggleOff> */}
                                                        {/* <p>OFF</p> */}
                                                    </>



                                            }
                                            <span title={`${theme} mode`} className=''>
                                                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}></ReactSwitch>
                                            </span>

                                        </div>
                                    </Nav>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    );
};

export default Header;