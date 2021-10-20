import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TeamDetails.css';



const TeamDetails = () => {
    let history = useHistory();

    const handleAbout = () => {
        history.push("/about")
    }


    return (
        <div>
            <h2 className="m-5 value-title">Our Team</h2>
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

            </div>
            <Button onClick={handleAbout} className="btn" variant="secondary" size="lg" active>
                Team Details
            </Button>
        </div>

    );
};

export default TeamDetails;