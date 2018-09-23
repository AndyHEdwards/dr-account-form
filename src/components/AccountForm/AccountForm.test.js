import React from 'react';
import ReactDOM from 'react-dom';
import AccountForm from './AccountForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
