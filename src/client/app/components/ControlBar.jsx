import React from 'react';


class ControlBar extends React.Component{
	constructor()
	{
		super();
   
    this.state = {
      expendedBar: "hidden"
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
     
  }
 
  pauseSong()
  {    
 
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
				<div id="track-details" title="Show playlist" onClick={this.expend}>
				<i className="fa fa-sort"></i>
				<p id="track-desc">There are no tracks loaded in the player.</p>
				<p id="track-time">
					<span id="current">-</span> / <span id="total">-</span>
				</p>
				</div>

				<div id="expand-bar" className={this.state.expendedBar} onMouseLeave={this.hide}>
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

ControlBar.propTypes = {
  
}

ControlBar.defaultProps = {
 
}

export default ControlBar;