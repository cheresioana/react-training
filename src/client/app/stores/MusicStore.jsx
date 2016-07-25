import { EventEmitter } from 'events';
import dispatcher from '../Dispatcher.jsx';

class MusicStore extends EventEmitter{
  constructor()
  {
    super();
    this.songList = [];
    this.playlists = [];
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


    /*SC.get('/playlists').then((playlist) => { 
          console.log(playlist);                                                //Request for the playlists
          tracks.map((eachName)=> {
          this.playlists.push(eachName);
      });
      this.emit("playlists");
    });*/


    this.getSongs = this.getSongs.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.continueSong = this.continueSong.bind(this);
    this.getSong = this.getSong.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }


  playSong(song)
  {
    this.song = song;
    this.SC.stream('/tracks/' + song.id).then((player) => {            //PLAY SONG
          player.play();
          this.player = player;
          this.emit("newSong");
      });   
  }

  continueSong()
  {
    console.log("de ce pizda matii ajungi in continue");
    if (this.player)
      this.player.play();
  }

  pauseSong()
  {
    console.log("ajunge in pause");
    if (this.player)
      this.player.pause();
  }

  getSong()
  {
    return this.song;
  }

  getSongs()
  {
    return this.songList;
  }

  getPlaylists()
  {
    return this.playlists;
  }

  addSongToPlaylist(song, title, nou)
  {
    if(nou)
    {
      var songs = null;
      songs.push(song);
      this.playlists.push({title: title,songs: songs});
    }
    else{
      this.playlists.map((object)=>{
        if (object.title === title)
        {
          object.songs.push(song);
        }
        });
    }
    this.emit("playlist");
  }

  handleActions(action)
  {
    console.log(action.type);
    if (action.type === "PLAY_SONG")
      this.playSong(action.songDetails);
    else if (action.type === "PAUSE_SONG")
        this.pauseSong();
    else if (action.type === "CONTINUE_SONG")
      this.continueSong();
  }
}

const musicStore = new MusicStore;
dispatcher.register(musicStore.handleActions.bind(musicStore));

export default musicStore;