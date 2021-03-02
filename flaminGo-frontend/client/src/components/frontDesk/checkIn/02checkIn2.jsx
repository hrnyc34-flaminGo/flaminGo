import React, {useState} from "react";
import HalfRoundDiv from "../../styledElements/HalfRoundDiv.jsx";
import FormButton from "../../styledElements/FormButton.jsx";



let TitleTableCheckIn = () => {
  return (
    <table className="titleTableMini">
      <thead>
      <tr>
        <th>Reservation Number</th>
        <th>Guest Name</th>
        <th>Reservation Dates</th>
      </tr>
      </thead>
    </table>
  );
};

const ListEntryMini = ({reservation, addPage, updateSelectedReservation, value}) => {
  const [clicked, setClicked] = useState(false);
  const updateClicked = () => {
    setClicked((prevClicked) => !prevClicked)
  }

  if (clicked) {
    console.log('clicked', "index:", value)
  }

  return (
    <div
    id="listEntryMini"
    onClick={(e) => {
      updateClicked();
      updateSelectedReservation(value);
      addPage();
    }}>
      <span className="listEntryText"><EntryTableReservations reservation={reservation}/></span>
    </div>

  )

};

let EntryTableReservations = ({reservation}) => {

  let name = reservation.bookingGuest;
  let checkIn = reservation.checkIn;
  let checkOut = reservation.checkOut;
  let id = reservation._id


  return (
    <table className="entryTableMini">
      <tbody>
      <tr>
        <th>{id}</th>
        <th>{name}</th>
        <th>{checkIn} - {checkOut}</th>
      </tr>
      </tbody>
    </table>
  );
}

const CheckInReservationList = ({name, resId, reservationData, addPage, subtractPage, updateSelectedReservation}) => {

  if (reservationData.length === 0) {
    return (
        <HalfRoundDiv
          margin="0 30px 0 30px"
          id="reservationOuterContainer"
        >
          <div id="reservationInnerContainer">
            <div id="listEntriesHeaderMini"><TitleTableCheckIn/></div>
                No results found
          </div>
          <FormButton className='searchButtonPlacement' onClick={subtractPage}> Back</FormButton>
        </HalfRoundDiv>
    );
  }

  return (

      <HalfRoundDiv
        margin="0 30px 30px 30px"
        id="reservationOuterContainer"
        width="1200px"
      >
        <div id="checkIn2Container">
        <div id="reservationTitle">Search Results for:</div>
        <div id="reservationSubTitle"> Name:&nbsp;&nbsp;<span className="resSearch">{name}</span> <br/>Reservation ID:&nbsp;&nbsp; <span className="resSearch">{resId}</span></div>
        <div id="reservationInnerContainer">
          <div id="listEntriesHeaderMini"><TitleTableCheckIn/></div>
          <div id="listEntriesScroll">
          {reservationData.map((reservation, index) => {
            return <ListEntryMini
            reservation={reservation}
            addPage={addPage}
            updateSelectedReservation={updateSelectedReservation}
            value={index}/>
          })}
          </div>
        </div>
        <FormButton className='searchButtonPlacement' onClick={subtractPage}> Back</FormButton>
        </div>
      </HalfRoundDiv>

  );
};

export default CheckInReservationList;