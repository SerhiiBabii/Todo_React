import React from 'react';
import TodoList from './TodoList';
import AppHeader from './AppHeader';
import SearchField from './SearchField';
import ItemStatusFilter from './ItemStatusFilter';

const todoData = [
  { id: 1, text: 'Wake Up' },
  { id: 2, text: 'Drink coffee' },
  { id: 3, text: 'Go to work' },
];

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchField />
      <ItemStatusFilter />
      <TodoList todoData={todoData} />
    </div>
  );
};

export default App;
