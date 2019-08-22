import React from 'react';
import TodoList from './TodoList';
import AppHeader from './AppHeader';
import SearchField from './SearchField';

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchField />
      <TodoList />
    </div>
  );
};

export default App;
