import * as api from '../api/index.js'

//Action creators 

export const getNotes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchNotes();
        const action = {type: "FETCH_ALL" , payload: []}
        dispatch(action);
    } catch (error) {
        console.log(error)
    }
  
}