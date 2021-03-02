import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import FlexCenterContainer from '../../styledElements/FlexCenterContainer';
import FrontDeskLanding from '../../frontDesk/FrontDeskLanding';
import HMLanding from '../../maintenance/HMLanding';
import LandingButtons from './MainLandingButtons';
import { MainProvider } from './MainContext';
import ManagementLanding from '../../management/ManagementLanding';
import TimeSheet from '../timeSheet/TimeSheetContainer';

const MainLanding = ({ paths, setPaths }) => {
  const { user } = useAuth0();

  // routs constant to iterate over
  const routs = {
    frontDesk: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    housekeeping: [
      {
        title: 'Housekeeping',
        onClick: () => setPaths('hm'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    maintenance: [
      {
        title: 'Maintenance',
        onClick: () => setPaths('hm'),
      },

      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    management: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },
      { title: 'Housekeeping / Maintenance', onClick: () => setPaths('hm') },
      {
        title: 'Management',
        onClick: () => {
          setPaths('management');
        },
      },
      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
    systemAdministration: [
      {
        title: 'Front Desk',
        onClick: () => setPaths('frontDesk'),
      },
      { title: 'Housekeeping / Maintenance', onClick: () => setPaths('hm') },
      {
        title: 'Management',
        onClick: () => {
          setPaths('management');
        },
      },
      { title: 'Time Sheet', onClick: () => setPaths('timeSheet') },
    ],
  };

  const clickBack = () => setPaths('landing');

  return (
    <MainProvider authUser={user}>
      {paths.frontDesk ? (
        <FrontDeskLanding back={clickBack} />
      ) : paths.hm ? (
        <HMLanding back={clickBack} />
      ) : paths.management ? (
        <ManagementLanding back={clickBack} />
      ) : paths.timeSheet ? (
        <TimeSheet back={clickBack} />
      ) : (
        <FlexCenterContainer marginTop='100px'>
          <LandingButtons routs={routs} />
        </FlexCenterContainer>
      )}
    </MainProvider>
  );
};

export default MainLanding;
