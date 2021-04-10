import React, { useState } from 'react';

import './sign-in.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={onSubmitForm}>
        <input type="email" name="email" required value={email} onChange={handleChangeInput} />
        <label htmlFor="email">Email</label>
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChangeInput}
        />
        <label htmlFor="password">Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
