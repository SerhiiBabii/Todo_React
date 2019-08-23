import React, { Component } from 'react';
import './todoListItem.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onTextClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { text, deleteItem } = this.props;
    const { done, important } = this.state;

    let className = 'todo-list-item';
    if (done) {
      className += ' done';
    }
    if (important) {
      className += ' important';
    }

    return (
      <span className={className}>
        <span className="todo-list-item-text" onClick={this.onTextClick}>
          {text}
        </span>
        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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
  }
}
