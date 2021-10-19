import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Our Servicess</h2>
                <li>Dental Implants</li>
                <li>Braces</li>
                <li>Teeth Whitening</li>
                <li>Crowns and Bridges</li>
                <li>Prevention</li>
            </div>
            <div>
                <h2>Our Doctores</h2>
                <li>Dr. Daisy Gabriela</li>
                <li>Dr. Addison Smith</li>
                <li>Cosmetic Dentistry</li>
                <li>Dr.Sayed Miyad</li>
                <li>See More Details........</li>
            </div>
            <div>
                <h2>Social Link</h2>
                <span className="social-icon"><i class="fab fa-facebook-square"></i></span>
                <span className="social-icon"><i class="fab fa-instagram-square"></i></span>
                <span className="social-icon"><i class="fab fa-twitter-square"></i></span>
            </div>
        </div>
    );
};

export default Footer;