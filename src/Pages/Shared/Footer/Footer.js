import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../../images/social/twitter-logo.png';
import github from '../../../images/social/twitter-logo.png';
import facebook from '../../../images/social/facebook-logo.png';
import instagram from '../../../images/social/instagram-logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-dark mt-5">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <Link className='footer-link' to="/myinventories">dashboard</Link>
                            <ul>
                                <li>Web Development</li>
                                <li>Development</li>
                                <li>Hosting</li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <Link className='footer-link' to="/addinventory">Add</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <Link className='footer-link' to="/manageinventories">Manage</Link>
                            <ul>
                                <li>Company</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-3 item text">
                            <Link className='footer-link' to="/blogs">Blogs</Link>
                            <p>You can store your inventories anything you want</p>
                        </div>
                        <div className="icon-container d-flex justify-content-center">
                            <a className='me-2' href="https://github.com/abir14016"><img src={github} alt="" /></a>
                            <a className='me-2' href="https://www.facebook.com/mdabir.hassan.543"><img src={facebook} alt="" /></a>
                            <a className='me-2' href="https://twitter.com/abir14016"><img src={twitter} alt="" /></a>
                            <a className='me-2' href="https://www.instagram.com/abir14016/?hl=en"><img src={instagram} alt="" /></a>
                        </div>
                    </div>
                    <p className="copyright">gymHero.com@2022</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;