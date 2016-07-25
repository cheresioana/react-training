import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher.jsx';

class MusicStore extends EventEmitter{
  constructor()
  {
    super();
    this.songList = [];
    this.songsNumber = 0;
    this.player = null;
    this.song = null;
    console.log("?");
    this.SC = require('soundcloud');
    this.SC.initialize(
      {client_id: '10723ca53b6d3aaecaa12a194a3997a0'});
    SC.get('/tracks').then((tracks) => {                                        //Request for the song list
          tracks.map((eachName)=> {
          this.songList.push(eachName);
          this.songsNumber++
      });
      this.emit("change");
    });
    this.getAll = this.getAll.bind(this);
    this.playSonga = this.playSonga.bind(this);
    this.pauseSonga = this.pauseSonga.bind(this);
    this.continueSonga = this.continueSonga.bind(this);
  }


  playSonga(song)
  {
    this.SC.stream('/tracks/' + song.id).then((player) => {            //PLAY SONG
          player.play();
          this.player = player;
      });   
  }

  continueSonga()
  {
    console.log("de ce pizda matii ajungi in continue");
    if (this.player)
      this.player.play();
  }

  pauseSonga()
  {
    if (this.player)
      this.player.pause();
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
        this.playSonga(action.songDetails);
      }
      case "PAUSE_SONG" :{
        this.pauseSonga();
      }
      case "CONTINUE_SONG" :{
        this.continueSonga();
      }
    }
  }
}

const musicStore = new MusicStore;
dispatcher.register(musicStore.handleActions.bind(musicStore));

export default musicStore;