import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

 const {user,loading}=useContext(AuthContext);
 const location=useLocation();//login er por kon route or children a jabo ta set kre dite hbe.

if(loading){
  return <Spinner animation="border" variant="primary"></Spinner>
}

 if(!user){//jodi user na paoa jay thle Navigate kre login page a send krbo login krar jnno.
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
 }
   return children; //ar jodi user thake thle children a thaka je kono route a send kre dibo
};

export default PrivateRoute;