import React from 'react';
import './searchField.css';

const SearchField = () => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Write to search"
    />
  );
};

export default SearchField;
