import React from 'react';
import LeftMenu from './LeftMenu.jsx';
import ControlBar from './ControlBar.jsx';
import AllTracks from './AllTracks.jsx';
import CoverArt from './CoverArt.jsx';
import Playlists from './Playlists.jsx';



class App extends React.Component {
  render () {
    return(
  <div id="container" className="active">
  <LeftMenu />
  	{this.props.children}
  <ControlBar />
</div>
      );
  }
}

export default App;