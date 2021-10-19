import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';


const Slider = () => {
    return (
        <div>
            <Carousel className="slider-text">
                <Carousel.Item>
                    <img
                        className="d-block  slider"
                        src="https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>ORAL PATOLOGIST </h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>The best in modern dentistry</h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Big surgent</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Button className="btn" variant="secondary" size="lg" active>
                Make An Appointment
            </Button>

        </div>
    );
};

export default Slider;