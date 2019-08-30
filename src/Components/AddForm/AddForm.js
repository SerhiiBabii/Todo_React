import React, { Component } from 'react';
import './addForm.css';

export default class AddForm extends Component {
  state = {
    text: '',
    error: '',
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value,
      error: '',
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { text } = this.state;
    if (text) {
      this.setState({ text: '' });
      const ch = this.props.addItem || (() => {});
      ch(text);
    } else {
      this.setState({
        error: 'Сheck data entered in the field',
      });
    }
  };

  render() {
    const { text, error } = this.state;
    return (
      <div>
        <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
          <input
            className="form-control new-todo-text"
            type="text"
            value={text}
            onChange={this.onTextChange}
            placeholder="Write your task"
          />
          <button type="submit" className="btn btn-outline-secondary">
            Add item
          </button>
        </form>
        {error ? <span className="bottom-panel__error">{error}</span> : null}
      </div>
    );
  }
}
