import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Row, Col, Button, InputGroup, FormControl , Image, Form, Container, Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {GoogleLogin} from 'react-google-login'
import './Auth.css'
import img from '../../images/hero-bg-2x.jpg'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {AUTH} from "../../constants/actionTypes"




const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
    } else {
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate("/");
      
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');


  

  
    return (
       <Container className="hero-image" fluid style={{height:"100vh", padding:"0px"}}>
           <Row className="" style={{padding:"0px"}}>
               <Col className="" style={{padding:"0px"}}>
           <div className="hero-text">
           <Card className="text-left" style={{backgroundColor:"rgba(1,10,10,0.45)", padding:"4px"}}>
                <Card.Header>                        { isSignup ? 'Sign Up' : 'Sign In' }</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Form onSubmit={handleSubmit}>
                    { isSignup && (
            <>
              <Form.Group className="mb-3">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control required name="firstName" type="text" placeholder="Enter First Name" />
                        </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label >Last Name</Form.Label>
                            <Form.Control required name="LastName" type="text" placeholder="Enter Last Name" />
              </Form.Group>
            </>
            )}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {showPassword ? <AiOutlineEye onClick={handleShowPassword} style={{marginLeft:"7px"}}  />: <AiOutlineEyeInvisible onClick={handleShowPassword} style={{marginLeft:"7px"}}   /> }
                            <Form.Control required type={showPassword ? 'text' : 'password'} placeholder="Password"  />
                        </Form.Group>
                        { isSignup &&  <>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control required name="confirmPassword" type={showPassword ? 'text' : 'password'} placeholder="Password"/>
                        </Form.Group> 
                        </> }
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Button variant="primary" type="submit">
                            { isSignup ? 'Sign Up' : 'Sign In' }
                            </Button>

                            <GoogleLogin
                                        clientId=""
                                        render={renderProps => (
                                        <Button style={{marginTop:"5px", color:"rgba(0,0,0,0.6)"}} variant="light" onClick={renderProps.onClick} disabled={renderProps.disabled}><FcGoogle />  { isSignup ? 'Sign Up' : 'Sign In' } with Google</Button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={googleSuccess}
                                        onFailure={googleError}
                                        cookiePolicy={'single_host_origin'}
                                    />
                        </div>
                        </Form>
                   
                </Card.Body>
                <Card.Footer style={{fontSize:"14px"}} onClick={switchMode}> { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }</Card.Footer>
                </Card>
                   </div>
           </Col>
           </Row>
     
        </Container>
    )

}
export default Auth
