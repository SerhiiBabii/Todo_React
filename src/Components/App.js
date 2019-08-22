import React from 'react';

const TodoList = () => {
  return (
    <ul>
      <li>Wake up</li>
      <li>Drink coffee</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>Todo List</h1>;
};

const SearchField = () => {
  return <input type="text" placeholder="Write for search" />;
};

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
