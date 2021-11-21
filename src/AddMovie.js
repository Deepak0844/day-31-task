import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddIcon from '@mui/icons-material/Add';

export function AddMovie() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [director, setDirector] = useState("");
  const [summary, setSummary] = useState("");
  const [releasedyear, setReleasedyear] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const addBtn = () => {
    const newMovie = {
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
    fetch(`https://6166c4db13aa1d00170a66fd.mockapi.io/movie-app`,
      {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => history.push("/"));
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
        <TextField value={summary} onChange={(event) => setSummary(event.target.value)} id="standard-basic" label="Movie-Summary" variant="standard" />
      </div>
      <div className="addSaveBtn">
        <Button
          onClick={addBtn}
          variant="contained"
          color="success"
          style={{ height: "30px", minWidth: "80px" }}
          startIcon={<AddIcon />}>Add</Button>
      </div>
      <div className="backBtn">
        <Button variant="text" onClick={() => history.goBack()} startIcon={<KeyboardBackspaceIcon />}>Back
        </Button>
      </div>
    </div>
  );
}
