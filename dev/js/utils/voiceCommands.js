const playerAPI = require('./playerAPI'),
      {dispatch, getState} = require('../reducers/store'),
      favoritesActions = require('../actions/favoritesActions'),
      playlistActions = require('../actions/playlistActions'),
      {changeCurrentTab} = require('../actions/uiActions'),
      localStore = require('./localStore');

const voiceCommands = {
  'switch': function () {
    playerAPI.toggle();
  },
  'play next track': function () {
    playerAPI.playNext();
  },
  'play previous track': function () {
    playerAPI.playPrev();
  },
  'repeat track': function () {
    playerAPI.toggleRepeat();
  },
  'search for *track': function (track) {
    dispatch(playlistActions.changeSearchText(track));
  },
  'play playlist': function () {
    dispatch(changeCurrentTab('playlist'));
    playerAPI.playFirstTrack();
  },
  'play favorites': function () {
    let {favorites} = getState();

    if (favorites.amount > favorites.tracks.length) {
      dispatch(favoritesActions.fetchFavoritesStart());
      dispatch(changeCurrentTab('favorites'));
      playerAPI.findTracksByIds(localStore.store[localStore._value])
        .then(tracks => {
          dispatch(favoritesActions.updateFavorites(tracks));
          playerAPI.playFirstTrack();
        })
        .catch(error => favoritesActions.fetchFavoritesError(error));
    } else {
      dispatch(changeCurrentTab('favorites'));
      playerAPI.playFirstTrack();
    }
  },
  'shuffle': function () {
    let {currentTab} = getState().ui;

    if (currentTab === 'playlist') {
      dispatch(playlistActions.shuffleTracks());
    } else {
      dispatch(favoritesActions.shuffleTracks());
    }
  }
};

module.exports = voiceCommands;
