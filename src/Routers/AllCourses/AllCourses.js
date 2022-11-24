import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Pages/SharedPage/LeftSideNav/LeftSideNav';

const  AllCourses= ({news}) => {
  const {_id,title,author,details,image_url,total_view,rating}=news
    return (
        <div>
          
      
       <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                   <div className='d-flex'>
                      <Image
                            src={author.img}
                            className='me-3'
                            style={{ height: '60px' }}
                            roundedCircle
                        >
                     </Image>  
                     <div>
                       <p className='mb-0'>{author?.name}</p> 
                       <p>{author?.published_date}</p>
                     </div>
                   </div> 
                   <div>
                     <FaRegBookmark className='me-2'></FaRegBookmark>
                     <FaShareAlt></FaShareAlt>
                   </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                       {details.length>250 ?
                        <p>{details.slice(0,250)+'...'}<Link to={`/news/${_id}`}>Read More</Link></p>
                        :
                        <p>{details}</p>
                       }
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className=''>
                       <FaStar className='text-warning me-2'></FaStar> 
                       <span>{rating?.number}</span>
                    </div>  
                    <div>
                      <FaEye className='me-2'></FaEye>  
                      <span>{total_view}</span>
                    </div> 
                </Card.Footer>
             </Card>
        </div>
    );
};


export default AllCourses;