import React from "react";
import { Row, Col, Button, InputGroup, FormControl , Image} from "react-bootstrap";
import logo from "../../images/keep.png";
import {Link} from 'react-router-dom'

import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";

import "./Navbar.css";

export default function Navbarr({ listView, setListView }) {

  const user = null ;

  const logout = ()=>{

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

    <Col xs={6} md={6} lg={6}>
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
    <Col xs={2} md={1}>
    {user?.result ? (
          <div>
            <Image alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Image>
            <Button style={{ backgroundColor: "rgb(59, 60, 65)",borderColor:"rgb(59, 60, 65)",borderRadius:"50%", fontSize:"16px"}}>
       N
      </Button>
            <Button  onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Link  to="/auth" ><Button size="sm" >LogIn</Button></Link>
        )}
     </Col>
  </Row></>
  );
}
