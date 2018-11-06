import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import combineReducers from './reducers'
import sagas from './sagas'


const sagaMiddleware = createSagaMiddleware()

export default createStore(
    combineReducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)