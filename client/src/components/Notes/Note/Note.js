import React from "react";
import { Card } from "react-bootstrap";
import "./Note.css";

function Note({ handleModal, note, setCurrentId }) {
  return (
    <Card
      style={{
        border: "0.5px solid #e8eaed",
        borderRadius: "5px",
        boxShadow:
          "0, 1px, 2px, 0, rgb(0 0 0 / 60%), 0, 2px, 6px, 2px, rgb(0 0 0 / 30%)",
        backgroundColor: note.backgroundColor,
      }}
      onClick={() => {
        setCurrentId(note._id);
        handleModal();
      }}
    >
      {note.selectedFile && (
        <Card.Img
          variant="top"
          src={note.selectedFile}
          alt="The Note Uploaded by user"
        />
      )}
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text style={{ paddingBottom: "6px" }}>{note.message}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Note;
