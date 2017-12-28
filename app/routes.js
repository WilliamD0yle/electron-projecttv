import React from 'react';
import { Switch, Route, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Movies from './Containers/Movies';
import MovieDetails from './Containers/MovieDetails';

export default (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route path="/moviedetails" component={MovieDetails} />
  </Switch>
);
