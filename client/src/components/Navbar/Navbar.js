import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Image,
  Dropdown,
} from "react-bootstrap";
import logo from "../../images/keep.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa";
import { LOGOUT } from "../../constants/actionTypes";
import { useNavigate, useLocation } from "react-router-dom";
import { getNotes } from "../../actions/notes";

import decode from "jwt-decode";


import "./Navbar.css";

export default function Navbarr({ listView, setListView, search,setSearch , searchPost , clear}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime())
       logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
    setUser(null);
  };
  return (
    <>
      <Row className="pt-3 pb-2">
        <Col xs={3} md={2} lg={2}>
          <div style={{ display: "flex" }}>
          <Link to="/" className="font-color-light navbar-keep">
          <img src={logo} alt="this logo" className="navbar-img"></img>
              Keep
          </Link>
          </div>
        </Col>

        <Col xs={6} md={5} lg={6}>
          <InputGroup className="navbar-input">
            <Button className="btn-search" onClick={()=>{searchPost(); }}>
              <AiOutlineSearch />
            </Button>
            <FormControl placeholder="Search" className="form-control-search" name="search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            {search && 
              <Button className="btn-search" onClick={()=>{clear(); }}>
              Clear
            </Button>}
          
          </InputGroup>
        </Col>

        <Col
          lg={2}
          md={2}
          style={{ display: "flex", flexDirection: "row-reverse" }}
          className="btnchangelayout"
        >
          {listView && (
            <Button
              className="btn-navbar font-color-light"
              onClick={() => {
                setListView((listView) => !listView);
              }}
            >
              <BsGrid size="16" />
            </Button>
          )}

          {!listView && (
            <Button
              className="btn-navbar font-color-light"
              onClick={() => {
                setListView((listView) => !listView);
              }}
            >
              <FaGripLines size="16" />
            </Button>
          )}
        </Col>

        <Col xs={2} md={3} lg={2}>
          {user?.result ? (
            <div>
              {!user.result.imageUrl ? (
                <Dropdown size="sm" align="end">
                  <Dropdown.Toggle className="btn-navbar" style={{fontSize:"20px"}}>
                    {user?.result.name.charAt(0)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item
                      style={{
                        backgroundColor: "transparent",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      <Button size="sm" variant="light" onClick={logout}>
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Dropdown
                    size="sm"
                    align="end"
                    style={{ width: "40px", height: "100%", padding: "0px" }}
                  >
                    <Dropdown.Toggle
                      variant="dark"
                      style={{
                        width: "auto",
                        height: "100%",
                        padding: "0px",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        roundedCircle
                        style={{ height: "35px" }}
                        alt={user?.result.name}
                        src={user?.result.imageUrl}
                      ></Image>
                    </Dropdown.Toggle>
                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item
                        style={{
                          backgroundColor: "transparent",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button size="sm" variant="light" onClick={logout}>
                          Logout
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </div>
          ) : (
            <Link to="/auth">
              <Button size="sm">LogIn</Button>
            </Link>
          )}
        </Col>
      </Row>
    </>
  );
}
