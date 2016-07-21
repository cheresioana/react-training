import React from 'react';
import { Menu, Button } from 'react-bootstrap';
import Wave from './Wave.jsx';
import { Link } from 'react-router';

class LeftMenu extends React.Component{
  	constructor() {
        super();
        this.state = {
          menu : "hidden"
        };
        console.log(this.state.menu);
        this.showMenu = this.showMenu.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
        var SC = require('soundcloud');
    }

    showMenu()
    {
        this.setState({
          menu: "active"
        });
    }

    mouseExit()
    {
        this.setState({
          menu: "hidden"
        });
    }

  render () {
    return(
    <div>
      <button id="menu-toggle" onClick={this.showMenu}>
        <i className="fa fa-bars fa-fw fa-2x"></i>
      </button>

      <ul id="menu" className={this.state.menu} onMouseLeave={this.mouseExit}>
        <li className="acitve">
          <Link to="/">
            Now Playing
          </Link>
        </li>

        <li>
          <Link to="/">
            Explore Tracks
          </Link>
        </li>

        <li>
          <Link to="/playlists">
            My Playlists
          </Link>
        </li>
      </ul>
       <Wave />
    </div>  
      );
  }
}

export default LeftMenu;