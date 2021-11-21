import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as React from 'react';
import { useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';

export function Details() {
  const history = useHistory();
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app/${id}`)
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs));
  };
  useEffect(getMovies, [id]);
  const deleteBtn = () => {
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app/${id}`,
      {
        method: "DELETE",
      }).then(() => getMovies()).then(() => history.push("/movies"));
  };
  console.log("rating", movies.rating);
  return (
    <main className="movieDetails" style={{ background: `url('${movies.poster}')no-repeat` }}>
      <div className="detailsLeft">
        <h1 style={{ margin: "0" }}>{movies.title}</h1>
        <h4>{movies.genre}</h4>
        <iframe
          width="300px"
          height="300px"
          src={movies.trailer}
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="detailsRight">
        <img src={movies.image} alt={movies.title}></img>
        <h2 style={{margin:"5px 0"}}>{movies.title}</h2>
        <div className="rating">
          <StarIcon style={{ fontSize: "25px" }} color="warning" />
          <p>{movies.rating}</p>
        </div>
        <p>{movies.releasedyear}</p>
        <Button onClick={() => { history.push("/edit-movie/" + movies.id); }} color="warning">Edit</Button>
        <Button onClick={deleteBtn} color="error">Delete</Button>
        <div className="information">
          <p><b>Director : </b>{movies.director}</p>
          <p>{movies.summary}</p>
        </div>
        <Button color="inherit" onClick={() => { history.goBack(); }}><ArrowBackIcon />Back</Button>
      </div>
    </main>
  );
}
