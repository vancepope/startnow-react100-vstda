import React, { Component } from 'react';

class NoToDo extends Component {
  render() {
    return (
      <div className='alert alert-primary' role='alert'>
        <p><strong>Welcome to Very Simple Todo App!</strong>
          <small>Get started now by adding a new todo on the left.</small></p>
      </div>
    );
  }
}

export default NoToDo;
