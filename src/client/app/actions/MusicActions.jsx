import dispatcher from '../Dispatcher.jsx';

export function playSong(song){
	dispatcher.dispatch({
		type: "PLAY_SONG",
		songDetails : song
	});
}

export function pauseSong(){
	dispatcher.dispatch({
		type: "PAUSE_SONG"
	});
}

export function addToPlaylist(song){
	dispatcher.dispatch({
		type: "ADD_TO_PLAYLIST",
		songDetails: song
	});
}

export function continueSong(){
	dispatcher.dispatch({
		type: "CONTINUE_SONG"
	});
}