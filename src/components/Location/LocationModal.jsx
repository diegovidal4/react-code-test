import {Row,Col,Modal,Button} from 'react-bootstrap';
import IconClose from '../../assets/img/Close.svg';
import LocationDetails from './LocationDetails';

const LocationModal =  (props)=>{
    

return (<div onClick={e => e.stopPropagation()}>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Body>
                    <Row>
                    <Col>
                    <h5 className="text-start">{props.name}</h5>
                </Col>
                <Col lg="2">
                    <img className="position-absolute" style={{right:"10px"}} src={IconClose} onClick={props.close}/>
                </Col>
                    </Row>
                    <Row >
                        <LocationDetails classValue="text-start border-bottom-0 bg-white" {...props} ></LocationDetails>
                    </Row>
                    <Row className="mt-3">
                        <p className="fw-bold">Description</p>
                        <p>{props.description}</p>
                    </Row>
                    <Row className="justify-content-end">
                        <Col lg="2" className="">
                            <Button variant="success" className="rounded-circle" onClick={props.close}>
                            Done
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>)
}


export default LocationModal;