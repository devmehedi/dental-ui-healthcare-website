import React from 'react';

const Service = ({ service }) => {
    const { title, doctor, phone, location, history, description, img, method, treatment } = service;
    return (
        <div>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default Service;