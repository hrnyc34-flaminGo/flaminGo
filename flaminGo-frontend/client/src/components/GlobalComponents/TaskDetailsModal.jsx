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

class RoomDetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div>
        <Modal
          style={customStyles}
          isOpen={this.props.isOpen}
          contentLabel='Minimal Modal Example'
        >
          <XButton onClick={this.props.toggle} color='white' />
          <div id='roomDetailsContainer'>
            <h1 className='roomDetailsHeader'>Task Details</h1>
            <div className='roomDetails'>
              <div>
                <span className='detailsTitle'>Task Title:</span>{' '}
                <span className='detailsContent'>
                  {this.props.allTaskData.taskTitle}{' '}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Location:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.location}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Task Description:</span>{' '}
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.taskDescription}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Task Creator:</span>{' '}
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.employeeCreated}{' '}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Task Creation Date:</span>{' '}
                <span className='detailsContent'>
                  {this.props.allTaskData.createdAt.substring(0, 10)}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Department:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.department}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Task Due Date:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.dueBy.substring(0, 10)}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Assigned To:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.employeeAssigned}
                </span>
              </div>
              <div>
                <span className='detailsTitle'>Task Completed:</span>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.isCompleted ? 'True' : 'False'}
                </span>
              </div>
              <div>
                <span className='detailsContent'>
                  {this.props.allTaskData.completedAt.substring(0, 10)}
                </span>
              </div>
              <div>
                <span className='detailsContent'>
                  {' '}
                  {this.props.allTaskData.employeeCompleted}
                </span>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RoomDetailsModal;
