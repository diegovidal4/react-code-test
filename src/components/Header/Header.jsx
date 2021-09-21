import {Navbar,Container,Row,Col} from 'react-bootstrap';

function Header(){
    return (<Navbar bg="light" expand="lg" className="border-bottom">
    <Container className="ms-3" fluid="true">
        <Row>
        <Row>
            <Col className="text-start text-secondary">All locations</Col>
        </Row>
        <Row>
            <Col><h3 className="text-start">Acme locations</h3></Col>
        </Row>
        </Row>
    </Container>
  </Navbar>)
}

export default Header;