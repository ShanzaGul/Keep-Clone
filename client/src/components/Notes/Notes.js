import React, { useState } from "react";
import { useSelector } from "react-redux";
import Note from "./Note/Note";
import { Row, Spinner } from "react-bootstrap";
import NoteModal from "./NoteModal";

function Notes({ setCurrentId, currentId }) {
  const notes = useSelector((state) => state.notes);
  console.log(notes, "bro I am here");
  const [modalShow, setModalShow] = useState(false);

  const handleModal = () => {
    setModalShow(true);
  };

  return (
    <div>
      <Row style={{ display: "flex", flexWrap: "wrap", marginTop: "40px" }}>
        {!notes.length ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <>
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
          </>
        )}
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
