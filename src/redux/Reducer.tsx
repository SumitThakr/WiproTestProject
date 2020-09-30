import { GET_DATA, GET_DATA_FULFILLED, GET_DATA_REJECTED } from "../constants";
import { initialState } from "./InitialStates";

//Reducer that will return the initialState by default
export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA: 
        return {...state, loading: action.payload};
        case GET_DATA_FULFILLED:
        return {...state, data: action.payload, loading: action.loading};
        case GET_DATA_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}