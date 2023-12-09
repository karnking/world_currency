import { GET_COUNTRY_SUCCESS, GET_FLAG_CODE_SUCCESS, IS_ERROR, IS_LOADING } from "./actionType"

const initState = {
    isLoading:false,
    countries: [],
    isError: false,
    error: "",
    flagCodes:{}
}

export const currencyReducer = (state=initState,{type,payload}) => {
    switch(type){
        case GET_COUNTRY_SUCCESS: return {...state,countries:payload,isLoading:false}
        case GET_FLAG_CODE_SUCCESS: return {...state,flagCodes:payload,isLoading:false}
        case IS_ERROR: return {...state,isError:true,error:payload,isLoading:false, countries: []}
        case IS_LOADING: return {...state,isLoading: true};
        default: return state
    }
}