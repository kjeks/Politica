import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/router/MainRouter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MainRouter/>
      </BrowserRouter>
    );
  }
}

export default App;
