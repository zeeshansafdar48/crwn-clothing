import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

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
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={onSubmitForm}>
        <FormInput label="Email" type="email" name="email" required value={email} onChange={handleChangeInput} />
        <FormInput
          type="password"
          name="password"
          label="Password"
          required
          value={password}
          onChange={handleChangeInput}
        />
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
