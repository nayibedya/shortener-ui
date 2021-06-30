import * as types from './types';

const INITIAL_STATE = {
    loading: false,
    shortUrl: '',
    error: ''
}

export default function ApiReducer(state=INITIAL_STATE, action) {

    switch(action.type) {

        case types.GET_SHORT_URL:
            return {
                ...state,
                loading:true
            }
        case types.GET_SHORT_URL_SUCCESS:
            return {
                ...state,
                loading:false,
                shortUrl: action.payload
            }
        case types.GET_SHORT_URL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}