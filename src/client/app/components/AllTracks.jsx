import React from 'react';


class AllTracks extends React.Component{
        
  render()
  {
    

   
    return(
    <div id="all-tracks">
        <form>
          <label for="allTracksSearchBox">Search</label>
          <div><input id="allTracksSearchBox" type="search" name="search"/></div>
        </form>

        <ul>
          <li className="track" data-index="0">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="http://netstorage.metrolyrics.com/albums/9414151jpg.jpg"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Never Gonna Give You Up</p>
              <p className="artist">Rick Astley</p>
            </div>
          </li>
          <li className="track" data-index="1" >
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Va Fi Bine (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="2" >
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Stare De Vineri (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="3">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Extreme (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="4">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Free P Feat. No Mo &amp; Dj Soundmeth (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="5">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Drama De Seara (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="6">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Lumea Mea Feat. Ryno (Produsa De Megiddo)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="7">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png"/></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Pentru Noi (Produsa De Base)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
          <li className="track" data-index="8">
            <div><span className="overlay"><i className="fa fa-play"></i></span><img src="/src/assets/img/default.png" /></div>
            <div>
              <button>
                <i className="fa fa-fw fa-plus"></i>
              </button>
              <p className="title">Noaptea Feat. Nasta (Produsa De Base)</p>
              <p className="artist">In Extremis</p>
            </div>
          </li>
        </ul>
    </div>
      );
  }
}

export default AllTracks;