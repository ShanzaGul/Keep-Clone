import { ERROR } from "../constants/actionTypes";
import { toast } from "react-toastify";

const customId = "backend-error";

const errorReducer = (state = { errorMessage: null }, action) => {
  switch (action.type) {
    case ERROR:
      toast.error(action.error, {
        position: "bottom-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        autoClose: 5000,
        toastId: customId,
      });
      return { ...state, errorMessage: action.error };
    default:
      return state;
  }
};

export default errorReducer;
