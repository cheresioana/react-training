import React from 'react';




class ControlBar extends React.Component{

  

	constructor()
	{

		super();
    const user = 953;

    this.state = {
      play: "false",
      songID: 0,
      songTitle: "?" 
    };
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
	}

  playSong()
  {
      var SC = require('soundcloud');
      SC.initialize({
        client_id: '10723ca53b6d3aaecaa12a194a3997a0'
      });
      SC.get('/tracks').then(function(tracks){                                    //Request for the song list
          var number = Math.floor(Math.random() * 50 + 1);
          this.setState({songID: track[number].id, songTitle: tracks[number].title});
          SC.stream('/tracks/' + tracks[number].id).then(function(player){      //PLAY SONG
            player.play();
          });
          console.log('Song played: ' + tracks[number].title);
          
      });
  }
 
  pauseSong()
  {    
    var SC = require('soundcloud');
    SC.initialize({
      client_id: '10723ca53b6d3aaecaa12a194a3997a0'
    });
    SC.get('/tracks').then(function(tracks){                                    //Request for the song list
      var number = this.state.number;
      SC.stream('/tracks/' + number).then(function(player){      //PLAY SONG
          player.pause();
      });
      console.log('Song played: ' + tracks[number].title);
    });
  }

	render()
	{
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
				<div id="track-details" title="Show playlist">
				<i className="fa fa-sort"></i>
				<p id="track-desc">There are no tracks loaded in the player.</p>
				<p id="track-time">
					<span id="current">-</span> / <span id="total">-</span>
				</p>
				</div>

				<div id="expand-bar" className="hidden">
  				<h2>Playlist name</h2>

  				<forHtmlm>
  					<label forHtml="searchBox">Search</label><div><input id="searchBox" type="search" name="search"/></div>
  				</forHtmlm>
  				<ul id="list"></ul>
			  </div>
	    </div>
	  </div>

		);
	}
}

export default ControlBar;