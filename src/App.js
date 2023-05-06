import Filter from './components/movies/Filter';
import AddMovie from './components/movies/AddMovie';
import MovieList from './components/movies/MovieList';
import { useState } from 'react';
import { moviesData } from './data';

function App() {
  const [movieList, setMovieList] = useState(moviesData);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const addMovie = movie => {
    console.log(movie);
    setMovieList([...movieList, movie]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Filter
            setTitle={setTitle}
            title={title}
            rating={rating}
            setRating={setRating}
          />
          <AddMovie addMovie={addMovie} />
          <MovieList movieList={movieList} title={title} rating={rating} />
        </div>
      </div>
    </div>
  );
}

export default App;
