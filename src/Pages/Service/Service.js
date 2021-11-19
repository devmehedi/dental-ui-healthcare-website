import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    // let history2 = useHistory();
    // const handleAppointment = () => {
    //     history2.push("/services")
    // }


    const { id, title, doctor, phone, location, history, description, img, method, treatment } = service;

    const url = `/service/${id}`;

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
            <Link to={url}>
                <Button className="btn" variant="secondary" size="lg" active>
                    More Details
                </Button>
            </Link>
        </div>

    );
};

export default Service;