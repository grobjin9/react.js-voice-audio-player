const {getState} = require('../reducers/store');

exports.getCurrentTrackObject = function () {
  const state = getState(),
    index = state.player.currentTrackIndex,
    currentPlaylist = state.data.currentPlaylist || state.ui.currentTab;

  return state[currentPlaylist].tracks[index];
};

exports.getFirstTrack = function () {
  const state = getState(),
    currentPlaylist = state.ui.currentTab || state.data.currentPlaylist;

  return state[currentPlaylist].tracks[0];
};