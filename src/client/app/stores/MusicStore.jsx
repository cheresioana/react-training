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
          tracks.map((eachName)=> {
          this.songList.push(eachName);
      });
      this.emit("change");
    });
    this.getAll = this.getAll.bind(this);
  }

  getAll()
  {
    return this.songList;
  }
}

const musicStore = new MusicStore;

export default musicStore;