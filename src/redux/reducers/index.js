import  ip from './ip'

import ua from './ua'

import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    ip: ip,
    ua: ua
})

export default rootReducers