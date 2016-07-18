import React from 'react';
import LeftMenu from './LeftMenu.jsx';
import ControlBar from './ControlBar.jsx';


class App extends React.Component {
  render () {
    return(
<div id="container" className="active">
  <LeftMenu />

  <div id="cover-art">
    <div id="cover-art-big"></div>
    <img id="cover-art-small" alt="cover-art-small" src="assets/img/default.png"/>
  </div>

  <div id="wave"></div>
  <ControlBar />
  
</div>
      );
  }
}

export default App;