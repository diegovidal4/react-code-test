import {Card,Row,Col,Modal,Button} from 'react-bootstrap';

import IconEdit from '../../assets/img/Edit.svg';

import LocationDetails from './LocationDetails';

import React, {useState} from 'react';
import LocationModal from './LocationModal';


 function Location(props){
    const [isBoxHover, setIsBoxHover] = useState(false);
    const [show,setShow] = useState(false);

    let views = Math.random();

    const handleClose = () => {
        setIsBoxHover(false);
        setShow(false);
    }


   
    const handleShow = () => setShow(true);
    const handleOnMouseEnter = (e)=>setIsBoxHover(true);
    const handleOnMouseLeave = (e)=>setIsBoxHover(false);

    let listGroupClass = `text-start border-bottom-0 ${!isBoxHover ? "bg-light":"bg-secondary"}`;
    return (<Card className={`mb-4 ${!isBoxHover ? "bg-light":"bg-secondary"}`} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleShow}>
        <Card.Body>
            <Row>
                <Col>
                    <h5 className="text-start">{props.name}</h5>
                </Col>
                <Col lg="2">
                    {isBoxHover && <img className="position-absolute" style={{right:"10px"}} src={IconEdit}/>}
                </Col>
            </Row>
            <Row >
               <LocationDetails classValue = {listGroupClass} {...props} views={views}></LocationDetails>
            </Row>
        </Card.Body>
        <LocationModal close={handleClose} show={show} {...props}></LocationModal>
        
    </Card>)
}

export default Location;
