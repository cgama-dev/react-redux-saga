import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
    //Actions creators IP
    loadDataRequest: null,
    loadDataResponse: ['data'],
    loadDataError: null,
    
    //Actions creators UA
    loadDataUaRequest: null,
    loadDataUaResponse: ['data'],
    loadDataUaError: null

})

export default Creators
