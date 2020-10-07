import React from 'react';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";


const Footer = () => {

    return (
        <div className="footer">
            <footer>
                <div className="footer-div">
                <div className="footer-block">
                    <h3>
                        Get In Touch<br />
                    </h3>
                    <p>
                    <br />
                        Reach me at <a href="mailto:hazimarafa80@gmail.com" type="text-link">hazimarafa80@gmail.com</a>, <br />
                      <br />
                        @ 2020 Design + Code by Hazim Arafa
                    </p>
                </div>
                <div className="footer-block">
                    <h3>Quick Links</h3>
                    <NavLink to="/" className="footer-quick-link" onClick={scroll.scrollToTop}>Work<br /></NavLink>
                    <NavLink to="/about" className="footer-quick-link" onClick={scroll.scrollToTop}>About<br /></NavLink>
                    <NavLink to="/resume" className="footer-quick-link" onClick={scroll.scrollToTop}>Resumé<br /></NavLink>
                </div>
                <div className="footer-block">
                    <h3>Connect</h3>
                    <a href="mailto:hazimarafa80@gmail.com" className="footer-quick-link">Email<br /></a>
                    <a href="https://github.com/HazimAr" className="footer-quick-link">Github<br /></a>
                    <a href=" " className="footer-quick-link">Discord<br /></a>
                </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer;