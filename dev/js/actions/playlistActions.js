const constants = require('../constants/playlistConstants');

const fetchPlaylistStart = function () {
  return {
    type: constants.FETCH_PLAYLIST_START
  };
};

const updatePlaylist = function (tracks) {
  return {
    type: constants.UPDATE_PLAYLIST,
    tracks
  };
};

const fetchPlaylistError = function (error) {
  return {
    type: constants.FETCH_PLAYLIST_ERROR,
    error
  };
};

const updateFavoriteTracks = function (tracks) {
  return {
    type: constants.UPDATE_FAVORITE_TRACKS,
    tracks
  };
};

const concatPartialTracks = function (tracks) {
  return {
    type: constants.CONCAT_PARTIAL_TRACKS,
    tracks
  };
};

const changeSearchText = function (text) {
  return {
    type: constants.UPDATE_SEARCH_TEXT,
    text
  };
};

const shuffleTracks = function () {
  return {
    type: constants.SHUFFLE_TRACKS
  };
};

module.exports = {
  fetchPlaylistStart,
  updatePlaylist,
  fetchPlaylistError,
  updateFavoriteTracks,
  changeSearchText,
  concatPartialTracks,
  shuffleTracks
};