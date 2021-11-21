import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import * as React from 'react';

export function MovieList({ image, title, id }) {
  const history = useHistory();
  const viewBtn = () => {
    history.push("/details/" + id);
  };
  return (
    <div className="movieCard" onClick={viewBtn}>
      <img src={image} alt={title}></img>
      <div className="movieTitle">
        <h4 style={{ margin: "0", padding: "5px" }}>{title}</h4>
        <Button style={{ margin: "15px", fontSize: "15px", height: "30px", width: "80px" }}
          onClick={viewBtn} variant="contained" color="success">View</Button>
      </div>
    </div>
  );
}
