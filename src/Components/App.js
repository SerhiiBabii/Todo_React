import React, { Component } from 'react';
import AppHeader from './AppHeader';
import AddForm from './AddForm';
import ItemStatusFilter from './ItemStatusFilter';
import TodoList from './TodoList';
import SearchField from './SearchField';

import './app.css';

export default class App extends Component {
  maxCount = 1;

  state = {
    todoData: [
      this.createTodoItem('Wake Up'),
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Go to work'),
    ],
    search: '',
    filter: 'all',
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
        todoData: this.onToggleProperty(todoData, id, 'important'),
      };
    });
  };

  onFilter = filter => {
    this.setState({ filter });
  };

  onSearch = search => {
    this.setState({ search });
  };

  filterItems(items, filter) {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter(item => !item.done);
    } else if (filter === 'done') {
      return items.filter(item => item.done);
    }
  }

  searchItems(items, search) {
    if (search.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  }

  render() {
    const { todoData, search, filter } = this.state;
    const doneQuantity = todoData.filter(el => el.done).length;
    const todoQuantity = todoData.length - doneQuantity;
    const visibleItems = this.searchItems(
      this.filterItems(todoData, filter),
      search
    );
    return (
      <div className="todo-app">
        <AppHeader toDo={todoQuantity} done={doneQuantity} />
        <div className="todo-panel d-flex">
          <SearchField onSearch={this.onSearch} />
          <ItemStatusFilter filter={filter} onFilter={this.onFilter} />
        </div>
        <TodoList
          todoData={visibleItems}
          deleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <AddForm addItem={this.addItem} />
      </div>
    );
  }
}
