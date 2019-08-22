import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem text={'Wake up'} />
      </li>
      <li>
        <TodoListItem text={'Drink coffee'} />
      </li>
    </ul>
  );
};

export default TodoList;
