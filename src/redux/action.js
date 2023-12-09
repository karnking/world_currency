import axios from "axios"
import { GET_COUNTRY_SUCCESS, GET_FLAG_CODE_SUCCESS, IS_ERROR, IS_LOADING } from "./actionType"

export const getCountry = (currency='') => async(dispatch) =>{
    dispatch({type:IS_LOADING})
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${currency}`)
        if(response.data) dispatch({type:GET_COUNTRY_SUCCESS,payload:response.data})
        else dispatch({type:IS_ERROR,payload:response.message})
    }catch(error){
        console.log(error)
        dispatch({type:IS_ERROR,payload:error.message})
    }
}
export const getFlags = () => async(dispatch) => {
    dispatch({type:IS_LOADING})
    try{
        const response = await axios.get('https://flagcdn.com/en/codes.json')
        if(response.data) dispatch({type:GET_FLAG_CODE_SUCCESS,payload:response.data})
        else dispatch({type:IS_ERROR,payload:response.error})
    }catch(error){
        console.log(error)
        dispatch({type:IS_ERROR,payload:error.message})
    }
}