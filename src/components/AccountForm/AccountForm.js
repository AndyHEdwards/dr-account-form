import React from 'react';
import './AccountForm.css';

const AccountForm = (props) => {
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
        <select className='account-form__input account-form__select'>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <label className='account-form__label'>Frist Name</label>
        <input
          className='account-form__input'
        />

        <label className='account-form__label'>Last Name</label>
        <input
          className='account-form__input'
        />
      </div>
    </div>
  );
}

export default AccountForm;
