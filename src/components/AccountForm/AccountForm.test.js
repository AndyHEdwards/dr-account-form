import React from 'react';
import ReactDOM from 'react-dom';
import AccountForm from './AccountForm';

let formData = {
  title: 'Mr',
  firstName: 'Test',
  lastName: 'Person',
  ern: '123456',
  ern_exempt: false,
  premiseAddress: '123 Faker street',
  policyStartDate: '2018-08-08',
  password: 'password',
  passwordConfirmation: 'password'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountForm data={formData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
