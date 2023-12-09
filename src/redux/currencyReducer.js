import { EMPTY, GET_COUNTRY_SUCCESS, IS_ERROR, IS_LOADING } from "./actionType"

const initState = {
    isLoading:false,
    countries: [],
    isError: false,
    error: "",
}

export const currencyReducer = (state=initState,{type,payload}) => {
    switch(type){
        case GET_COUNTRY_SUCCESS: return {...state,countries:payload,isLoading:false, isError:false}
        case IS_ERROR: return {isError:true,error:payload,isLoading:false, countries: []}
        case IS_LOADING: return {...state,isLoading: true};
        case EMPTY: return {...state,countries:[],isError:false,isLoading:false}
        default: return state
    }
}