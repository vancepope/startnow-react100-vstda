import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoToDo from './notodo';
import ToDo from './todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.todoList.length === 0) {
      return (
        <NoToDo />
      );
    } else {
      return (
        <ul>
          { this.props.todoList.map((todo, index) => (
            <ToDo
              index={ index }
              description={ todo.description }
              priority={ todo.priority }
              todoList={ this.props.todoList }
              key={ this.props.key }
              alert={ todo.alert }
              updateToDo={ this.props.updateToDo }
              deleteToDo={ this.props.deleteToDo }
              handleChange={ this.props.handleChange }
            />
              ))}
        </ul>
      );
    }
  }
}
TodoList.propTypes = {
  todoList: PropTypes.array,
  updateToDo: PropTypes.func,
  deleteToDo: PropTypes.func,
  key: PropTypes.string
};

export default TodoList;
