import React, { useState } from 'react';
import styled from 'styled-components';
import FormButton from '../../styledElements/FormButton.jsx';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv.jsx';
import Header from '../../styledElements/ModalTitle';
import FlexCenter from '../../styledElements/FlexCenterContainer';
import FormRow from '../../styledElements/FormRow';

const Spacer = styled.div`
  width: 1px;
  height: 25px;
`;

let GuestInfo = ({ getGuestInfo }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <HalfRoundDiv padding='30px'>
      <FlexCenter>
        <form>
          <Header>Guest Information</Header>
          <FormRow
            onChange={onChange}
            name={'firstName'}
            value={form.firstName}
            width='140px'
            label={'First Name'}
            editMode={true}
            placeholder={'First Name'}
          />
          <Spacer />
          <FormRow
            onChange={onChange}
            name={'lastName'}
            value={form.lastName}
            width='140px'
            label={'Last Name'}
            editMode={true}
            placeholder={'Last Name'}
          />
          <Spacer />
          <FormRow
            onChange={onChange}
            name={'phone'}
            value={form.phone}
            width='140px'
            label={'Phone'}
            editMode={true}
            placeholder={'Phone Number'}
          />
          <Spacer />
          <FormRow
            onChange={onChange}
            name={'email'}
            value={form.email}
            width='140px'
            label={'Email'}
            editMode={true}
            placeholder={'Email'}
          />
          <Spacer />
          <FlexCenter>
            <FormButton
              margin='15px 0 0 0'
              type='submit'
              onClick={(e) => getGuestInfo(e, form)}
              id={'guestInfo'}
            >
              Submit
            </FormButton>
          </FlexCenter>
        </form>
      </FlexCenter>
    </HalfRoundDiv>
  );
};

export default GuestInfo;
