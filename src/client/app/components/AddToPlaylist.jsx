import React from 'react';

class AddToPlaylist extends React.Component{
  
  render()
  {
    const closeModal = this.props.closeModal;

    return(
      <div>
        <div id="backdrop" onClick={closeModal}></div>
        <div className="modal">
          <h2>Add "Never Gonna Give You Up" to Playlist</h2>

          <form>
            <label htmlFor="addToPlaylist">Playlist:</label>
            <select id="addToPlaylist">
              <option value="1">Abbey Road</option>
              <option value="2">Atom Heart</option>
              <option value="3">What's Going On</option>
              <option value="4">Slave to the Rhythm</option>
              <option value="5">Dark Side of the Moon</option>
              <option value="new" selected>Create New Playlist</option>
            </select>

            <label htmlFor="addPlaylist">Playlist Name:</label>
            <input type="text" id="addPlaylist"/>
          </form>

          <button onClick={closeModal}>
            Save
          </button>
        </div>
      </div>
      );
  }
}

export default AddToPlaylist;