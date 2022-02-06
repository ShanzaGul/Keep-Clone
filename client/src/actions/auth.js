import {AUTH, ERROR} from '../constants/actionTypes'
import * as api from '../api/index.js'
import {toast} from 'react-toastify'

export const signin = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signin(formData);

        dispatch({ type: AUTH, data });
         
        navigate('/');
    } catch (error) {
        console.log(error)
        dispatch({type:ERROR, error})
        
       
    }
  
}


export const signup = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, data });
    
       navigate('/');
    } catch (error) {
        console.log(error)
    }
  
}