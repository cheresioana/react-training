import React from 'react';
import CoverArt from './CoverArt.jsx';
import Wave from './Wave.jsx';

class MainPlayingPage extends React.Component{
  render()
  {
    return(
      <div className="coverart-notworking">
        <CoverArt />
        <Wave />
      </div>
      );
  }
}

export default MainPlayingPage;