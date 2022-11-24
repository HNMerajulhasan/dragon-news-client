import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../../Pages/SharedPage/LeftSideNav/LeftSideNav';
import AllCourses from '../AllCourses/AllCourses';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    const AllNews=useLoaderData();
    return (
        <div>
            {/* <h2>This is Course Component {AllNews.length}</h2> */}
           <Container>
             <Row>
              <Col  lg='3'>
              <LeftSideNav></LeftSideNav>
              </Col>
            
          
           <Col lg='9'>
            {
              AllNews.map(news=><AllCourses
              key={news.id}
              news={news}
              ></AllCourses>)  
            }
             </Col>
            </Row>
           </Container> 
        </div>
    );
};

export default Courses;