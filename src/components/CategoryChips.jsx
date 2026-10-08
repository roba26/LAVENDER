import React from 'react';
import './CategoryChips.css';

export default function CategoryChips({ categories, selected, onSelect }) {
  const names = ['All', ...categories.map((c) => c.title)];

  return (
    <div className="chips">
      {names.map((name) => (
        <button
          key={name}
          className={`chips__chip ${selected === name ? 'chips__chip--active' : ''}`}
          onClick={() => onSelect(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}