import React from 'react';
import { useState } from 'react';
import Rate from './Rate';

const Filter = ({ title, setTitle, rating, setRating }) => {
  const handleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <div className="my-5">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        className="form-control"
      />
      <Rate rating={rating} setRating={setRating} />
    </div>
  );
};

export default Filter;
