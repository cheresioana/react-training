import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';
import Playlists from './coponents/Playlists.jsx';
import AllTracks from './coponents/AllTracks.jsx';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render (
  (
    <Router history={browserHistory}>
      <Route path="/browse" component={App}>
        <IndexRoute component={AllTracks}/>
        <Route path="playlists" component={Playlists}/>
      </Route>
    </Router>
  )

, document.getElementById('app'));