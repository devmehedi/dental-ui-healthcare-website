import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>please login</h2>
            <Button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</Button>
        </div>
    );
};

export default Login;