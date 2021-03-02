import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) => (props.margin ? props.margin : '10px')};
  width: 328px;
`;

export const FormLabel = styled.label`
  margin-right: 15px;
`;
