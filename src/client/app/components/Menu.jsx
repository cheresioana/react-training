import React from 'react';
import { Menu, Button } from 'react-bootstrap';

class LeftMenu extends React.Component{
	render () {
    return(
      <div id="container">
  <button id="menu-toggle">
    <i className="fa fa-bars fa-fw fa-2x"></i>
  </button>

  <ul id="menu" className="hidden">
    <li className="active">
      <a href="#">
        Now Playing
      </a>
    </li>

    <li>
      <a href="#">
        Explore Tracks
      </a>
    </li>

    <li>
      <a href="#">
        My Playlists
      </a>
    </li>
  </ul>

  <div id="cover-art">
    <div id="cover-art-big" style="background-image: url('http://netstorage.metrolyrics.com/albums/9414151jpg.jpg');"></div>
    <img id="cover-art-small" alt="cover-art-small" src="http://netstorage.metrolyrics.com/albums/9414151jpg.jpg"/>
    <div className="instructions">Drop your audio files here.</div>
  </div>

  <div id="wave">
    <img src="assets/img/waveform.png" alt="wave" width="100%" style="display: block;" />
  </div>

  <div id="control-bar">
    <div className="player-control">
      <div id="previous-button" title="Previous"><i className="fa fa-fast-backward"></i></div>
      <div id="play-button" title="Play"><i className="fa fa-play"></i></div>
      <div id="pause-button" title="Pause"><i className="fa fa-pause"></i></div>
      <div id="stop-button" title="Stop"><i className="fa fa-stop"></i></div>
      <div id="next-button" title="Next"><i className="fa fa-fast-forward"></i></div>
      <div id="shuffle-button" title="Shuffle Off"><i className="fa fa-random"></i></div>
      <div id="repeat-button" title="Repeat Off"><i className="fa fa-refresh"><span>1</span></i></div>
    </div>

    <div id="playlist">
      <div id="track-details" title="Show playlist">
        <i className="fa fa-sort"></i>
        <p id="track-desc">
          <b>Never Gonna Give You Up</b>
          by Rick Astley
        </p>
        <p id="track-time">
          <span id="current">0:00</span> / <span id="total">3:32</span>
        </p>
      </div>

      <div id="expand-bar" className="hidden">
        <h2>Playlist name</h2>

        <form>
          <label forHtml="searchBox">Search</label><div><input id="searchBox" type="search" name="search"/></div>
        </form>
        <ul id="list"></ul>
      </div>
    </div>
  </div>

</div>
      );
  }
}

export default App;