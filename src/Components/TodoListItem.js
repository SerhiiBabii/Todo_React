import React from 'react';
import './todoListItem.css';

const TodoListItem = ({ text }) => {
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-text">{text}</span>
      <button type="button" className="btn btn-outline-success btn-sm">
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
