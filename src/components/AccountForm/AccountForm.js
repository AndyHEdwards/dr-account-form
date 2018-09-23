import React from 'react';
import './AccountForm.css';

export default class AccountForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      firstName: '',
      lastName: '',
      employeeERN: '',
      exemptERN: false,
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

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div id='account-form'>
        <p className='account-form__heading'>One last step</p>
        <p>To save your quote and process your policy, we’ll need you to confirm your details</p>
        <div className='account-form__divider' />

        <div className='account-form__your-details'>
          <div className='account-form__section-divider'>
            <p className='account-form__section-divider__text'>Your details</p>
            <div className='account-form__divider' />
          </div>

          <label className='account-form__label'>Title</label>
          <select className='account-form__input account-form__select' name='title' value={this.state.title} onChange={this.handleInputChange.bind(this)}>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <label className='account-form__label'>Frist Name</label>
          <input
            className='account-form__input'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleInputChange.bind(this)}
          />

          <label className='account-form__label'>Last Name</label>
          <input
            className='account-form__input'
            name='lastName'
            value={this.state.lastName}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

        <div className='account-form__your-business'>
          <div className='account-form__section-divider'>
            <p className='account-form__section-divider__text'>Your business</p>
            <div className='account-form__divider' />
          </div>

          <label className='account-form__label'>Enployee ERN</label>
          <input
            className='account-form__input'
            name='employeeERN'
            value={this.state.employeeERN}
            onChange={this.handleInputChange.bind(this)}
          />

          <div className='account-form__checkbox'>
            <input
              id='account-form__ern-checkbox'
              className='account-form__checkbox-input'
              type="checkbox"
              name='exemptERN'
              value={this.state.exemptERN}
              onChange={this.handleInputChange.bind(this)}
            />
            <span></span>
            <label className='account-form__checkbox-label' htmlFor='account-form__ern-checkbox'>We're either exempt from having an ERN or we can provide it within 30 days</label>
          </div>

          <label className='account-form__label'>Premise address</label>
          <textarea
            className='account-form__input account-form__textarea'
            name='premiseAddress'
            value={this.state.premiseAddress}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

        <div className='account-form__your-policy'>
          <div className='account-form__section-divider'>
            <p className='account-form__section-divider__text'>Your policy</p>
            <div className='account-form__divider' />
          </div>

          <label className='account-form__label'>Policy start date</label>
          <input
            className='account-form__input'
            type='date'
            name='policyStartDate'
            value={this.state.policyStartDate}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

        <div className='account-form__your-account'>
          <div className='account-form__section-divider'>
            <p className='account-form__section-divider__text'>Your account</p>
            <div className='account-form__divider' />
          </div>

          <label className='account-form__label'>Account password</label>
          <input
            className='account-form__input'
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange.bind(this)}
          />

          <label className='account-form__label'>Confirm account password</label>
          <input
            className='account-form__input'
            type='password'
            name='passwordConfirmation'
            value={this.state.passwordConfirmation}
            onChange={this.handleInputChange.bind(this)}
          />
        </div>

      </div>
    );
  }
}
