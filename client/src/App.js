import React from 'react'
import "./App.css";
import {useEffect,useState} from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Tabs from './components/Tabs/Tabs'
import NoteForm from './components/Form/Form'


import {useDispatch} from 'react-redux'
import { getNotes } from './actions/notes'
import Navbarr from './components/Navbar/Navbar';

function App() {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [listView , setListView] = useState(false);

  useEffect(() => {
    dispatch(getNotes());
    console.log("I am fired and id id changed" , currentId)
  }, [dispatch, currentId])

  return (
    <div className="App bg-clr-dark">
      <Container fluid style={{height:"100vh"}}>
        <Row className="whole-app">
          <Col>
                   <Navbarr listView={listView} setListView={setListView} />
                   <NoteForm currentId={currentId} setCurrentId={setCurrentId} />
                   <Tabs currentId={currentId} setCurrentId={setCurrentId} listView={listView} />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
