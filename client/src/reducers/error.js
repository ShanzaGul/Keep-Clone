import {ERROR} from '../constants/actionTypes'
import {toast} from 'react-toastify'
//notes is a reducer
const errorReducer =  (state = {errorMessage:null}, action) => {
    switch (action.type) {
      case ERROR:
        console.log("errrrror", action.error.message)
        toast.error(action.error.message, {
          position: "bottom-left",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          });
          return {...state, errorMessage:action.error};
      default:
          return state
    }
  };

  export default errorReducer;