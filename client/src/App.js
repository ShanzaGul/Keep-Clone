import React from 'react'
import "./App.css";
import {useEffect} from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Navbar from './components/Navbar/Navbar'
import Tabs from './components/Tabs/Tabs'

import {useDispatch} from 'react-redux'
import { getNotes } from './actions/notes'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  return (
    <div className="App bg-clr-dark" style={{ height: '100%', position: 'absolute', left: '0px', width: '100%', overflow: 'hidden'}}>
      <Container fluid>
        <Row className="whole-app">
          <Col>
                   <Navbar />
                   <Tabs />

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
