import React from 'react';

import './TodoForm.css';

const TodoForm = ({ text, onChange, onSubmit }) => {
  return (
    <form id="todo-form" onSubmit={onSubmit}>
      <input placeholder="Enter a task" value={text} onChange={onChange}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
