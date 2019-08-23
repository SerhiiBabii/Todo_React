import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AddForm from './AddForm';
import ItemStatusFilter from './ItemStatusFilter';
import TodoList from './TodoList';
import SearchField from './SearchField';

export default class App extends Component {
  maxCount = 4;
  state = {
    todoData: [
      { id: 1, text: 'Wake Up', important: true, done: false },
      { id: 2, text: 'Drink coffee', important: false, done: false },
      { id: 3, text: 'Go to work', important: false, done: false },
    ],
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);

      const newArr = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1),
      ];

      return {
        todoData: newArr,
      };
    });
  };

  addItem = text => {
    const newItem = {
      id: this.maxCount++,
      text: text,
      important: false,
      done: false,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={3} done={0} />
        <div className="todo-panel d-flex">
          <SearchField />
          <ItemStatusFilter />
        </div>
        <TodoList todoData={this.state.todoData} deleteItem={this.deleteItem} />
        <AddForm addItem={this.addItem} />
      </div>
    );
  }
}
