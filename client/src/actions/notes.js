import * as api from '../api/index.js'

//Action creators 

export const getNotes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchNotes();
        const action = {type: "FETCH_ALL" , payload: data}
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
  
}

export const createNote = (note) => async (dispatch) => {
    try {
        const {data} = await api.createNote(note);
        const action = {type: "CREATE" , payload: data}
        dispatch(action);
    } catch (error) {
        console.log(error)
        console.log(error.message)
    }
  
}

export const updateNote = (id,note) => async (dispatch)=>{
    try {
       const {data}= await api.updateNote(id,note);

       dispatch({type:"UPDATE", payload:data})
    } catch (error) {
        console.log(error)
    }
}