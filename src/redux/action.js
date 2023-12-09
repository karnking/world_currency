import axios from "axios"
import {
    EMPTY,
    GET_COUNTRY_SUCCESS,
    IS_ERROR,
} from "./actionType"

export const getCountry = (currency = '') => async (dispatch) => {
    if (currency == '') {
        dispatch({type:EMPTY})
        return;
    }
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/currency/${currency}?limit=5`)
        if (response.data) dispatch({
            type: GET_COUNTRY_SUCCESS,
            payload: response.data
        })
        else dispatch({
            type: IS_ERROR,
            payload: response.data.message
        })
    } catch (error) {
        dispatch({
            type: IS_ERROR,
            payload: error.response.data.message
        })
    }
}