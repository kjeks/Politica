import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/router/MainRouter';
import reducers from './reducers';

class App extends Component {
  render() {
    let store = createStore(reducers);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MainRouter/>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
