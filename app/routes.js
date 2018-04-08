import React from 'react';
import { Switch, Route } from 'react-router';

import App from './Containers/App';
import Movies from './Containers/Movies';
// import TV from './Containers/TV';

export default (
  <Switch>
    <App>
      <Route path="/" component={Movies} />
      {/* <Route path="/tv" component={TV} /> */}
    </App>
  </Switch>
);
