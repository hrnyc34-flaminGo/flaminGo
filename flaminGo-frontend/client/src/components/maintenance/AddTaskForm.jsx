import React from 'react';
import FormButton from '../styledElements/FormButton.jsx';
import HalfRoundDiv from '../styledElements/HalfRoundDiv.jsx';
import InputTypeText from '../styledElements/InputTypeText.jsx';
import InputTypeRadio from '../styledElements/InputTypeRadio.jsx';
import TextAreaForm from '../styledElements/TextAreaForm.jsx';
import axios from 'axios';
import url, {employeeUrl} from '../../lib/apiPath';

class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);

    //each form input field has its own state property and event handler
    this.state = {
      employeeAssigned: '',
      taskTitle: '',
      location: '',
      taskDescription: '',
      department: '',
      dueBy: '',
    };
    this.inputEmployeeName = this.inputEmployeeName.bind(this);
    this.inputTaskTitle = this.inputTaskTitle.bind(this);
    this.inputRoom = this.inputRoom.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.selectType = this.selectType.bind(this);
    this.inputDueDate = this.inputDueDate.bind(this);
    this.submitAddTaskForm = this.submitAddTaskForm.bind(this);
  }

  //Collect employee name as string
  //Employee name must be entered exactly as it appears in the employees table in order to find employee ID
  inputEmployeeName(event) {
    event.preventDefault();
    this.setState({ employeeAssigned: event.target.value });
  }

  inputTaskTitle(event) {
    event.preventDefault();
    this.setState({ taskTitle: event.target.value });
  }

  inputRoom(event) {
    event.preventDefault();
    this.setState({ location: event.target.value });
  }

  inputDescription(event) {
    event.preventDefault();
    this.setState({ taskDescription: event.target.value });
  }

  //Task type is determined by radio button options
  selectType(event) {
    this.setState({ department: event.target.value });
  }

  //Task type is determined by datetime-local HTML form
  inputDueDate(event) {
    event.preventDefault();
    // format date output as an ISO string
    let dueDate = new Date(event.target.value).toISOString();
    this.setState({ dueBy: dueDate });
  }

  //sends all form info to server in request body
  submitAddTaskForm(event) {
    //additional info to send to server along with form inputs
    const requestBody = {
      //gather id and name from MainContext of employee creating the task
      employeeCreated_id: this.props.employeeId,
      employeeCreated: this.props.name,
      //a GET request will be made to populate employee ID of employee being assigned
      employeeAssigned_id: ''
    };
    Object.assign(requestBody, this.state);

    //use employeeAssigned string from state to search database for their employee ID
    axios.get(`${employeeUrl}/employees/`)
      .then(({data}) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === this.state.employeeAssigned) {
            //append it to the request body object
            requestBody.employeeAssigned_id = data[i].id;
          }
        }
      })
      .then((results) => {
        //send request body of all user inputs to the tasks table in the database
        axios
          .post(`${url}/tasks/`, requestBody)
          .then((results) => {
            alert('Task successfully added to task list');
          })
          .catch((error) => {
            console.log('POST tasks error:', (error));
          });
      })
      .catch((error) => { console.log('GET employees error:', error); });
  }

  render() {
    return (
      <div>
        <HalfRoundDiv className={'addTask'}>
          <h1 className='formTitle'>Add a Task</h1>
          <h2 className="employeeName">Assign To</h2>
          <InputTypeText onChange={this.inputEmployeeName} className="employeeNameInput" placeholder={'Employee Name'} />
          <h2 className='taskInputTitle'>Task Title</h2>
          <InputTypeText
            onChange={this.inputTaskTitle}
            className='taskInput'
            placeholder={'Task Title'}
          />
          <h2 className='roomInputTitle'>Location</h2>
          <InputTypeText
            onChange={this.inputRoom}
            className='roomInput'
            placeholder={'Room Number'}
          />
          <h2 className='textAreaTitle'>Task Description</h2>
          <TextAreaForm
            onChange={this.inputDescription}
            className='textArea'
            placeholder={'Task Description'}
          />
          <h2 className='radioTitle'>Department</h2>
          <form className='ticketType'>
            <label for='Housekeeping'>
              <input
                onClick={this.selectType}
                name='task'
                type='radio'
                value='Housekeeping'
                id='Housekeeping'
              />
              Housekeeping
            </label>
            <label for='Maintenance'>
              <input
                onClick={this.selectType}
                name='task'
                type='radio'
                value='Maintenance'
                id='Maintenance'
              />
              Maintenance
            </label>
          </form>
          <h2 className='dueByTitle'>Due By</h2>
          <InputTypeText
            type='datetime-local'
            className='dueBy'
            onChange={this.inputDueDate}
          />
          <FormButton
            onClick={() => {
              //Clicking submit button sends user inputs to the server and takes user back to Maintenance landing page
              this.submitAddTaskForm();
              this.props.clickBack();
            }}
            className='submitButton'
          >
            Submit
          </FormButton>
        </HalfRoundDiv>
      </div>
    );
  }
}

export default AddTaskForm;
