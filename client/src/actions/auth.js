import {AUTH, ERROR} from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signin = (formData,navigate) => async (dispatch) => {
    try {
        console.log("here in signin")
        const { data } = await api.signin(formData);
        dispatch({ type: AUTH, data });
         
        navigate('/');
    } catch (error) {
        console.log(error,"auth")
        if(error.response){
            console.log(error.response.status)
            if(error.response.status === 400){
                dispatch({type:ERROR, error: error.response.data.message})
            }else if(error.response.status === 404){
                dispatch({type:ERROR, error: error.response.data.message})
            }
            else if(error.response.status === 500){
                dispatch({type:ERROR, error: error.response.data.message})
            }
        }else {
            dispatch({type:ERROR, error: "Something went wrong, try again"})
        }        
       
    }
  
}


export const signup = (formData,navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, data });
    
       navigate('/');
    } catch (error) {
        if(error.response){
            console.log(error.response.status)
            if(error.response.status === 400){
                dispatch({type:ERROR, error: error.response.data.message})
            }

        }else {
            dispatch({type:ERROR, error: "Something went wrong, try again"})
        }    
    }
  
}