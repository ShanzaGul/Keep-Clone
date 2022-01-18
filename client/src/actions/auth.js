import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (form,navigate) => async (dispatch) => {
    try {
       navigate('/');
    } catch (error) {
        console.log(error)
    }
  
}


export const signup = (form,navigate) => async (dispatch) => {
    try {
       navigate('/');
    } catch (error) {
        console.log(error)
    }
  
}