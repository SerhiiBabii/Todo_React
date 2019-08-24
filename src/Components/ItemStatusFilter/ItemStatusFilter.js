import React from 'react';

const filterButton = [
  { name: 'all', text: 'All' },
  { name: 'active', text: 'Active' },
  { name: 'done', text: 'Done' },
];

const ItemStatusFilter = ({ filter, onFilter = () => {} }) => {
  const buttons = filterButton.map(({ name, text }) => {
    const isActive = name === filter;
    const className =
      'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name} onClick={() => onFilter(name)} className={className}>
        {text}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default ItemStatusFilter;
