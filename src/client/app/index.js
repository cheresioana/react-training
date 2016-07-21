import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';
import Playlists from './components/Playlists.jsx';
import AllTracks from './components/AllTracks.jsx';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render (
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AllTracks}/>
        <Route path="playlists" component={Playlists}/>
       <Route path="*" component={AllTracks} />
      </Route>
    </Router>
  )

, document.getElementById('app'));