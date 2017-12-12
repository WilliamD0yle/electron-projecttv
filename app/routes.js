import React from 'react';
import { Switch, Route } from 'react-router';

import Movies from './Containers/Movies';
import MovieDetails from './Containers/MovieDetails';

export default (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route path="/moviedetails" exact render={props => <MovieDetails {...props}/>} />
  </Switch>
);
