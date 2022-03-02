import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import Tabs from "../Tabs/Tabs";
import NoteForm from "../Form/Form";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getNotes } from "../../actions/notes";
import Navbarr from "../Navbar/Navbar";
import { useLocation, useNavigate  } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search)
}
function Home() {
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useNavigate();
  const page = query.get('page') || 1 ;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(null);
  const [listView, setListView] = useState(false);
  const [tab, setTab] = useState("first");
  const [search,setSearch] = useState('');


  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getNotes());
    console.log("I am fired and id id changed", currentId);
  }, [dispatch, currentId, tab]);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbarr listView={listView} setListView={setListView} search= {search} setSearch={setSearch} />
          <NoteForm currentId={currentId} setCurrentId={setCurrentId} />
          <Tabs
            currentId={currentId}
            setCurrentId={setCurrentId}
            listView={listView}
            tab={tab}
            setTab={setTab}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
