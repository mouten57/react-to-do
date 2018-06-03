import React, { Component } from 'react';

class ToDo extends Component {
  deleteToDo(d) {
    this.props.deleteToDo(d);
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <button onClick={(e) => this.deleteToDo(this.props.description)}>Delete</button>
       
      </li>
    );
  }
}

export default ToDo;
