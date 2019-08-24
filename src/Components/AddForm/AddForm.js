import React, { Component } from 'react';
import './addForm.css';

export default class AddForm extends Component {
  state = {
    text: '',
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    this.setState({ text: '' });
    const ch = this.props.addItem || (() => {});
    ch(text);
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control new-todo-text"
          type="text"
          value={this.state.text}
          onChange={this.onTextChange}
          placeholder="Write your task"
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add item
        </button>
      </form>
    );
  }
}
