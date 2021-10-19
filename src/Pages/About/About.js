import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Slider from '../Shared/Header/Slider';
import './About.css';
const About = () => {
    return (
        <div>
            <Slider></Slider>
            <h2 className="about-title">Who We Are</h2>
            <div className="content">
                <div className="">
                    <h3>Dr. Stephanie Wosniack</h3>
                    <h2><span className="team-heading">OUR</span> <span className="team-title">TEAM</span> </h2>
                    <p>Dr. Mohammad Sarwar jaman is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Wosniack found her calling to help others get well.</p>
                    <br />
                    <address>
                        <h4>United State</h4>
                    </address>
                    <img className="flag" src="https://www.worldatlas.com/r/w1200/upload/8e/6f/eb/shutterstock-61933045.jpg" alt="" />
                </div>
                <div>
                    <img className="drimg" src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

                <div>

                </div>
            </div>
            <h3 className="value-title mt-3 mb-3">Ask a question. Request an appointment.</h3>
            <form className="form" onSubmit="">
                <input type="text" name="" id="" placeholder="Your Name" required />
                <br />
                <input type="text" name="" id="" placeholder="Your Email" required />
                <br />
                <input type="number" name="" id="" placeholder="Enter Your Phone Number" required />
                <br />
                <input type="text" name="" id="" placeholder="You are Interestedf ? Y/N" required />
                <br />
                <textarea className="textarea" name="" id="" placeholder="How can we help you ?" cols="100" rows="10"></textarea>
                <br />
                <input className="btn " type="submit" value="Send Message" />
            </form>
        </div>

    );
};

export default About;