import { createReducer } from 'reduxsauce'
import { Types } from '../actionsCreators'

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}


export const loadDataUARequest = (state = INITIAL_STATE, action) => {
    return {
        data: [],
        isFetching: true,
        error: false
    }
}
export const loadDataUAResponse = (state = INITIAL_STATE, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}
export const loadDataUAError = (state = INITIAL_STATE, action) => {  
    return {
        data: [],
        isFetching: false,
        error: true
    }
}

export const HANDLERS = {
    [Types.LOAD_DATA_UA_REQUEST]: loadDataUARequest,
    [Types.LOAD_DATA_UA_RESPONSE]: loadDataUAResponse,
    [Types.LOAD_DATA_UA_ERROR]: loadDataUAError
}

export default createReducer(INITIAL_STATE, HANDLERS)