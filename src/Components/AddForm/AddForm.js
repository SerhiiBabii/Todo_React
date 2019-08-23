import React, { Component } from 'react';
import './addForm.css';

export default class AddForm extends Component {
  render() {
    return (
      <div className="add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItem('Drink green tea')}
        >
          Add item
        </button>
      </div>
    );
  }
}
