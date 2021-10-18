import React from "react";
import {  Card ,ListGroup} from 'react-bootstrap';

const PostCard=() =>{
    return(
        <div>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
  <Card.Img variant="top" src="img1" alt ="myimg" />
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>

    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}
export default PostCard;