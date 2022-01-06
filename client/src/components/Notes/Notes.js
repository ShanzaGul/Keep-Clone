import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Note from "./Note/Note";
import { Row, Spinner,Col } from "react-bootstrap";
import NoteModal from "./NoteModal";
import StackGrid from 'react-stack-grid'

function Notes({ setCurrentId, currentId,listView }) {
  const notes = useSelector((state) => state.notes);
  console.log(notes, "bro I am here");
  const [modalShow, setModalShow] = useState(false);

  

  const handleModal = () => {
    setModalShow(true);
  };

  useEffect(() => {
    console.log("i changed")
  }, [listView])

  return (
    <div>
      <Row style={{ marginTop: "40px" }}>
        <Col lg={listView ? {offset:2,span:7} : 12}>
        {!notes.length ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (<> 
          {!listView ? <StackGrid columnWidth={220} gutterWidth={15} gutterHeight={15}>
            {notes.map((note) => {
              return (
                <Note
                  setCurrentId={setCurrentId}
                  handleModal={handleModal}
                  key={note._id}
                  note={note}
                />
              );
            })} 
            </StackGrid>:  <>
            {notes.map((note) => {
              return (
                <div style={{marginBottom:"10px"}}>
                <Note
                  setCurrentId={setCurrentId}
                  handleModal={handleModal}
                  key={note._id}
                  note={note}
                />
                </div>
              );
            })}</> }

          </>)
        }
        </Col>
      </Row>
      <NoteModal
        currentId={currentId}
        show={modalShow}
        onHide={() => setModalShow(false)}
        notes={notes}
      />
    </div>
  );
}

export default Notes;