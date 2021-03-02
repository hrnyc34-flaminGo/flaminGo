import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FormButton from '../../styledElements/FormButton';

const LoginButton = (authenticated) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <FormButton
      backgroundColor='berry'
      margin='100px 0'
      onClick={() => loginWithRedirect()}
    >
      Log In
    </FormButton>
  );
};

export default LoginButton;
