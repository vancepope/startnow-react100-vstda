
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToDo from './addtodo';
import TodoList from './todolist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      description: '',
      priority: '',
      todoList: [],
      alert: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.getAlert = this.getAlert.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }
  getAlert(priority) {
    let bgcolor = '';
    if (priority === '1') {
      bgcolor = 'alert alert-success';
    } else if (priority === '2') {
      bgcolor = 'alert alert-warning';
    } else if (priority === '3') {
      bgcolor = 'alert alert-danger';
    }
    return bgcolor;
  }
  addTodo() {
    const todoList = [...this.state.todoList];
    const todo = {
      key: Date.now(),
      description: this.state.description,
      priority: this.state.priority,
      alert: this.getAlert(this.state.priority),
    };
    todoList.push(todo);

    this.setState({
      todoList,
      key: '',
      description: '',
      priority: ''
    });
  }
  deleteToDo(index) {
    const newList = [...this.state.todoList];
    newList.splice(index, 1);
    this.setState({ todoList: newList });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateToDo(index, old, updated) {
    const newList = [...this.state.todoList];
    const newTodo = {
      key: updated.key,
      description: updated.description,
      priority: updated.priority,
      alert: this.getAlert(updated.priority),
    };
    newList.splice(index, 1, newTodo);
    console.log(newList);
    this.setState({ todoList: newList });
  }
  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Very Simple Todo App <br /><small>Track all of the things</small></h1>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-header'>Add New Todo</div>
              <AddToDo
                addTodo={ this.addTodo }
                handleChange={ this.handleChange }
                description={ this.state.description }
                priority={ this.state.priority }
              />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card no-padding no-margin'>
              <div className='card-header'>View Todos</div>
              <div className='card-body no-padding no-margin'>
                <TodoList
                  todoList={ this.state.todoList }
                  deleteToDo={ this.deleteToDo }
                  updateToDo={ this.updateToDo }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  description: PropTypes.string,
  priority: PropTypes.string,
  todoList: PropTypes.array,
  hasTodo: PropTypes.bool,
  edit: PropTypes.bool,
  addTodo: PropTypes.func,
  deleteToDo: PropTypes.func,
  editTodo: PropTypes.func,
  todoChecked: PropTypes.func,
  getAlert: PropTypes.func,
  handleChange: PropTypes.func,
};

export default App;
