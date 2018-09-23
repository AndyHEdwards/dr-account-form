import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import AccountForm from './components/AccountForm/AccountForm';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AccountForm />
        <Footer />
      </div>
    );
  }
}

export default App;
