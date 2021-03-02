import React from 'react';
import FormButton from '../../styledElements/FormButton';
import HalfRoundDiv from '../../styledElements/HalfRoundDiv';
import InputTypeText from '../../styledElements/InputTypeText';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameInput: '',
      lastNameInput: '',
      reservationIdInput: '',
      checkOutDateInput: ''
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <HalfRoundDiv id="mainBox">
        <div className="checkInTitleDiv">Check-Out: Search for Reservations</div>
        <div id="centeredInputBars">
          <label htmlFor="firstNameInput" className="checkOutLabels">First Name</label> <br/>
          <InputTypeText
            name="firstNameInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
            placeholder="e.g. Adam"
          />
          <label htmlFor="lastNameInput" className="checkOutLabels">Last Name</label> <br/>
          <InputTypeText
            name="lastNameInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
            placeholder="e.g. Pollock"
          />
          <label htmlFor="reservationIdInput" className="checkOutLabels">Reservation ID</label> <br/>
          <InputTypeText
            name="reservationIdInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
            placeholder="e.g. last few/several digits such as 85debb"
          />
          <label htmlFor="checkOutDateInput" className="checkOutLabels">Check Out Date</label> <br/>
          <InputTypeText
            name="checkOutDateInput"
            className="inputs"
            width={'90%'}
            onChange={this.inputChangeHandler}
            placeholder="YYYY-MM-DD e.g. 2021-02-21"
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FormButton
            id="searchButtonPlacement"
            onClick={(e) => {
              this.props.nextPageClickHandler(e, this.state.firstNameInput, this.state.lastNameInput, this.state.reservationIdInput, this.state.checkOutDateInput);
            }}>Search
          </FormButton>
        </div>
      </HalfRoundDiv>
    );
  }
}

export default Search;