import React from 'react';
import './Service.css'


const Service = ({ service }) => {
    const { title, doctor, phone, location, history, description, img, method, treatment } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3> {doctor} </h3>
            <small> {location} </small>
            <p> <span className="service-des">Contact:</span> {phone} </p>
            <p> <span className="service-des">Treatment:</span> {treatment} </p>
            <p>{description}</p>
            <p> <span className="service-des">Method:</span> {method} </p>
            <p> <span className="service-des">History: </span> {history}</p>
            <button className="btn">Get Appointment</button>
        </div>

    );
};

export default Service;