import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'

import combineReducers from './reducers/index'

import Info from './Info'

import createSagaMiddleware from 'redux-saga'


import index from './sagas/index'
import UserAgent from './UserAgent';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(index)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Hello</h1>
          <Info />
          <UserAgent />
        </div>
      </Provider>
    );
  }
}

export default App;
