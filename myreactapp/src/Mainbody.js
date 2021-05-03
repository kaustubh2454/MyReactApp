import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import './Mainbody.css';



const MainBody = (props) =>
(
    
    <Container style = {{ padding : '10px'}}>
        <Row>
            <Col >
                <CardColumns>
                    <Card>
                        <Card.Header className = "cardheader"></Card.Header>
                        <Card.Body>
                            <Card.Title> {props.seedtodo[0].title } </Card.Title>
                            <Card.Text>
                                {props.seedtodo[0].msg}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            <span><Button variant="primary" size = 'sm' style = {{float : 'right'}}>Edit</Button></span>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Header className = "cardheader"></Card.Header>
                        <Card.Body>
                            <Card.Title> {props.seedtodo[1].title} </Card.Title>
                            <Card.Text>
                                {props.seedtodo[1].msg}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            <span><Button variant="primary" size = 'sm' style = {{float : 'right'}}>Edit</Button></span>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Header className = "cardheader"></Card.Header>
                        <Card.Body>
                            <Card.Title> {props.seedtodo[2].title} </Card.Title>
                            <Card.Text>
                            {props.seedtodo[2].msg}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            <span><Button variant="primary" size = 'sm' style = {{float : 'right'}} >Edit</Button></span>
                        </Card.Footer>
                    </Card>
                </CardColumns>
            </Col>

        </Row>
    </Container>
);


export default MainBody