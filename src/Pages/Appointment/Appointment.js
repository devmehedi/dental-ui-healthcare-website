import React from 'react';
import './Appointment.css'
const Appointment = () => {


    return (
        <div>
            <h2 className="appointment-title">Request an Appointment</h2>
            <h3>Please fill out the form</h3>
            <div>
                <form className="form" onSubmit="">
                    <input type="text" name="" id="" placeholder="Your Name" required />
                    <br />
                    <input type="text" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input type="number" name="" id="" placeholder="Enter Your Phone Number" required />
                    <br />
                    <input type="text" name="" id="" placeholder="You are Interestedf ? Y/N" required />
                    <br />
                    <textarea className="textarea" name="" id="" placeholder="Your Problem" cols="99" rows="10"></textarea>
                    <br />
                    <input className="btn " type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Appointment;