import React from 'react'
import {Button, Form, Dropdown,Col,Modal} from 'react-bootstrap'
import './Note.css'


const backgroundColors = [
    "#5c2b29",
    "#614a19",
    "#635d19",
    "#345920",
    "#16504b",
    "#2d555e",
    "#42275e",
    "#5b2245",
  ];

  const handleTextArea = (e)=>{
    const txt = document.getElementById("textareaNote");
    txt.addEventListener("keyup", (e)=>{
        txt.style.height = "63px"
        let scHeight = e.target.scrollHeight;
        txt.style.height = `${scHeight}px`;
        
    })
  }

 

function Note({handleModal,note,setCurrentId}) {
    return (
      
            <Col lg={3} md={4} sm={12} >
          <Form
            style={{
              border: "0.5px solid #e8eaed",
              borderRadius: "5px",
              boxShadow:
                "0, 1px, 2px, 0, rgb(0 0 0 / 60%), 0, 2px, 6px, 2px, rgb(0 0 0 / 30%)",
            }}
            onClick={()=>{setCurrentId(note._id); handleModal()}}
          >
            {note.selectedFile && <img src={note.selectedFile} alt="The Note Uploaded by user" style={{height:"300px" , width:"100%"}}></img>}
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Title"
                className="form-control-title"
                value={note.title}
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "500px",
                  border: "none",
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  backgroundColor:note.backgroundColor
                }}
                disabled
              />
            </Form.Group>
              <Form.Group >
                <Form.Control
                id="textareaNote"
                  as="textarea"
                  placeholder="Take a note..."
                  className="form-control-text"
                  value={note.message}
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "400px",
                    border: "none",
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    backgroundColor: note.backgroundColor,
                  }}
                  onChange={(e)=>{handleTextArea(e)}}
                  disabled
                />
                {/* label ki jaga add karni hai yahan*/}
               
              </Form.Group>
            
          </Form>
          </Col>
    )
}

export default Note
