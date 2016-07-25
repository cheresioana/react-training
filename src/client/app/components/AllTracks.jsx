import React from 'react';
import AddToPlaylist from './AddToPlaylist.jsx';
import MusicStore from '../stores/MusicStore.jsx';
import * as MusicActions from '../actions/MusicActions.jsx';

class AllTracks extends React.Component{
        
  constructor()
  {
    super();
    this.state = {
      modalActive : false,
      music : MusicStore.getSongs()
    }
    console.log("???"); 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sort = this.sort.bind(this);
    this.getRequestedMusic = this.getRequestedMusic.bind(this);
  }


  getRequestedMusic(data)
  {
    const result = [];
    const musicCopy = this.state.music;

    musicCopy.map((song) =>{
     (song.title.includes(data))? result.push(song):console.log("Not found!");
    });

    return result;
  }

  sort(event)
  {
    if (event.target.value === "")
       this.setState({
        music : MusicStore.getAll()
      });
     else 
      this.setState({
        music : this.getRequestedMusic(event.target.value)
      });
  }

  componentWillMount()
  {
    MusicStore.on("change", ()=>{
      this.setState({
        music : MusicStore.getSongs()
      });
    });
  }

  openModal(event)
  {
    //console.log(event.target.getAttribute('data-index'));
    this.sendSong = this.state.music[event.target.getAttribute('data-index')];
    console.log(this.sendSong);
    //MusicActions.seSelectedSong(event.)
    this.setState({modalActive: true});
  }

  closeModal()
  {
    this.setState({modalActive: false});
  }

  playSong(song)
  {
    MusicActions.playSong(song);
  }

  render()
  {
    const tracks = this.state.music;
    var index = -1;
    const blocks = tracks.map((song) => {
      index = index + 1;
      return <li className="track" data-index={index}>
            <div onClick={this.playSong.bind(this, song)}><span className="overlay"><i className="fa fa-play"></i></span>
              <img src={song.artwork_url} alt = "no png"/>
            </div>
            <div >
              <button onClick={this.openModal}>
                <i className="fa fa-fw fa-plus" data-index={index}></i>
              </button>
              <p className="title" onClick={this.playSong.bind(this, song)} >{song.title}</p>
              <p className="artist" onClick={this.playSong.bind(this, song)}>{song.user.username}</p>
            </div>
          </li>;
    });

    return(
    <div id="wrapper-all-tracks">
    <div id="all-tracks">
        <form>
          <label htmlFor="allTracksSearchBox">Search</label>
          <div>
            <input id="allTracksSearchBox" type="search" name="search" onChange={this.sort}/>
          </div>
        </form>

        <ul>{blocks}</ul>
    </div>
    {(this.state.modalActive) ? (<AddToPlaylist  closeModal={this.closeModal} selectedSong ={this.sendSong}/>):(null)}
     
    </div>
      );
  }
}

AllTracks.propTypes = {
  song: React.PropTypes.object.isRequired
};

export default AllTracks;