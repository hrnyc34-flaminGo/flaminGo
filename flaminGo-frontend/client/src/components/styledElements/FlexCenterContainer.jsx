import styled from 'styled-components';

const FlexCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;

export default FlexCenterContainer;
