import React from 'react';
import TodoListItem from './TodoListItem';
import './todoList.css';

const TodoList = ({ todoData }) => {
  return (
    <ul className="list-group todo-list">
      {todoData.map(item => {
        const { id, ...itemsProps } = item;
        return (
          <li key={id} className="list-group-item">
            <TodoListItem {...itemsProps} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
