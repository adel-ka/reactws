import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button, Card,  Container,  ListGroup, Navbar,   } from 'react-bootstrap';
// import  { Navb } from './Component/Nav';


function App(){
    return (
    <div className="App">
   <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <div> <div>
    <h1>
      Example heading <Badge bg="secondary">New</Badge>
    </h1>
    <h2>
      Example Heading <Badge bg="secondary">New</Badge>
    </h2>
    <h3>
      Example Heading <Badge bg="secondary">New</Badge>
    </h3>
    <h4>
      Example Heading <Badge bg="secondary">New</Badge>
    </h4>
    <h5>
      Example Heading <Badge bg="secondary">New</Badge>
    </h5>
    <h6>
      Example heading <Badge bg="secondary">New</Badge>
    </h6>
  </div></div>
  
     <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
     
    
    </div>
    )
}export default App;