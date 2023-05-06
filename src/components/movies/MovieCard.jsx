import React from 'react';
import Rate from './Rate';

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3">
      <img src={movie.posterURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <Rate rating={movie.rating} />
        <p className="card-text">{movie.description}</p>
        <a href="#!" className="btn btn-primary">
          view details
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
