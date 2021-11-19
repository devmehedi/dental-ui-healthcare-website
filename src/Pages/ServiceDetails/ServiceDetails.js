import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    console.log(serviceId)
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        const url = `http://localhost:3000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, [serviceId]);
    return (
        <div>
            <h2>This Service Id Num Is: {serviceId}  </h2>
            <img src={singleService.img} alt="" />
            <h2>{singleService.title}</h2>
            <h3> {singleService.doctor} </h3>
            <small> {singleService.location} </small>
            <p> <span className="service-des">Contact:</span> {singleService.phone} </p>
            <p> <span className="service-des">Treatment:</span> {singleService.treatment} </p>
            <p>{singleService.description}</p>
            <p> <span className="service-des">Method:</span> {singleService.method} </p>
            <p> <span className="service-des">History: </span> {singleService.history}</p>
        </div>
    );
};

export default ServiceDetails;