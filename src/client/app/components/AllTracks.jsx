import React from 'react';
import AddToPlaylist from './AddToPlaylist.jsx';
import MusicStore from '../stores/MusicStore.jsx';

class AllTracks extends React.Component{
        
  constructor()
  {
    super();
   // this.music = new MusicStore();
    this.state = {
      modalActive : false,
      music : MusicStore.getAll()
    }
    /*foreach (var i in music)
      {
        console.log(i.title);
      }*/
      console.log("??");
    this.cc = this.state.music;
    for (var i = 0; i< 15; i++)
      console.log(this.cc[i].title);
    // cc.forEach((track)=>{
    //   console.log("intra");
    //   console.log(track.title);
    //   });
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal()
  {
    this.setState({modalActive: true});
  }

  closeModal()
  {
    this.setState({modalActive: false});
  }

  render()
  {
    return(
    <div>
    <div id="all-tracks">
        <form>
          <label htmlFor="allTracksSearchBox">Search</label>
          <div><input id="allTracksSearchBox" type="search" name="search"/></div>
        </form>

        <ul>
          <li className="track" data-index="0">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="http://netstorage.metrolyrics.com/albums/9414151jpg.jpg"/></div>
            <div>
              <button onClick={this.openModal}>
                <i className="fa fa-fw fa-plus" ></i>
              </button>
              <p className="title">Never Gonna Give You Up</p>
              <p className="artist">Rick Astley</p>
            </div>
          </li>
        </ul>
    </div>
    {(this.state.modalActive) ? (<AddToPlaylist  closeModal={this.closeModal}/>):(null)}
     
    </div>
      );
  }
}

export default AllTracks;