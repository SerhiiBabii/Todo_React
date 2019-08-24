import React, { Component } from 'react';
import './searchField.css';

export default class SearchField extends Component {
  state = {
    searchText: '',
  };

  onSearcTextChange = e => {
    const { onSearch = () => {} } = this.props;
    this.setState({
      searchText: e.target.value,
    });

    onSearch(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Write text for search"
        value={this.state.searchText}
        onChange={this.onSearcTextChange}
      />
    );
  }
}
