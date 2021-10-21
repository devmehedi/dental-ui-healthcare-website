import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <h2 className="about-title">You Can Contact With Us</h2>
            <div className="contact-form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="btn" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ContactUs;