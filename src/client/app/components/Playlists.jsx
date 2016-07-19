import React from 'react';


class Playlists extends React.Component{
  render()
  {
    return(
      <ul id="playlists">
    <li className="playlist">
      <img src="http://www.udiscovermusic.com/wp-content/uploads/2015/10/AbbeyRoad.jpg" alt="Abbey Road" />
      <h3>Abbey Road</h3>
      <span>
        <i className="fa fa-2x fa-play"></i>
      </span>
      <span title="Remove Playlist" className="remove">×</span>
    </li>

    <li className="playlist">
      <img src="http://www.udiscovermusic.com/wp-content/uploads/2015/10/Atom-Heart.jpg" alt="Atom Heart" />
      <h3>Atom Heart</h3>
      <span>
        <i className="fa fa-2x fa-play"></i>
      </span>
      <span title="Remove Playlist" className="remove">×</span>
    </li>

    <li className="playlist">
      <img src="http://www.udiscovermusic.com/wp-content/uploads/2015/10/Marvin-Gaye-Whats-Going-On-CD-ALBUM-581521.jpg" alt="What's Going On" />
      <h3>What's Going On</h3>
      <span>
        <i className="fa fa-2x fa-play"></i>
      </span>
      <span title="Remove Playlist" className="remove">×</span>
    </li>

    <li className="playlist">
      <img src="http://www.udiscovermusic.com/wp-content/uploads/2015/10/Slave-to-the-Rhythm.jpg" alt="Slave to the Rhythm" />
      <h3>Slave to the Rhythm</h3>
      <span>
        <i className="fa fa-2x fa-play"></i>
      </span>
      <span title="Remove Playlist" className="remove">×</span>
    </li>

    <li className="playlist">
      <img src="http://www.udiscovermusic.com/wp-content/uploads/2015/10/Pink_Floyd_-_Dark_Side_of_the_Moon.jpg" alt="Dark Side of the Moon" />
      <h3>Dark Side of the Moon</h3>
      <span>
        <i className="fa fa-2x fa-play"></i>
      </span>
      <span title="Remove Playlist" className="remove">×</span>
    </li>
  </ul>
      );
  }
}

export default Playlists;