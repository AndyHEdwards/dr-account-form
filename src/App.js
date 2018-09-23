import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import AccountForm from './components/AccountForm/AccountForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AccountForm />
      </div>
    );
  }
}

export default App;
