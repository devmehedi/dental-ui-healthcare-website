import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('../../../public/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            {
                services.map(service => <Services
                    key={service.id}
                    service={service}
                ></Services>)
            }
        </div>
    );
};

export default Services;