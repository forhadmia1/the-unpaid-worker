import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import SingleEvent from '../SingleEvent/SingleEvent';

const Home = () => {
    const [events, setEvents] = useState([])
    const textREf = useRef()

    useEffect(() => {
        axios.get('http://localhost:5000/events')
            .then(function (response) {
                // handle success
                setEvents(response.data);
            })
    }, [])

    const searchEvents = async () => {
        const key = textREf.current.value;
        const { data } = await axios.get(`http://localhost:5000/search?name=${key}`)
        setEvents(data)

    }

    return (
        <Container>
            <div className='my-4'>
                <h2 className='text-center'>I GROW BY HELPING PROPLE IN NEED.</h2>
                <div className='w-25 mx-auto'>
                    <InputGroup className="mb-3 mt-4">
                        <FormControl
                            ref={textREf}
                            placeholder="Search Events"
                            aria-describedby="basic-addon2"
                        />
                        <Button onClick={searchEvents} variant="primary" id="button-addon2">
                            Button
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <Row xs={1} md={3} className='g-5 mt-1 mb-4'>
                {
                    events.map(single => <SingleEvent
                        key={single._id}
                        single={single}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Home;