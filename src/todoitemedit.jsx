import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitTodo() {
    // const index = [...this.props.todoList];
    const old = {
      key: this.props.key,
      description: this.props.description,
      priority: this.props.priority
    };
    const updated = {
      key: this.props.key,
      description: this.state.description,
      priority: this.state.priority
    };
    this.props.updateToDo(this.props.index, old, updated);
    this.props.setEdit();
  }
  render() {
    return (
      <div className='toDoItemEdit'>
        <div className=''>
          <label htmlFor='description'><strong>Description</strong></label>
          <textarea
            className='update-todo-text form-control'
            name='description'
            id='' cols='10'
            rows='5'
            value={ this.state.description }
            onChange={ this.handleChange }
          />
          <br />
        </div>
        <div className=''>
          <label htmlFor='priority'><strong>Priority</strong></label><br />
          <select
            className='update-todo-priority form-control' name='priority' id='priority'
            value={ this.state.priority }
            onChange={ this.handleChange }
          >
            <option value='1'>Low Priority</option>
            <option value='2'>Medium Priority</option>
            <option value='3'>High Priority</option>
          </select>
        </div>
        <br /><br />
        <button id='button' className='update-todo btn btn-success' onClick={ this.submitTodo }>Save</button>
      </div>
    );
  }
}
ToDoItemEdit.PropTypes = {
  index: PropTypes.number,
  key: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  todoList: PropTypes.array,
  edit: PropTypes.bool,
  handleChange: PropTypes.func,
  submitTodo: PropTypes.func,
  setEdit: PropTypes.func,
};
export default ToDoItemEdit;
