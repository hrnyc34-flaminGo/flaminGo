import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styledElements/styleGuid';
import LoginButton from './LoginButton';

const Wrapper = styled.main`
  position: absolute;
  min-height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr) 6fr;
`;

const ColorBar = styled.div`
  min-height: 100%;
  width: 100%;
  grid-area: ${(props) => props.gridArea};
  background-image: ${(props) =>
    `linear-gradient(180deg, ${props.c1}, ${props.c2})`};
`;

const BigSide = styled.main`
  min-height: 100%;
  width: 100%;
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const gradients = {
  clementineToCarrot: 'linear-gradient(135deg, #FF8B03, #FF4F03)',
  carrotToBerry: 'linear-gradient(135deg, #FF4F03, #FF2063)',
  berryToGrape: 'linear-gradient(135deg, #FF2063, #A91CFF)',
};

const Login = () => {
  return (
    <Wrapper>
      <ColorBar
        gridArea='1 / 1 / 2 / 2'
        c1={colors.clementine}
        c2={colors.carrot}
      />
      <ColorBar gridArea='1 / 2 / 2 / 3' c1={colors.carrot} c2={colors.berry} />
      <ColorBar gridArea='1 / 3 / 2 / 4' c1={colors.berry} c2={colors.grape} />
      <BigSide>
        <img
          src='svg/flamingoLogo.svg'
          height='150px'
          style={{ margin: '50px' }}
        ></img>
        <LoginButton />
      </BigSide>
    </Wrapper>
  );
};

export default Login;
