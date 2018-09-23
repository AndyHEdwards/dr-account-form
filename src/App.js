import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import AccountForm from './components/AccountForm/AccountForm';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      firstName: '',
      lastName: '',
      ern: '',
      ern_exempt: false,
      premiseAddress: '',
      policyStartDate: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleSubmitAccountForm(e) {
    let formData = {
      "title": this.state.title,
      "first_name": this.state.firstName,
      "last_name": this.state.lastName,
      "ern": this.state.ern,
      "ern_exempt": this.state.ern_exempt,
      "premiseAddress": this.state.premiseAddress,
      "policy_start_date": this.state.policyStartDate,
      "password": this.state.password,
      "password_confirmation": this.state.passwordConfirmation,
    }

    e.preventDefault();
    fetch('https://dr-frontend-test-api.herokuapp.com/api/accounts', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    }).then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <AccountForm data={this.state} handleInputChange={this.handleInputChange.bind(this)} />
        <Footer handleSubmit={this.handleSubmitAccountForm.bind(this)}/>
      </div>
    );
  }
}
