import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../../Service/Service';

const HomeService = (props) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div>
                <h2 className="service-title">What We Do</h2>
            </div>
            <div className="service-container">
                {
                    services?.slice(0, 6)?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeService;