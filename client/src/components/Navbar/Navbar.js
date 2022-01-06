import React from "react";
import { Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../../images/keep.png";

import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";

import "./Navbar.css";

export default function Navbarr({ listView, setListView }) {
  return (
    <>
    <Row className="pt-3 pb-2" >
    <Col xs={3} md={2}>
      <div style={{ display: "flex"}}>
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
    <Button style={{ backgroundColor: "rgb(59, 60, 65)",borderColor:"rgb(59, 60, 65)",borderRadius:"50%", fontSize:"16px"}}>
       N
      </Button>
     </Col>
  </Row></>
  );
}
