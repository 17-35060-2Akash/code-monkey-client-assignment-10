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
import { FaToggleOn, FaToggleOff, FaUser } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


const Header = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLOgOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    };

    return (
        <div className=''>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="" >
                    <Container fluid className='mx-3'>

                        <Navbar.Brand>
                            <Link to='/'><img className='logo-img img-fluid pb-2' src={logo2} alt="" /></Link>
                        </Navbar.Brand>
                        <h4></h4>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img className='logo-img img-fluid ps-2 ms-2 mt-2' src={logo2} alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
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

                                    <Nav className='flex-grow-1'>
                                        {/* <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/">Home</NavLink> */}
                                        <div className='fs-1 px-3 ms-1 d-lg-none'>
                                            {
                                                open ?
                                                    <>
                                                        <FaToggleOff onClick={() => setOpen(!open)} className='text-secondary'></FaToggleOff>
                                                        {/* <p>OFF</p> */}
                                                    </>
                                                    :
                                                    <>
                                                        <FaToggleOn onClick={() => setOpen(!open)} className='text-danger' title='Dark Mode Switch'></FaToggleOn>
                                                        {/* <p>ON</p> */}
                                                    </>


                                            }

                                        </div>
                                        <Nav className='justify-content-end flex-grow-1 pe-3 nav-links mt-2'>
                                            <Link className='' to="/">Home</Link>
                                            <Link className='' to="/courses">Courses</Link>
                                            <Link className='' to="/blog">Blog</Link>
                                            <Link className='' to="/faq">FAQ</Link>
                                        </Nav>

                                        <Nav className='justify-content-end flex-grow-1 flex-row align-items-center pe-3 nav-links'>
                                            {
                                                user?.uid ?
                                                    <>
                                                        {
                                                            user?.photoURL ?
                                                                <span title={user?.displayName}><Image className='me-3' roundedCircle src={user.photoURL} style={{ height: '40px' }} ></Image></span>
                                                                :
                                                                <span title={user?.displayName}><FaUser className='me-3 rounded rounded-4 p-1 fs-1 bg-info' ></FaUser></span>
                                                        }
                                                        {/* <span >{user?.displayName}</span> */}
                                                        <Button onClick={handleLOgOut} className='btn-danger'>Logout</Button>
                                                    </>
                                                    :
                                                    <>
                                                        <Link className='' to="/login">
                                                            <Button variant='light' className='fs-6'>Login</Button>
                                                        </Link>
                                                        <Link className='' to="/register">
                                                            <Button variant='light' className='fs-6'>Sign Up</Button>
                                                        </Link>
                                                    </>
                                            }
                                        </Nav>

                                        {/* theme button */}
                                        <div className='fs-1 px-3 ms-1 d-none d-lg-block'>
                                            {
                                                open ?
                                                    <>
                                                        <FaToggleOff onClick={() => setOpen(!open)} className='text-secondary'></FaToggleOff>
                                                        {/* <p>OFF</p> */}
                                                    </>
                                                    :
                                                    <>
                                                        <FaToggleOn onClick={() => setOpen(!open)} className='text-danger' title='Dark Mode Switch'></FaToggleOn>
                                                        {/* <p>ON</p> */}
                                                    </>


                                            }

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