import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SaveIcon from '@mui/icons-material/Save';

export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  console.log("edit", id);
  //get the data to display in input fields
  useEffect(() => {
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  return movie ? <UpdateMovie movie={movie} /> : " ";
}
function UpdateMovie({ movie }) {
  const history = useHistory();
  const [title, setTitle] = useState(movie.title);
  const [poster, setPoster] = useState(movie.poster);
  const [genre, setGenre] = useState(movie.genre);
  const [image, setImage] = useState(movie.image);
  const [director, setDirector] = useState(movie.director);
  const [summary, setSummary] = useState(movie.summary);
  const [releasedyear, setReleasedyear] = useState(movie.releasedyear);
  const [rating, setRating] = useState(movie.rating);
  const [trailer, setTrailer] = useState(movie.trailer);
  const editMovie = () => {
    const UpdatedMovie = {
      poster,
      title,
      image,
      rating,
      summary,
      director,
      releasedyear,
      genre,
      trailer,
    };
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(UpdatedMovie),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => history.push("/details/" + movie.id));
  };
  return (
    <div>
      <div className="inputs">
        <TextField value={title} onChange={(event) => setTitle(event.target.value)} id="standard-basic" label="Movie Name" variant="standard" />
        <TextField value={poster} onChange={(event) => setPoster(event.target.value)} id="standard-basic" label="Movie-Banner" variant="standard" />
        <TextField value={genre} onChange={(event) => setGenre(event.target.value)} id="standard-basic" label="Movie-Genre" variant="standard" />
        <TextField value={image} onChange={(event) => setImage(event.target.value)} id="standard-basic" label="Movie-Image" variant="standard" />
        <TextField value={director} onChange={(event) => setDirector(event.target.value)} id="standard-basic" label="Movie-Director" variant="standard" />
        <TextField value={releasedyear} onChange={(event) => setReleasedyear(event.target.value)} id="standard-basic" label="Released year" variant="standard" />
        <TextField value={rating} onChange={(event) => setRating(event.target.value)} id="standard-basic" label="Movie-Rating" variant="standard" />
        <TextField value={trailer} onChange={(event) => setTrailer(event.target.value)} id="standard-basic" label="Movie-Trailer" variant="standard" />
      </div>
      <div className="input1">
        <TextField value={summary} onChange={(event) => setSummary(event.target.value)} id="standard-basic" label="movie-Summary" variant="standard" />
      </div>
      <div className="addSaveBtn">
        <Button className="button"
          onClick={editMovie}
          style={{ height: "30px", minWidth: "80px" }}
          color="success"
          variant="contained" startIcon={<SaveIcon />}>Save</Button>
      </div>
      <div className="backBtn">
        <Button variant="text" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </div>
    </div>
  );
}
