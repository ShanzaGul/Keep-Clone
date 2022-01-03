import React from 'react'
import "./App.css";
import {useEffect,useState} from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Navbar from './components/Navbar/Navbar'
import Tabs from './components/Tabs/Tabs'

import {useDispatch} from 'react-redux'
import { getNotes } from './actions/notes'

function App() {

  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div className="App bg-clr-dark">
      <Container fluid>
        <Row className="whole-app">
          <Col>
                   <Navbar />
                   <Tabs currentId={currentId} setCurrentId={setCurrentId} />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
