import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="foot">
                <h2>Our Servicess</h2>
                <li>Dental Implants</li>
                <li>Braces</li>
                <li>Teeth Whitening</li>
                <li>Crowns and Bridges</li>
                <li>Prevention</li>
            </div>
            <div className="foot">
                <h2>Our Doctores</h2>
                <li>Dr. Daisy Gabriela</li>
                <li>Dr. Addison Smith</li>
                <li>Cosmetic Dentistry</li>
                <li>Dr.Sayed Miyad</li>
                <li>See More Details........</li>
            </div>
            <div className="foot">
                <h2>Social Link</h2>
                <span className="social-icon"><i className="fab fa-facebook-square"></i></span>
                <span className="social-icon"><i className="fab fa-instagram-square"></i></span>
                <span className="social-icon"><i className="fab fa-twitter-square"></i></span>
            </div>
        </div>
    );
};

export default Footer;