import * as api from "../api/index.js";
import { CREATE, UPDATE, FETCH_ALL, DELETE ,FETCH_BY_SEARCH} from "../constants/actionTypes";
import { toast } from "react-toastify";

//Action creators
const customId = "backend-load";
const customError ="error"
const customSearch = "search"

export const getNotes = () => async (dispatch) => {
  try {
    const id = toast.loading("Loading...");
    const response = await api.fetchNotes();
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
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);
  } catch (error) {
    console.log(error);
    toast.error(error.message ? error.message : 'Something went wrong,Try Again Later', {
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
    const id = toast.loading("Loading...");
    const { data: { data } } = await api.fetchNotesBySearch(searchQuery);
    toast.update(id, {
      render: "All is good",
      type: "success",
      isLoading: false,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: customSearch,
    });
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);

   console.log(data)
  } catch (error) {
    console.log(error);
    toast.error( error.message ? error.message : 'Something went wrong,Try Again Later', {
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

export const createNote = (note) => async (dispatch) => {
  try {
    const id = toast.loading("Please Wait...");
    const { data } = await api.createNote(note);
    const action = { type: CREATE, payload: data };
    toast.update(id, {
      render: "Note Added",
      type: "success",
      isLoading: false,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: customSearch,
    });
    dispatch(action);
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);
  } catch (error) {
    console.log(error);
    toast.error( error.message ? error.message : 'Something went wrong,Try Again Later', {
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

export const updateNote = (id, note) => async (dispatch) => {
  try {
    const idd = toast.loading("Updating...");
    const { data } = await api.updateNote(id, note);
    toast.update(idd, {
      render: "Note Updated",
      type: "success",
      isLoading: false,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: customSearch,
    });
    dispatch({ type: UPDATE, payload: data });
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);
  } catch (error) {
    console.log(error);
    toast.error( error.message ? error.message : 'Something went wrong,Try Again Later', {
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

export const deleteNote = (id) => async (dispatch) => {
  try {
    const idd = toast.loading("Deleting...");
    await api.deleteNote(id);
    toast.update(idd, {
      render: "Note Deleted",
      type: "success",
      isLoading: false,
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      toastId: customSearch,
    });
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    toast.error( error.message ? error.message : 'Something went wrong,Try Again Later', {
      position: "top-center",        
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      toastId: customError,
    });
    const myTimeout = setTimeout(    ()=>{toast.dismiss();}, 5000);  }
};
