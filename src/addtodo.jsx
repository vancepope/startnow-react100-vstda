import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToDo extends Component {
  constructor(props) {
    super(props);
  }

  addTodo() {
    this.props.addTodo(this.state);
  }
  render() {
    return (
      <div className='addToDo'>
        <div className='card-body'>
          <label htmlFor='description'><strong>I want to..</strong></label>
          <textarea
            className='create-todo-text form-control'
            name='description'
            id='todoItem'
            cols='10' rows='5'
            value={ this.props.description }
            onChange={ this.props.handleChange }
          />
            <br />
            <label htmlFor='priority'><strong>How much of a priority is this?</strong></label>
            <select
              className='create-todo-priority form-control'
              name='priority'
              id='priority'
              value={ this.props.priority }
              onChange={ this.props.handleChange }
            >
              
              <option value='1'>Low Priority</option>
              <option value='2'>Medium Priority</option>
              <option value='3'>High Priority</option>
            </select>
            <br />
        </div>
        <div className='card-footer'>
          <button
            className='create-todo btn btn-success btn-block'
            onClick={ this.props.addTodo }
          >Add</button>
        </div>
      </div>
    );
  }
}
AddToDo.propTypes = {
  description: PropTypes.string,
  priority: PropTypes.string,
  addTodo: PropTypes.func,
  handleChange: PropTypes.func,
};

export default AddToDo;
