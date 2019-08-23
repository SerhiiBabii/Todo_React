import React from 'react';
import './searchPanel.css';

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Write to search"
    />
  );
};

export default SearchPanel;
