import React from 'react';

import MainHeader from './globalComponents/Header.jsx';
import Landing from './globalComponents/landingPage/MainLanding';
import Login from './globalComponents/login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import useChoosePath from './globalComponents/landingPage/useChoosePath.jsx';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
  const { isAuthenticated, user, isLoading } = useAuth0();

  const [paths, setPaths] = useChoosePath({
    management: false,
    hm: false,
    frontDesk: false,
    timeSheet: false,
    landing: true,
  });

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ClipLoader color='#ffffff' loading size={80} />
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated ? (
        <main className='main'>
          <MainHeader back={() => setPaths('landing')} />
          <Landing paths={paths} setPaths={setPaths} />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
