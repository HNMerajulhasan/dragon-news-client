import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaGoogle,FaGithub,FaFacebook,FaWhatsapp,FaInstagram,FaTwitter } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
const [error,setError]=useState('');
const {providerLogin}=useContext(AuthContext);

const googleProvider=new GoogleAuthProvider();
const gitHubprovider = new GithubAuthProvider();

const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
     .then(result=>{
        const user=result.user;
        console.log(user);
     })
     .error(error=>console.error(error))
  }

  const handleGithubSignIn=()=>{
    providerLogin(gitHubprovider)
     .then(result=>{
      const user=result.user;
      console.log(user);
     })
     .error(error=>console.error(error))
  }


const {signIn}=useContext(AuthContext);
const navigate=useNavigate();
const location=useLocation();

const from=location.state?.from?.pathname || '/';

const handleLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);

    signIn(email,password)
     .then(result=>{
        const user=result.user;
        console.log(user);
        setError('');
        form.reset();
        navigate(from,{replace:true});
     })
     .catch(error=>{
        console.error(error)
        setError(error.message);
    });
}

    return (
     <div>
        <Form onSubmit={handleLogIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required/>
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required/>
            </Form.Group>
            <p>If You are new user please <Link to='/register'>Register</Link></p>
            <Button variant="primary" type="submit">
                LogIn
            </Button>
            <Form.Text className="text-danger">
              {error}
            </Form.Text>
        </Form>
        <ButtonGroup vertical>
            <Button onClick={handleGoogleSignIn} variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle>LogIn With Google</Button>
            <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub>LogIn With GitHub</Button>
        </ButtonGroup>

    </div>
    );
};

export default Login;