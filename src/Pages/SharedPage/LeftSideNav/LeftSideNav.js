import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const LeftSideNav = () => {
  const [categories,setCategories]=useState([]);//server er index.js er 15 no theke category ke res.send kre deoar por ekhane useState er sahajje web a data guloke show krte hbe.

useEffect(()=>{//news category er name gula ke lefside nav a show krar jnno data gula ke ekhane fetch kre anteci.
    fetch(`http://localhost:5000/news-categories`)
     .then(res=>res.json())
     .then(data=>setCategories(data));
},[])
    return (
        <div>
          <h3>All Category: {categories.length}</h3>
      
         <div>
           {
            categories.map(category=><p
            key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
            </p>)
           }
        </div> 
        </div>
    );
};

export default LeftSideNav;