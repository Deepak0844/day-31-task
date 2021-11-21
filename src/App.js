import './App.css';
import {Route, useHistory } from "react-router-dom";
import { Switch} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import * as React from 'react';
import "react-animated-slider/build/horizontal.css";
import { EditMovie } from './EditMovie';
import { AddMovie } from './AddMovie';
import { Details } from './Details';
import { Movies } from './Movies';
import { PosterSlider } from './PosterSlider';

export default function App() {
const history = useHistory();
  return (
<div>
    <AppBar position="static" style={{background:"#ffffff",color:"black",width:"100%",boxShadow:"none"}}>
      <Toolbar variant="dense">
        <Button variant="text" color="secondary" onClick={()=> history.push("/movies")}>
          Movies
        </Button>
        <Button style={{minWidth:"120px"}}onClick={()=>history.push("/add-movie")} variant="text" color="secondary">
       Add Movie
        </Button>
      </Toolbar>
    </AppBar>
<Switch>
<Route exact path="/movies">
  <PosterSlider />
  <Movies/>
 </Route>
 <Route path="/edit-movie/:id">
 <EditMovie/>
 </Route>
 <Route path="/details/:id">
<Details />
   </Route>
 <Route path="/add-movie">
 <AddMovie/>
 </Route>
 </Switch>
 </div>
);
}


