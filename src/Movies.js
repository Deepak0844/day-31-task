import { useState } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import { MovieList } from './MovieList';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, [movies.id]);
  return (
    <div className="movieList">
      {movies.map(({ image, title, id }) => (
        <MovieList
          image={image}
          title={title}
          id={id}
          key={id} />
      ))}
    </div>
  );
}
