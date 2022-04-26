import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingelEvent.css'

const SingleEvent = ({ single }) => {
    const { name, image } = single;
    return (
        <Col>
            <Card className='position-relative card'>
                <Card.Img variant="top" src={image} />
                <Card.Body className='position-absolute bottom-0 bg-warning w-100 h-25 d-flex justify-content-center align-items-center card-info'>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleEvent;