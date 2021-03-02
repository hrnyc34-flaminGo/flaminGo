import React from 'react';
import Search from './Search';
import Results from './Results';
import Confirmation from './Confirmation';
import axios from 'axios';
import url from '../../../lib/apiPath';

class CheckoutLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPage: true,
      resultsPage: false,
      checkoutConfirmedPage: false,
      inputFirstName: '',
      inputLastName: '',
      inputReservationId: '',
      inputCheckOutDate: '',
      inputRoomNumber: '',
    };
    this.nextPageClickHandler = this.nextPageClickHandler.bind(this);
  }

  nextPageClickHandler(e, firstName, lastName, reservationId, checkOutDate) {
    if (this.state.searchPage === true) {
      let inputParams = {
        firstName,
        lastName,
        // eslint-disable-next-line camelcase
        reservation_id: reservationId,
        checkOut: checkOutDate
      };
      for (let key in inputParams) {
        if (inputParams[key] === '') {
          delete inputParams[key];
        }
      }
      axios
        .get(`${url}/reservations`, { params: inputParams })
        .then(({ data }) => {
          if (data.length === 0) {
            alert('No reservation found.');
          } else if (data.length > 1) {
            alert(
              'Please input more information to narrow reservation search results.'
            );
          } else {
            const roomNumber = data[0].roomNumber;
            const reservationId = data[0]._id;
            const name = data[0].bookingGuest.toUpperCase();
            this.setState({
              searchPage: !this.state.searchPage,
              resultsPage: !this.state.resultsPage,
              inputFirstName: name.split(' ')[0],
              inputLastName: name.split(' ')[1],
              inputReservationId: reservationId,
              inputCheckOutDate: checkOutDate,
              inputRoomNumber: roomNumber,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (this.state.resultsPage === true) {
      const reservationIdToCheckOut = this.state.inputReservationId;
      axios
        .put(`${url}/reservations/checkOut/${reservationIdToCheckOut}`)
        .then(() => {
          this.setState({
            resultsPage: !this.state.resultsPage,
            checkoutConfirmedPage: !this.state.checkoutConfirmedPage,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.searchPage === true ? (
          <Search nextPageClickHandler={this.nextPageClickHandler} />
        ) : this.state.resultsPage === true ? (
          <Results
            inputFirstName={this.state.inputFirstName}
            inputLastName={this.state.inputLastName}
            inputReservationId={this.state.inputReservationId}
            inputRoomNumber={this.state.inputRoomNumber}
            nextPageClickHandler={this.nextPageClickHandler}
          />
        ) : (
          <Confirmation />
        )}
      </div>
    );
  }
}

export default CheckoutLanding;
