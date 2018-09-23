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

      <div className='account-form__your-business'>
        <div className='account-form__section-divider'>
          <p className='account-form__section-divider__text'>Your business</p>
          <div className='account-form__divider' />
        </div>

        <label className='account-form__label'>Enployee ERN</label>
        <input
          className='account-form__input'
        />

        <div className='account-form__checkbox'>
          <input id='account-form__ern-checkbox' className='account-form__checkbox-input' type="checkbox" />
          <span></span>
          <label className='account-form__checkbox-label' htmlFor='account-form__ern-checkbox'>We're either exempt from having an ERN or we can provide it within 30 days</label>
        </div>

        <label className='account-form__label'>Premise address</label>
        <textarea
          className='account-form__input account-form__textarea'
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
        />

        <label className='account-form__label'>Confirm account password</label>
        <input
          className='account-form__input'
          type='password'
        />
      </div>

    </div>
  );
}

export default AccountForm;
