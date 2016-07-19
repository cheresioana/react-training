import React from 'react';

class CoverArt extends React.Component{
    render()
    {
      return(
        <div id="cover-art">
          <div id="cover-art-big"></div>
          <img id="cover-art-small" alt="cover-art-small" src="/src/assets/img/default.png"/>
        </div>
      );
    }
}

export default CoverArt;