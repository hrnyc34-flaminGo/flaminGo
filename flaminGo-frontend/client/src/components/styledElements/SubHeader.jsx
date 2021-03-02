import styled from 'styled-components';
import { colors, fonts } from './styleGuid';

export default styled.h5`
  color: ${colors.black};
  font-size: 20px;
  font-weight: ${fonts.semiBold};
  font-family: ${fonts.mainFont};
  margin: ${(props) => props.margin && props.margin};
  text-align: center;
`;

// export default SubHeader
