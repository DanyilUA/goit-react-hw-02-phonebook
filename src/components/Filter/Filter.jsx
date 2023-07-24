import React from 'react';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={ css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
}

export default Filter;