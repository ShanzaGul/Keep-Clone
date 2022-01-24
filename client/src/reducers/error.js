import {ERROR} from '../constants/actionTypes'

//notes is a reducer
const errorReducer =  (state = {errorMessage:null}, action) => {
    switch (action.type) {
      case ERROR:
        console.log("errrrror", action.error.message)

          return {...state, errorMessage:action.error};
      default:
          return state
    }
  };

  export default errorReducer;