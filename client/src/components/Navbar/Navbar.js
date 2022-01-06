import React from "react";
import { Row, Col, Button, InputGroup, FormControl} from "react-bootstrap";
import logo from "../../images/keep.png";

import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";

import "./Navbar.css";

export default function Navbarr({listView, setListView}) {
  

  return (
    <Row className="pt-2 pb-2" >
    <Col  style={{ padding:"0px"}}>
      <div style={{ display: "flex"}}>
      <img
        src={logo}
        alt="this logo"
        style={{ height: "80%", width: "auto" }}
      ></img>
      <a
        href="#home"
        className="font-color-light navbar-keep"
      >
        Keep
      </a>
      </div>
    </Col>

    <Col xs={5} lg={6} style={{padding:"0px"}}>
        <InputGroup className='navbar-input'>
        <Button className="btn-search"><AiOutlineSearch /></Button>
          <FormControl placeholder="Search" className="form-control-search" />
        </InputGroup>
    </Col>
    <Col
      md={3}
      style={{ display: "flex", flexDirection: "row-reverse" }}
      className="btnchangelayout"
    >
      {listView &&
         <Button className="btn-navbar font-color-light" onClick={()=>{setListView(listView=>!listView)}}>
         <BsGrid size="24" />
       </Button> }
    
      {!listView && <Button className="btn-navbar font-color-light" onClick={()=>{setListView(listView=>!listView)}}>
        <FaGripLines  size="24" />
      </Button>}
      <Button className="btn-navbar font-color-light">
        <IoRefreshSharp size="24" />
      </Button>
    </Col>
    <Col style={{ display: "flex", flexDirection: "row-reverse" }}>
    <Button className="btn-navbar font-color-light">
       Name
      </Button>
     </Col>
  </Row>
  );
}
