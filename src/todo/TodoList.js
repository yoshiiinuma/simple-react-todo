import React from 'react';

import './TodoList.css';


const TodoList = ({ text, items, onClick }) => {

  const createListItem = (item) => {
    console.log(item);
    return <li key={item.key} onClick={onClick(item.key)}>{item.text}</li>
  };

  const listItems = items.map(createListItem);
  return (
    <ul>
      {listItems}          
    </ul>
  )
};

export default TodoList;
