import React from 'react';
import './PatientForm.css'
const PatientForm = () => {
    return (
        <div className="patient-form">
            <form className="form" onSubmit="">
                <input type="text" name="" id="" placeholder="Your Name" required />
                <br />
                <input type="text" name="" id="" placeholder="Your Email" required />
                <br />
                <input type="number" name="" id="" placeholder="Enter Your Phone Number" required />
                <br />
                <input type="text" name="" id="" placeholder="You are Interestedf ? Y/N" required />
                <br />
                <textarea className="textarea" name="" id="" placeholder="Your Problem" cols="96" rows="10"></textarea>
                <br />
                <input className="btn " type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default PatientForm;