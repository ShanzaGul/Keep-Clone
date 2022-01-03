import React from 'react'
import {Tab, Row, Col,Nav} from 'react-bootstrap'
import {AiOutlineBulb, AiOutlineBell} from 'react-icons/ai' 
import {FiEdit2} from 'react-icons/fi'
import {BiArchiveIn} from 'react-icons/bi'

import './Tabs.css'

import NoteForm from '../Form/Form'
import Notes from '../Notes/Notes'

function Tabs({currentId, setCurrentId}) {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={1} md={2} lg={2}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first" className="tabs-nav-link">
              <AiOutlineBulb size="20"/>
              <div style={{marginLeft:"15px"}}>Notes</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second" className="tabs-nav-link">
              <AiOutlineBell size="20" />
              <div style={{marginLeft:"15px"}}>Reminders</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third" className="tabs-nav-link">
              <FiEdit2 size="20" />
              <div style={{marginLeft:"15px"}}>Edit Labels</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth" className="tabs-nav-link">
              <BiArchiveIn size="20" />
              <div style={{marginLeft:"15px"}}>Archive</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
    <NoteForm currentId={currentId} setCurrentId={setCurrentId} />
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Notes setCurrentId={setCurrentId} currentId={currentId}  />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h2>hiiiiiiiiiii</h2>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    )
}

export default Tabs
