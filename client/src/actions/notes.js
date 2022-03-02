import * as api from "../api/index.js";
import { CREATE, UPDATE, FETCH_ALL, DELETE } from "../constants/actionTypes";
import { toast } from "react-toastify";

//Action creators
const customId = "backend-load";
const customError ="error"

export const getNotes = () => async (dispatch) => {
  try {
    const id = toast.loading("Please wait...");
    const response = await api.fetchNotes();
    console.log(response, "res");
    const data = response?.data;
    const action = { type: FETCH_ALL, payload: data };
    toast.update(id, {
      render: "All is good",
      type: "success",
      isLoading: false,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: customId,
    });
    dispatch(action);
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 7000);
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong,Try Again Later', {
        position: "top-center",        
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        toastId: customError,
      });

      const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);
    }
};


export const getNotesBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data: { data } } = await api.fetchNotesBySearch(searchQuery);
   console.log(data)
  } catch (error) {
    console.log(error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data : {data} } = await api.createNote(note);
    const action = { type: CREATE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
};

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    await api.deleteNote(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
