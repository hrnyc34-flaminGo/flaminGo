import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import FormButton from '../../styledElements/FormButton';

import {REACT_APP_REDIRECT_URL} from '../../../../../env/config';

const LogoutButton = (authenticated) => {
  const { logout } = useAuth0();

  return (
    <FormButton backgroundColor='berry' onClick={() => logout({
      returnTo: REACT_APP_REDIRECT_URL,
    })}>
      Log Out
    </FormButton>
  );
};

export default LogoutButton;
