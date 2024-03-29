import React from 'react';
import './todoListItem.css';

const TodoListItem = ({
  text,
  deleteItem,
  onToggleDone,
  onToggleImportant,
  important,
  done,
}) => {
  let className = 'todo-list-item';
  if (done) {
    className += ' done';
  }
  if (important) {
    className += ' important';
  }

  return (
    <span className={className}>
      <span className="todo-list-item-text" onClick={onToggleDone}>
        {text}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={deleteItem}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
