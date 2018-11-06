import { createReducer } from 'reduxsauce'

import { Types } from '../actionsCreators'

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

export const loadDataRequest = (state = INITIAL_STATE, action) => {
    return {
        data: [],
        isFetching: true,
        error: false
    }
}
export const loadDataResponse = (state = INITIAL_STATE, action) => {
    return {
        data: action.data,
        isFetching: false,
        error: false
    }
}
export const loadDataError = (state = INITIAL_STATE, action) => {
    return {
        data: [],
        isFetching: false,
        error: true
    }
}

export const HANDLERS = {
    [Types.LOAD_DATA_REQUEST]: loadDataRequest,
    [Types.LOAD_DATA_RESPONSE]: loadDataResponse,
    [Types.LOAD_DATA_ERROR]: loadDataError
}

export default createReducer(INITIAL_STATE, HANDLERS)

