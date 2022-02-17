import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Row, Col, Button, Form, Container, Card} from "react-bootstrap";
import {GoogleLogin} from 'react-google-login'
import './Auth.css'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import {AUTH} from "../../constants/actionTypes"
import {signin,signup} from '../../actions/auth'
import { ToastContainer, Flip, toast} from "react-toastify";








const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Auth() {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const customId = "frontend-error";


  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if(form.password === form.confirmPassword){
        dispatch(signup(form,navigate))
      }else {
        toast.error("Passwords do not match", {
          position: "bottom-center",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          autoClose:5000,
          toastId: customId
          });
      }
    } else {
      dispatch(signin(form,navigate))
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate("/");
      
    } catch (error) {
      toast.error("Something went wrong, Try again later", {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        autoClose:5000,
        });
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  useEffect(() => {
 
  }, [dispatch]);
  
  

  
    return (
      <>
             <Container className="hero-image"  fluid style={{height:"100vh", padding:"0px"}}>
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
                            <Form.Control required name="firstName" type="text" placeholder="Enter First Name" onChange={handleChange} value={form.firstName}/>
                        </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label >Last Name</Form.Label>
                            <Form.Control required name="lastName" type="text" placeholder="Enter Last Name"  onChange={handleChange} value={form.lastName} />
              </Form.Group>
            </>
            )}
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required name="email" type="email" placeholder="Enter email" onChange={handleChange} value={form.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            {showPassword ? <AiOutlineEye onClick={handleShowPassword} style={{marginLeft:"7px"}}  />: <AiOutlineEyeInvisible onClick={handleShowPassword} style={{marginLeft:"7px"}}   /> }
                            <Form.Control required type={showPassword ? 'text' : 'password'} placeholder="Password"  onChange={handleChange} value={form.password} name="password" />
                        </Form.Group>
                        { isSignup &&  <>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control required type={showPassword ? 'text' : 'password'} placeholder="Password" onChange={handleChange} value={form.confirmPassword} name="confirmPassword" />
                        </Form.Group> 
                        </> }
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <Button variant="primary" type="submit">
                            { isSignup ? 'Sign Up' : 'Sign In' }
                            </Button>

                            <GoogleLogin
                                        clientId="122049905869-i2gmvj5jiv0ecqb07p103q0464u8n7hp.apps.googleusercontent.com"
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
                <Card.Footer style={{fontSize:"14px"}} onClick={switchMode}> 
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                <div style={{marginTop:"40px"}}>
                <ToastContainer
                      position="bottom-center"
                      theme="colored"
                      newestOnTop={false}
                      autoClose={5000}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable={false}
                      transition={Flip}
                      />
                </div>

                </Card.Footer>
                </Card>
                
                   </div>
                   
           </Col>
           </Row>
        </Container>
        </>
        
    )

}
export default Auth
