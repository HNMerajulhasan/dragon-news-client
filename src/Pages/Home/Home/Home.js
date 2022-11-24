import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 import sideImage from '../../../assets/wb-logo.png';
import Footer from '../../SharedPage/Footer/Footer';

const Home = () => {
    return (
      
            <Container>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 '>
                        <Image src={sideImage} className='my-2 h-100' fluid>
                        </Image>

                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center '>
                        <h1 className='text-center'>Hey!! Welcome To Our Online IT Course</h1>
                        <h3 className='text-center text-warning'>Are You Looking For Best Online IT Career Course!! Here We are to provide You Best Online Course</h3>

                        <h2 className='text-center'>Why Us!! Have a Look <span> <FaQuestion className='text-danger' /></span></h2>



                        <Link to={'/courses'}>
                            <Button variant='danger' className='my-3 py-3'>Check Out Now <FaArrowAltCircleRight /> </Button>
                        </Link>

                    </div>

                </div>
              
            </Container>
        
        
    );
};

export default Home;