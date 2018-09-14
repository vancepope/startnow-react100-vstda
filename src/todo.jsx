import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItemEdit from './todoitemedit';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      hasChecked: false,
    };
    this.setEdit = this.setEdit.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.completeToDo = this.completeToDo.bind(this);
    this.hasChecked = this.hasChecked.bind(this);
  }
  setEdit() {
    this.setState({
      edit: !this.state.edit
    }, () => console.log(this.state.edit));
  }
  deleteToDo() {
    this.props.deleteToDo(this.props.index);
  }
  hasChecked() {
    this.setState({ hasChecked: !this.state.hasChecked });
  }
  completeToDo() {
    if (this.state.hasChecked) {
      return 'strike-through';
    } else {
      return '';
    }
  }
  render() {
    return (
      <li className={ this.props.alert } role='alert'>
        <label htmlFor='description' className='form-check-label' >
          <div className='row'>
            <div className='col-md-1'>
              <input type='checkbox' onChange={ this.hasChecked } />
            </div>
            <div className='col-md-5' id='display-desc'>
              <div className={ `${this.completeToDo()}` } id='desc'>
                <p>{ this.props.description }</p>
              </div>
            </div>
            <div className='col-md-1 pull-right'>
              <button className='edit-todo icons' onClick={ this.setEdit }>
                <i className='fas fa-edit pull-right' />
              </button>
            </div>
            <div className='col-md-1 pull-right'>
              <button className='delete-todo icons' onClick={ this.deleteToDo }>
                <i className='fas fa-trash pull-right' />
              </button>
            </div>
          </div>
        </label>
        {this.state.edit &&
        <ToDoItemEdit
          index={ this.props.index }
          key={ this.props.key }
          description={ this.props.description }
          alert={ this.props.alert }
          todoList={ this.props.todoList }
          priority={ this.props.priority }
          updateToDo={ this.props.updateToDo }
          setEdit={ this.setEdit }
        />}
      </li>
    );
  }
}
ToDo.PropTypes = {
  index: PropTypes.number,
  key: PropTypes.string,
  description: PropTypes.string,
  todoList: PropTypes.array,
  priority: PropTypes.string,
  alert: PropTypes.string,
  updateToDo: PropTypes.func,
  setEdit: PropTypes.func,
};

export default ToDo;
