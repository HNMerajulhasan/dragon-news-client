import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const  CourseSummaryCard= ({news}) => {
  const {_id,title,introductory,details,image_url,total_view,rating}=news

 const pdfGenerate=()=>{
   const doc=new jsPDF('landscape','px','a4','false');
   doc.addPage()
   doc.setFont('Helvertica','bold')
   doc.text(60,60,'Name')
   doc.text(60,60,'Email')
   doc.text(60,100,'Mob.No')
   doc.setFont('Helvertica','Normal')
   doc.text(100,60, `${introductory}`)
   doc.text(100,80,': djajidji@gmail.com')
   doc.text(120,100,': 889909899')

   doc.save('a.pdf')

 }

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                   <div className='d-flex '>
                       {title}
                   </div> 
                   <div>
                     <Button onClick={pdfGenerate}>Make It Pdf</Button>
                   </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                      {introductory}
                    </Card.Title>
                    <Card.Img variant="top" src={image_url} />
           
                    <Card.Text>
                    <h5 style={{ color: 'red' }}>List-Upper-Latin</h5>
            <ul style={{ listStyleType: 'upper-alpha' }}>
              <li>Mandarins</li>
              <li>Dates</li>
              <li>Raspberry</li>
            </ul>
                        
                        <p>{details}</p>
                       
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center">
                    <div className="d-grid gap-2 w-100">
                    <Link to='/checkout'> 
                      <Button variant="primary" size="lg">
                        Get Premium Access
                      </Button> 
                    </Link>  
                    </div>  
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseSummaryCard;