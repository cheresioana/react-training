import React from 'react';

import MusicStore from '../stores/MusicStore.jsx';
import * as MusicActions from '../actions/MusicActions.jsx';


class AddToPlaylist extends React.Component{
  
  constructor()
  {
    super();
    this.state = {
      newPlaylist: true,
      playlists: MusicStore.getPlaylists()
    };
    this.save = this.save.bind(this);
    this.selectPlaylist = this.selectPlaylist.bind(this);
  }

  save()
  {
    console.log(React.findDOMNode(this.id.addPlaylist).value);
    //MusicStore.addSongToPlaylist(this.props.selectedSong)
    this.props.closeModal();
  }

  componentWillMount()
  {
    MusicStore.on("playlist", ()=>{
      this.setState({
        playlists: MusicStore.getPlaylists()
      });
    });
  }

  selectPlaylist(event)
  {
    if (!(event.target.value === "new"))
      this.setState({newPlaylist: false});
  }

  render()
  {

    const closeModal = this.props.closeModal;
    const song = this.props.selectedSong;
    var index = 0;

    const options = this.state.playlists.map((playlist)=>{
      index++;
        return <option value={index}>playlist.title</option>
      });
    return(
      <div>
        <div id="backdrop" onClick={closeModal}></div>
        <div className="modal">
          <h2>Add "{song.title}" to Playlist</h2>

          <form>
            <label htmlFor="addToPlaylist">Playlist:</label>
            <select id="addToPlaylist" onClick={this.selectPlaylist}>
              {options}
              <option value="new" selected>Create New Playlist</option>
            </select>

            
            {(this.state.newPlaylist)?(
              <div>
                <label htmlFor="addPlaylist">Playlist Name:</label>
                <input type="text" id="addPlaylist"/>
              </div>
              ) : (null)}
          </form>

          <button onClick={this.save}>
            Save
          </button>
        </div>
      </div>
      );
  }
}

export default AddToPlaylist;