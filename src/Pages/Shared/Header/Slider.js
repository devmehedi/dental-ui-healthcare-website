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
                        src="https://image.freepik.com/free-photo/dentistry-healthcare-concept-male-dentist-showing-teeth-x-ray-female-patient-dental-white-clinic-room_496169-918.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>ORAL PATOLOGIST </h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://image.freepik.com/free-photo/two-dentists-doing-their-work-dentist-s-clinic_329181-20747.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>The best in modern dentistry</h2>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://media.istockphoto.com/photos/african-american-dentist-making-treatment-in-modern-clinic-picture-id1222938883?b=1&k=20&m=1222938883&s=170667a&w=0&h=MVJnjUyZa_oORpthvsqP3DKmd9mrjsDacIlnKgAknwA="
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