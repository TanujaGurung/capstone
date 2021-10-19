import React from "react";
import {Link} from "react-router-dom"
import {  Card} from 'react-bootstrap';



const HomeCard =(props)=>{
  const {img, title ,link,para}  = props ;
 
     
     
    return (
        <div>
       <Link to ="/detail"style={{textDecoration:"none",color:"black"}} >  
      <Card >
        
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          
          <Card >
          <Card.Img variant="top" src={img} />
          <Card.Body>
          <Card.Title><br></br></Card.Title>
            <Card.Text >
              {para}
            </Card.Text>
          </Card.Body>
        </Card>
        </Card.Body>
      </Card>
      </Link>
      </div>
      
      )
}
export default HomeCard;