
const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

export const ua = ((state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "LOAD_DATA_UA_REQUEST":
            return {
                data: [],
                isFetching: true,
                error: false
            }
        case "LOAD_DATA_UA_RESPONSE":
            return {
                data: action.data,
                isFetching: false,
                error: false
            }
        default:
            return state
    }
})


