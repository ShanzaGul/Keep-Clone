import React from "react";

import { useEffect, useState, useRef } from "react";
import {
  Form,
  Button,
  Modal,
  Dropdown,
  Badge,
  Tooltip,
  OverlayTrigger
} from "react-bootstrap";
import { MdOutlineColorLens, MdLabelOutline } from "react-icons/md";
import { BiImage, BiArchiveIn } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateNote, deleteNote } from "../../actions/notes";
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

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

function NoteModal(props) {
  const [baseImage, setBaseImage] = useState("");
  const note = useSelector((state) =>
    props.currentId
      ? state.notes.find((message) => message._id === props.currentId)
      : null
  );
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {NoteData.archive ? "Unarchive" : "Archive"}
    </Tooltip>
  );

  const renderTooltipBg = (props) => (
    <Tooltip id="button-tooltip-bg" {...props}>
      Background
    </Tooltip>
  );

  const renderTooltipCol = (props) => (
    <Tooltip id="button-tooltip-color" {...props}>
      Color
    </Tooltip>
  );

  const renderTooltipLab = (props) => (
    <Tooltip id="button-tooltip-label" {...props}>
      Label
    </Tooltip>
  );


  const user = JSON.parse(localStorage.getItem("profile"));

  const [NoteData, setNoteData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    creator: "",
    label: [],
    backgroundColor: "#202124",
    archive: false,
  });

  useEffect(() => {
    if (note) {
      setNoteData(note);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateNote(props.currentId, { ...NoteData, name: user?.result?.name })
    );
    props.setCurrentId(null);
  };

  const handleDelete = () => {
    dispatch(deleteNote(NoteData._id));
    props.setCurrentId(null);
  };

  const handleLabel = (lab) => {
    const newLabelArray = NoteData.label.filter((value) => {
      return value !== lab;
    });
    setNoteData({ ...NoteData, label: newLabelArray });
  };

  const imageSelector = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setNoteData({ ...NoteData, selectedFile: base64 });
  };

  const handleImage = () => {
    document.getElementById("selectfile").click();
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      {...props}
      onExit={() => {
        setLabel("");
      }}
    >
      <Modal.Body
        style={{ backgroundColor: "rgb(32, 33, 36)", padding: "0px" }}
      >
        <Form
          style={{
            border: "0.5px solid #e8eaed",
            borderRadius: "5px",
            boxShadow:
              "0, 1px, 2px, 0, rgb(0 0 0 / 60%), 0, 2px, 6px, 2px, rgb(0 0 0 / 30%)",
          }}
          onSubmit={(e) => {
            handleSubmit(e);
            props.onHide();
          }}
        >
          <div
            style={{
              backgroundColor: NoteData.backgroundColor,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={props.onHide}
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <IoMdClose />
            </Button>

            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
              }}
              onClick={() => {
                props.onHide();
                handleDelete();
              }}
            >
              <MdDeleteOutline />
            </Button>
          </div>

          {NoteData.selectedFile && (
            <img
              src={NoteData.selectedFile}
              alt="The Note Uploaded by user"
              style={{ height: "300px", width: "100%" }}
            ></img>
          )}
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Title"
              className="form-control-title"
              value={NoteData.title}
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "500px",
                border: "none",
                backgroundColor: NoteData.backgroundColor,
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
              onChange={(e) => {
                setNoteData({ ...NoteData, title: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Take a note..."
              className="form-control-text"
              value={NoteData.message}
              style={{
                backgroundColor: NoteData.backgroundColor,
                height: "130px",
              }}
              onChange={(e) => {
                setNoteData({ ...NoteData, message: e.target.value });
              }}
            />
            <Form.Group
              style={{
                display: "flex",
                flexWrap: "wrap",
                color: "white",
                backgroundColor: NoteData.backgroundColor,
              }}
            >
              {NoteData.label.length > 0 &&
                NoteData.label.map((lab) => (
                  <>
                    <Badge
                      pill
                      bg="dark"
                      style={{ marginLeft: "5px", marginBottom: "5px" }}
                    >
                      {lab}
                    </Badge>
                  </>
                ))}
            </Form.Group>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* <Button className="btn-navbar">
                    <AiOutlineBell />
                  </Button>                  */}
              <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 300 }}
                  overlay={renderTooltipCol}
                >
              <Dropdown
                onSelect={(e) =>
                  setNoteData({ ...NoteData, backgroundColor: e })
                }
              >
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
                      <Dropdown.Item
                        eventKey={color}
                        className="drop-item"
                        key={color}
                      >
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
              </OverlayTrigger>

              <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 300 }}
                  overlay={renderTooltipBg}
                >
              <Button className="btn-navbar" onClick={handleImage}>
                <BiImage />
                <input
                  id="selectfile"
                  type="file"
                  onChange={imageSelector}
                  style={{ display: "none" }}
                ></input>
              </Button>
              </OverlayTrigger>

              <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 300 }}
                  overlay={renderTooltip}
                >
              <Button
                className="btn-navbar"
                onClick={() => {
                  setNoteData((NoteData) => ({
                    ...NoteData,
                    archive: !NoteData.archive,
                  }));
                }}
              >
                <BiArchiveIn />
              </Button>
              </OverlayTrigger>
             
              <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 300 }}
                  overlay={renderTooltipLab}
                >
              <Dropdown>
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
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Form.Control
                      type="text"
                      placeholder="Add label"
                      className="form-control-title"
                      value={label}
                      style={{
                        color: "white",
                        fontSize: "12px",
                        fontWeight: "500px",
                        backgroundColor: "inherit",
                      }}
                      onChange={(e) => {
                        setLabel(e.target.value);
                      }}
                    />
                    {/* Here I have got to check if the label already exist or not if it does then dont show the create add button*/}
                    <Button
                      size="sm"
                      className="btn-navbar"
                      onClick={() => {
                        if (label.length !== 0) {
                          NoteData.label.push(label);
                          setLabel("");
                        }
                      }}
                    >
                      {" "}
                      <IoMdAdd />
                    </Button>
                  </div>
                  {NoteData.label.length &&
                    NoteData.label.map((lab) => {
                      return (
                        <Dropdown.Item
                          eventKey={lab}
                          style={{
                            fontSize: "12px",
                            color: "white",
                            backgroundColor: "rgb(59, 60, 65)",
                          }}
                        >
                          <Button
                            size="sm"
                            className="btn-navbar"
                            style={{ marginRight: "2px" }}
                            onClick={() => {
                              handleLabel(lab);
                            }}
                          >
                            {" "}
                            <IoMdClose size="12" />
                          </Button>
                          {lab}
                        </Dropdown.Item>
                      );
                    })}
                </Dropdown.Menu>
              </Dropdown>
              </OverlayTrigger>
              <div>
                <Button
                  variant="outline-light"
                  size="sm"
                  type="submit"
                  style={{ fontSize: "12px", marginTop: "5px" }}
                >
                  Save
                </Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NoteModal;
