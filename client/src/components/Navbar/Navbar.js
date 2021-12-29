import React from "react";
import { Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import logo from "../../images/keep.png";

import { AiOutlineSearch } from "react-icons/ai";
import { IoRefreshSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { BsGrid } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";

import "./Navbar.css";

export default function Navbar() {
  return (
  <Row className="pt-2 pb-2" >
      <Col md={2} style={{ display: "flex" }}>
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
      </Col>

      <Col md={6}>
          <InputGroup className='navbar-input'>
          <Button className="btn-search"><AiOutlineSearch /></Button>
            <FormControl placeholder="Search" className="form-control-search" />
          </InputGroup>
      </Col>
      <Col
        md={3}
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <Button className="btn-navbar font-color-light">
          <BsGrid size="24" />
        </Button>
        <Button className="btn-navbar font-color-light">
          <HiViewList size="24" />
        </Button>
        <Button className="btn-navbar font-color-light">
          <IoRefreshSharp size="24" />
        </Button>
      </Col>

      <Col md={1} style={{ display: "flex", flexDirection: "row-reverse" }}>
      <Button className="btn-navbar font-color-light">
          <IoRefreshSharp size="24" />
        </Button>
       </Col>
    </Row>
  );
}
