import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher.jsx';

class MusicStore extends EventEmitter{
  constructor()
  {
    super();
    this.songList = [];
    this.player = null;
    console.log("?");
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
    this.playAction = this.playAction.bind(this);
  }


  playAction(song)
  {
    this.SC.stream('/tracks/' + song.id).then((player) => {            //PLAY SONG
          player.play();
          this.player = player;
        });   
  }

  getAll()
  {
    return this.songList;
  }

  handleActions(action)
  {
    switch(action.type)
    {
      case "PLAY_SONG" :{
        this.playAction(action.songDetails);
      }
    }
  }
}

const musicStore = new MusicStore;
dispatcher.register(musicStore.handleActions.bind(musicStore));

export default musicStore;