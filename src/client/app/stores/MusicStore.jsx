import { EventEmitter } from 'events';

class MusicStore extends EventEmitter{
  constructor()
  {
    super();
    this.songList = [];
    this.SC = require('soundcloud');
    this.SC.initialize(
      {client_id: '10723ca53b6d3aaecaa12a194a3997a0'});
    SC.get('/tracks').then((tracks) => {                                        //Request for the song list
          for (var i = 1; i< 12; i++)
            {
              //console.log(tracks[i].title + " " + i);
              this.songList.push(tracks[i]);
            }
      });
    for (var j; j< 8 ; j++)
    {
      console.log(this.songList[i].title + " " + i);
    }
  }

  getAll()
  {
    return this.songList;
  }
}

const musicStore = new MusicStore;

export default musicStore;