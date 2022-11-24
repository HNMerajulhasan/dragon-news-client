import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState('');
   

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,email,password);

        createUser(email,password)
         .then(result=>{
            const user=result.user;
            console.log(user);    
            setError('');
            form.reset();
         })
         .catch(error=>{
            console.error(error)
            setError(error.message);
        })
    }

    return (  
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Your Name..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="photo" name="photoURL" placeholder="Photo_URL..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>  
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <p>Already have an Account! Please<Link to='/login'>LogIn</Link></p>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-danger">
             {error}
            </Form.Text>
        </Form>
    );
};

export default Register;