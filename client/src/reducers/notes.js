import { CREATE, UPDATE, FETCH_ALL, DELETE,} from "../constants/actionTypes";

//notes is a reducer
const notes = (notes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...notes, action.payload];
    case UPDATE:
      return notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    case DELETE:
      return notes.filter((note) => note._id !== action.payload);
    default:
      return notes;
  }
};

export default notes;
