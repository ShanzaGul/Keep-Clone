import React, {useState} from 'react'
import {Tab, Row, Col,Nav} from 'react-bootstrap'
import {AiOutlineBulb, AiOutlineBell} from 'react-icons/ai' 
import {FiEdit2} from 'react-icons/fi'
import {BiArchiveIn} from 'react-icons/bi'

import './Tabs.css'

import Notes from '../Notes/Notes'

function Tabs({currentId, setCurrentId,listView, setTab}) {
  const [key, setKey] = useState('first');
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first"  activeKey={key} onSelect={(k) => {setKey(k); setTab(k); }}>
  <Row>
    <Col sm={12} md={2} lg={2}>
      <Nav variant="pills" className="tabs-nav-layout" >
        <Nav.Item>
          <Nav.Link eventKey="first" className="tabs-nav-link">
              <AiOutlineBulb size="20"/>
              <div style={{marginLeft:"15px"}} className='tabs-nav-op'>Notes</div>
          </Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
          <Nav.Link eventKey="second" className="tabs-nav-link">
              <AiOutlineBell size="20" />
              <div style={{marginLeft:"15px"}} className='tabs-nav-op'>Reminders</div>
          </Nav.Link>
        </Nav.Item> */}

        <Nav.Item>
          <Nav.Link eventKey="third" className="tabs-nav-link">
              <FiEdit2 size="20" />
              <div style={{marginLeft:"15px"}} className='tabs-nav-op'>Edit Labels</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth" className="tabs-nav-link">
              <BiArchiveIn size="20" />
              <div style={{marginLeft:"15px"}} className='tabs-nav-op'>Archive</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>

    <Col >
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <Notes setCurrentId={setCurrentId} currentId={currentId} listView={listView} tab="first" />
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <Notes setCurrentId={setCurrentId} currentId={currentId} listView={listView} tab="third" />
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
        <Notes setCurrentId={setCurrentId} currentId={currentId} listView={listView} tab="fourth" />
        </Tab.Pane>
      </Tab.Content>
    </Col>
    
  </Row>
</Tab.Container>
    )
}

export default Tabs
