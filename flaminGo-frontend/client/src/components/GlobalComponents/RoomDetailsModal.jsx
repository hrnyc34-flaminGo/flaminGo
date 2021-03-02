import Modal from 'react-modal';
import React from 'react';
import XButton from '../styledElements/Xbutton';

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '50%',
    height: '80%',
    transform: 'translate(-50%, -50%)',
    backgroundImage: 'linear-gradient(135deg, #ff2063, #a91cff)',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'scroll',
  },
};

class TaskDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    var amenArr = this.props.allRmData.amenities.map((amen) => <li>{amen}</li>);

    var taskArr = this.props.allRmData.tasks.map((task) => (
      <li>{task.taskTitle}</li>
    ));

    const cleanStatus = this.props.allRmData.isClean ? 'Clean' : 'Dirty';
    const occStatus = this.props.allRmData.isOccupied ? 'Occupied' : 'Vacant';

    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          contentLabel='Minimal Modal Example'
        >
          <XButton onClick={this.props.toggle} color='white' />
          <div id='roomDetailsContainer'>
            <h1 className='roomDetailsHeader'>Room Details</h1>
            <div className='roomDetails'>
              <div>
                <span className='detailsTitle'>Room Number:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allRmData.roomNumber}
                </span>
              </div>
              <div>
                <span className='detailsTitle'> Floor:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allRmData.floorNumber}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Room Type: </span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allRmData.roomType}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Cleanliness Status:</span>
                <span className='detailsContent'> {cleanStatus}</span>
              </div>
              <div>
                <span className='detailsTitle'>Occupation Status:</span>
                <span className='detailsContent'> {occStatus}</span>
              </div>
              <div>
                <span className='detailsTitle'> Amenities:</span>
                <span className='detailsContent'> {amenArr}</span>
              </div>
              <div>
                <span className='detailsTitle'>Open Tasks:</span>
                <span className='detailsContent'> {taskArr}</span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default TaskDetailsModal;
