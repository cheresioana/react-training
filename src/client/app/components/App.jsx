import React from 'react';
import LeftMenu from './LeftMenu.jsx';
import ControlBar from './ControlBar.jsx';
import MainPlayingPage from './MainPlayingPage.jsx';
import CoverArt from './CoverArt.jsx';
import Wave from './Wave.jsx';

class App extends React.Component {
  render () {
    return(
  <div id="container" className="active">
  <LeftMenu />
  <MainPlayingPage />
  <ControlBar />
  
</div>
      );
  }
}

export default App;