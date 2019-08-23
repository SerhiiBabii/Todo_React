import React from 'react';
import AppHeader from './AppHeader';
import SearchField from './SearchField';
import ItemStatusFilter from './ItemStatusFilter';
import TodoList from './TodoList';
import SearchPanel from './SearchPanel';

const todoData = [
  { id: 1, text: 'Wake Up', important: true, done: false },
  { id: 2, text: 'Drink coffee', important: false, done: false },
  { id: 3, text: 'Go to work', important: false, done: false },
];

const App = () => {
  return (
    <div>
      <AppHeader toDo={3} done={0} />
      <SearchField />
      <ItemStatusFilter />
      <TodoList todoData={todoData} />
      <SearchPanel />
    </div>
  );
};

export default App;
