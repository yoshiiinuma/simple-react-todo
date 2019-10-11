import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      items: []
    }
    this.currentId = 1;
  }

  updateInput = (event) => {
    event.preventDefault();
    this.setState({ text: event.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    const key = this.currentId++;
    const newItem = { key, text: this.state.text };
    this.setState({
      text: '',
      items: this.state.items.concat(newItem)
    })
  };

  deleteItem = (key) => {
    return () => {
      event.preventDefault();
      this.setState({
        items: this.state.items.filter((item) => {
          return item.key != key;
        })
      });
    }
  };

  render() {
    return(
      <div>
        <TodoForm text={this.state.text} onChange={this.updateInput} onSubmit={this.addItem} />
        <TodoList items={this.state.items} onClick={this.deleteItem} />
      </div>
    );
  }
};
