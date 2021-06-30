import * as types from './types';

const INITIAL_STATE = {
    loading: true,
    tableData: [],
    error: ''
}

export default function ApiReducer(state=INITIAL_STATE, action) {

    switch(action.type) {

        case types.GET_LIST_URL:
            return {
                ...state,
                loading:true
            }
        case types.GET_LIST_SUCCESS:
            return {
                ...state,
                tableData: action.payload,
                loading:false,
            }
        case types.GET_LIST_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state;
    }
}