
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';

const BlankCard = () => {
  return (

  <Card>
      <Card.Body>
        <Card.Title>Your Title</Card.Title>
        <Card.Text>
          Your content goes here. This is a blank card that you can customize.
        </Card.Text>
      </Card.Body>
    </Card>

      

    
  );
};

export default BlankCard;