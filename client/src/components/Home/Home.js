import React from "react";

import { Row, Col, Container, Button} from "react-bootstrap";
import Tabs from "../Tabs/Tabs";
import NoteForm from "../Form/Form";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getNotes } from "../../actions/notes";
import Navbarr from "../Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { getNotesBySearch } from "../../actions/notes";
import { ToastContainer, Flip, toast } from "react-toastify";


function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}
function Home() {
  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
 

  const [currentId, setCurrentId] = useState(null);
  const [listView, setListView] = useState(false);
  const [tab, setTab] = useState("first");
  const [search, setSearch] = useState("");

  const user = JSON.parse(localStorage.getItem("profile"));
  

  useEffect(() => {
    dispatch(getNotes());
    console.log("I am fired and id id changed", currentId);
  }, [dispatch]);

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getNotesBySearch({ search }));
      navigate({
        pathname: '/',
        search: `?searchQuery=${search || 'none'}`,
      });
    } else {
      navigate("/");
    }

  };

  const clear = () => {
    setSearch("");
    navigate("/");
    dispatch(getNotes());
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbarr
            listView={listView}
            setListView={setListView}
            search={search}
            setSearch={setSearch}
            searchPost={searchPost}
            clear = {clear}
          />
          <ToastContainer
                      position="top-center"
                      theme="colored"
                      newestOnTop={false}
                      autoClose={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable={false}
                      transition={Flip}
                    />
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
