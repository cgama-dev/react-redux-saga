import React, { Component } from 'react';

import { Provider } from 'react-redux'

import Info from './Info'

import UserAgent from './UserAgent';

import store from './redux/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Sejam bem vindos!</h1>
              <p>Aplicação simples utilizando <b>React, Redux-Saga, ReduxSauce </b></p>
              <Info />
              <br/>
              <br/>
	      <br/>
              <UserAgent />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
