import React from "react";
import { useEffect, useRef, useState } from "react";
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineColorLens, MdLabelOutline } from "react-icons/md";
import { BiImage, BiArchiveIn } from "react-icons/bi";
import FileBase from 'react-file-base64'
import "./Form.css";

export const useOnOutsideClick = (handleOutsideClick) => {
  const innerBorderRef = useRef();

  const onClick = (event) => {
    if (
      innerBorderRef.current &&
      !innerBorderRef.current.contains(event.target)
    ) {
      handleOutsideClick();
    }
  };

  useMountEffect(() => {
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  });

  return { innerBorderRef };
};


const useMountEffect = (a) => useEffect(a, []);

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


function NoteForm({ currentMode, changeContactAppMode }) {
  const [open, setOpen] = useState(false);
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false));
  const [imgFile, setUploading] = useState("");

  const [NoteData, setNoteData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    creator: "",
    label: [],
    backgroundColor: "#202124",
    archive: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  


 const imageSelector = (e) =>{
   if(e.target.files[0] !== 0){
  setUploading(URL.createObjectURL(e.target.files[0]))
   }
 }

 const handleImage = () =>{
   document.getElementById('selectfile').click();
 }




  
  return (
    <div>
      <Row>
        <Col md={{ span: 7, offset: 2 }} sm={12}>
          <Form
            style={{
              border: "0.5px solid #e8eaed",
              borderRadius: "5px",
              boxShadow:
                "0, 1px, 2px, 0, rgb(0 0 0 / 60%), 0, 2px, 6px, 2px, rgb(0 0 0 / 30%)",
            }}
            onSubmit={handleSubmit}
          >
            {imgFile && <img src={imgFile} alt="The Note Uploaded by user" style={{height:"300px" , width:"100%"}}></img>}
            <Form.Group
              onClick={() => {
                setOpen(true);
              }}
            >
              <Form.Control
                type="text"
                placeholder={open ? "Title" : "Take a note"}
                className="form-control-title"
                value={NoteData.title}
                style={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "500px",
                  border: "none",
                  backgroundColor:NoteData.backgroundColor,
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }}
                onChange={(e)=>{setNoteData({...NoteData, title:e.target.value })}}
              />
            </Form.Group>
            {open && (
              <Form.Group ref={innerBorderRef}>
                <Form.Control
                  as="textarea"
                  placeholder="Take a note..."
                  className="form-control-text"
                  value={NoteData.message}
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "400px",
                    border: "none",
                    backgroundColor: NoteData.backgroundColor,
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                  }}
                  onChange={(e)=>{setNoteData({...NoteData, message:e.target.value})}}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Button className="btn-navbar">
                    <AiOutlineBell />
                  </Button>                 
                  <Dropdown onSelect={(e)=> setNoteData({...NoteData, backgroundColor:e})}>
                    <Dropdown.Toggle className="btn-navbar">
                      <MdOutlineColorLens />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        borderRadius: "10px 10px 10px 10px",
                        border: "1px solid #6c757d",
                      }}
                      className="bg-clr-dark"
                    >
                      {backgroundColors.map((color) => {
                        return (
                          <Dropdown.Item eventKey={color} className="drop-item">
                            <div
                              style={{
                                height: "20px",
                                width: "20px",
                                borderRadius: "50%",
                                backgroundColor: color,
                              }}
                            ></div>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button className="btn-navbar" onClick={handleImage}>
                    <BiImage />
                    <input id="selectfile" type="file" onChange={imageSelector} style={{display:"none"}}></input>
                  </Button>
                  <Button className="btn-navbar" onClick={()=>{setNoteData(NoteData =>({...NoteData, archive: !NoteData.archive}) )}}>
                    <BiArchiveIn />
                  </Button>
                  <Button className="btn-navbar">
                    <MdLabelOutline />
                  </Button>

                  <Dropdown >
                    <Dropdown.Toggle className="btn-navbar">
                      <MdLabelOutline />
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        borderRadius: "10px 10px 10px 10px",
                        border: "1px solid #6c757d",
                      }}
                      className="bg-clr-dark"
                    >
                      <label>Label Note</label>
                      <input type="text" name="label"></input>
                     {/* Here I have got to check if the label already exist or not if it does then dont show the create add button*/}
                     <Button>+ Create </Button>
                     {/*
                      {backgroundColors.map((color) => {
                        return (
                          <Dropdown.Item eventKey={color} className="drop-item">
                            <div
                              style={{
                                height: "20px",
                                width: "20px",
                                borderRadius: "50%",
                                backgroundColor: color,
                              }}
                            ></div>
                          </Dropdown.Item>
                        );
                      })}
                    */}

                    </Dropdown.Menu>
                  </Dropdown>
                  <div
                    style={{
                      marginRight: "10px",
                      marginLeft: "auto",
                      padding: "1px",
                    }}
                  >
                    <Button variant="outline-light">Save</Button>
                  </div>
                </div>
              </Form.Group>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default NoteForm;
