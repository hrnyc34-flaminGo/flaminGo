import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../dist/styles/index.scss';
import { Auth0Provider } from '@auth0/auth0-react';

import {REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUDIENCE} from '../../env/config';

ReactDOM.render(
  <Auth0Provider
    domain={REACT_APP_AUTH0_DOMAIN}
    clientId={REACT_APP_AUTH0_CLIENT_ID}
    // audience={REACT_APP_AUDIENCE}
    redirectUri={window.location.origin}
  >
    <App projectName="flaminGo" />
  </Auth0Provider>
  , document.getElementById('app'));
