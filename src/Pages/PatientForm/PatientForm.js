import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './PatientForm.css'
const PatientForm = () => {
    return (
        <div className="patient-form">
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" type="text" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" type="text" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Control placeholder="Email" type="email" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Phone Number" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Control placeholder="Message" type="message" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="I'm Interested in service" type="text" />
                    </Col>
                </Row>

            </Form>
        </div>
    );
};

export default PatientForm;