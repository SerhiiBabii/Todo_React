import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AddForm from './AddForm';
import ItemStatusFilter from './ItemStatusFilter';
import TodoList from './TodoList';
import SearchField from './SearchField';

export default class App extends Component {
  maxCount = 1;

  state = {
    todoData: [
      this.createTodoItem('Wake Up'),
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Go to work'),
    ],
  };

  createTodoItem(text) {
    return {
      id: this.maxCount++,
      text: text,
      important: false,
      done: false,
    };
  }

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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  onToggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const oldItem = arr[index];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.this.onToggleProperty(todoData, id, 'important'),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneQuantity = todoData.filter(el => el.done).length;
    const todoQuantity = todoData.length - doneQuantity;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoQuantity} done={doneQuantity} />
        <div className="todo-panel d-flex">
          <SearchField />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoData={this.state.todoData}
          deleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddForm addItem={this.addItem} />
      </div>
    );
  }
}
