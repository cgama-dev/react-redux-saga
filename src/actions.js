export const loadDataRequest = () => {
    return {
        type: 'LOAD_DATA_REQUEST'
    }
}
export const loadDataResponse = (data) => {
    return {
        type: 'LOAD_DATA_RESPONSE',
        data
    }
}
export const loadDataUARequest = () => {
    return {
        type: 'LOAD_DATA_UA_REQUEST'
    }
}
export const loadDataUAResponse = (data) => {
    return {
        type: 'LOAD_DATA_UA_RESPONSE',
        data
    }
}
