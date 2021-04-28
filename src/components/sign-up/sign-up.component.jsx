import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, storeUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSubmitForm = async (event) => {
    const { displayName, email, password, confirmPassword } = userData;
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password not match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await storeUserProfileDocument(user, { displayName });
      setUserData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (e) {
      console.log('Error:', e);
    }
  };

  const handleChangeInput = (event) => {
    const { value, name } = event.target;
    setUserData((state) => ({
      ...state,
      [name]: value,
    }));
  };
  return (
    <div className="sign-up">
      <h2 className="title">Don't have any account</h2>
      <p>Sign up with your details</p>
      <form onSubmit={onSubmitForm}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          required
          value={userData?.displayName}
          onChange={handleChangeInput}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={userData?.email}
          onChange={handleChangeInput}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          required
          value={userData?.password}
          onChange={handleChangeInput}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          required
          value={userData?.confirmPassword}
          onChange={handleChangeInput}
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
