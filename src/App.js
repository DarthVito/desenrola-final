import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Botao from './Botao'

class App extends Component {

  state={
      target:''

  }


  render() {

    const { cor } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Botao cor={cor} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target={this.state.target}
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default (App);
