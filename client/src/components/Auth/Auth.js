import React from 'react'
import { Row, Col, Button, InputGroup, FormControl , Image, Form, Container, Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Auth.css'
import img from '../../images/hero-bg-2x.jpg'

function Auth() {
    const state = null;
    return (
       <Container className="hero-image" fluid style={{height:"100vh", padding:"0px"}}>
           <Row className="" style={{padding:"0px"}}><Col className="" style={{padding:"0px"}}>
           <div class="hero-text">
           <Card className="text-left" style={{backgroundColor:"rgba(251,174,66,0.4)", padding:"4px"}}>
                <Card.Header>SignUp or SignIn</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                   
                </Card.Body>
                <Card.Footer className="text-muted">Already have an account? SIGNIN</Card.Footer>
                </Card>
                   </div>
           </Col></Row>
     
        </Container>
    )
}

export default Auth
