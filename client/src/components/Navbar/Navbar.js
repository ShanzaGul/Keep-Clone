import React,{useState, useEffect} from "react";
import { Row, Col, Button, InputGroup, FormControl , Image} from "react-bootstrap";
import logo from "../../images/keep.png";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";
import {LOGOUT} from '../../constants/actionTypes'
import {useNavigate , useLocation} from 'react-router-dom'

import "./Navbar.css";

export default function Navbarr({ listView, setListView }) {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))) ;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  
  }, [location]);

  const logout = ()=>{
    dispatch({type: LOGOUT});
    navigate('/auth');
    setUser(null);
  }
  return (
    <>
    <Row className="pt-3 pb-2" >
    <Col xs={3} md={2}>
      <div style={{ display: "flex"}} >
      <img
        src={logo}
        alt="this logo"
        className="navbar-img"
      ></img>
      <a
        href="#home"
        className="font-color-light navbar-keep"
      >
        Keep
      </a>
      </div>
   
    </Col>

    <Col xs={6} md={5} lg={6}>
        <InputGroup className='navbar-input'>
        <Button className="btn-search"><AiOutlineSearch /></Button>
          <FormControl placeholder="Search" className="form-control-search" />
        </InputGroup>
    </Col>
    <Col
      md={2}
      style={{ display: "flex", flexDirection: "row-reverse" }}
      className="btnchangelayout"
    >
      {listView &&
         <Button className="btn-navbar font-color-light" onClick={()=>{setListView(listView=>!listView)}}>
         <BsGrid size="18" />
       </Button> }
    
      {!listView && <Button className="btn-navbar font-color-light" onClick={()=>{setListView(listView=>!listView)}}>
        <FaGripLines  size="18" />
      </Button>}
      <Button className="btn-navbar font-color-light">
        <IoRefreshSharp size="18" />
      </Button>
    </Col>
    <Col xs={2} md={3} lg={2}>
    {user?.result ? (
          <div>
            <Image roundedCircle style={{height:"35px"}}	 alt={user?.result.name} src={user?.result.imageUrl}></Image>
            {!user.result.imageUrl ?   <Button style={{ backgroundColor: "rgb(59, 60, 65)",borderColor:"rgb(59, 60, 65)",borderRadius:"50%", fontSize:"16px"}}>
            {user?.result.name.charAt(0)}
           </Button> : <></>  }
          
            <Button size="sm" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Link  to="/auth" ><Button size="sm" >LogIn</Button></Link>
        )}
     </Col>
  </Row></>
  );
}
