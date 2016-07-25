import React from 'react';
import MusicStore from '../stores/MusicStore.jsx';
import * as MusicActions from '../actions/MusicActions.jsx';

class ControlBar extends React.Component{
	constructor()
	{
		super();
   
    this.state = {
      expendedBar: "hidden",
      song: null
    };
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.expend = this.expend.bind(this);
    this.hide = this.hide.bind(this);
	}

  expend()
  {
      this.setState({expendedBar: "active"});       
  }

  hide()
  {
    this.setState({expendedBar: "hidden"});
  }

  playSong()
  {
     MusicActions.continueSong();
  }
 
  componentWillMount()
  {
    MusicStore.on("newSong", ()=>{
      this.setState({
        song : MusicStore.getSong()
      });
    });
  }

  pauseSong()
  {    
 		MusicActions.pauseSong();
  }

	render()
	{
		const song = this.state.song;
		return(
     
		<div id="control-bar">
			<div className="player-control">
				<div id="previous-button" title="Previous"><i className="fa fa-fast-backward"></i></div>   
        		<div onClick={this.playSong} id="play-button" title="Play" ><i className="fa fa-play"></i></div>
				<div onClick={this.pauseSong} id="pause-button" title="Pause"><i className="fa fa-pause"></i></div>
				<div id="stop-button" title="Stop"><i className="fa fa-stop"></i></div>
				<div id="next-button" title="Next"><i className="fa fa-fast-forHtmlward"></i></div>
				<div id="shuffle-button" title="Shuffle Off"><i className="fa fa-random"></i></div>
				<div id="repeat-button" title="Repeat Off"><i className="fa fa-refresh"><span>1</span></i></div>
			</div>

			<div id="playlist">
				<div id="track-details" title="Show playlist" onClick={this.expend}>
				<i className="fa fa-sort"></i>
				<p id="track-desc">{(song)? (song.title) : ("There are no tracks loaded in the player.")}</p>
				<p id="track-time">
					<span id="current">-</span> / <span id="total">-</span>
				</p>
				</div>

				<div id="expand-bar" className={this.state.expendedBar} onMouseLeave={this.hide}>
  				<h2>Playlist name</h2>

  				<form>
  					<label htmlFor="searchBox">Search</label><div><input id="searchBox" type="search" name="search"/></div>
  				</form>
  				<ul id="list"></ul>
			  </div>
	    </div>
	  </div>

		);
	}
}

ControlBar.propTypes = {
  
}

ControlBar.defaultProps = {
 
}

export default ControlBar;