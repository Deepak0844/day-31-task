import { useHistory } from "react-router-dom";
import { useState } from 'react';
import Slider from "react-animated-slider";
import * as React from 'react';
import { useEffect } from 'react';

export function PosterSlider() {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch("https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, [movies.id]);
  return (
    <div>
      <Slider autoplay={3000} className="slider-wrapper">
        {movies.map((mve) => (
          <div

            key={mve.id}
            className="slider-content"
            style={{ background: `url('${mve.poster}') no-repeat center center`, cursor: "pointer" }}
            onClick={() => { history.push("/details/" + mve.id); }}
          >
            <section>
              <span>
                <h1>{mve.title}</h1>
                <p>{mve.genre}</p>
                <h3>Watch Trailer</h3>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}
