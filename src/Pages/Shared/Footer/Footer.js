import React from 'react';
import './Footer.css';
import logo22 from '../../../assets/images/logo22.png';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithubSquare, FaGoogle, FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import logo2 from '../../../assets/images/logo2.png';



const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <section className={`bg-${theme}`} id="footer-contact">
                <div className="row py-5">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center ">
                        <div className="d-flex justify-content-center align-items-center">
                            <img className="img-fluid w-25 pb-4" src={theme === 'light' ? logo2 : logo22} alt="" />
                        </div>
                        <p className="text-center text-info fs-5">Office 41, 5/5 Monipuri Para, <br /> Bijoy Sharoni, Dhaka</p>

                        <div className=''>
                            <nav className="text-white d-flex footer-nav fs-5">
                                <Link to='/terms' className='p-3'>Terms of Service</Link>
                                <Link to='/policy' className='p-3'>Privacy Policy</Link>
                            </nav>
                            <nav>

                            </nav>
                        </div>
                        <div className="platform-icons mb-3">
                            <Link to='/google' className='fs-3 p-3'><FaGoogle></FaGoogle></Link>
                            <Link to='/git' className='fs-3 p-3'><FaGithubSquare></FaGithubSquare></Link>
                            <Link to='linkedin' className='fs-3 p-3'><FaLinkedin></FaLinkedin> </Link>
                            <Link to='/insta' className='fs-3 p-3'><FaInstagram></FaInstagram> </Link>
                            <Link to='/facebook' className='fs-3 p-3'><FaFacebookSquare></FaFacebookSquare> </Link>
                            <Link to='/wapp' className='fs-3 p-3'><FaWhatsappSquare></FaWhatsappSquare> </Link>

                        </div>
                        <span className=" mt-2 fw-normal text-info fs-6" id="copy-right">codeMonkeyⒸNasin A Akash-2022</span>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;