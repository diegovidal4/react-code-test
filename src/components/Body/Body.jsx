import { Container,Row,Col } from "react-bootstrap";
import Location from '../Location/Location';
import React, { useState, useEffect } from 'react';

function Body(){
    let [locations,setLocations] = useState([]);

    useEffect(() => {
        fetch("https://6033c4d8843b15001793194e.mockapi.io/api/locations")
        .then(response=>response.json())
        .then(response=>setLocations(response));
    }, []);

    return (<Container fluid="true" className="m-3">
        <Row className="row-cols-5">
            {locations.map((location)=>{
                return (<Col>
                    <Location key={location.id} {...location}></Location>
                </Col>)
            })}
        </Row>

    </Container>)
}

export default Body;