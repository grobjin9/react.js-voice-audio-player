const constants = require('../constants/favoritesConstants');

const fetchFavoritesStart = function () {
  return {
    type: constants.FETCH_FAVORITES_START
  };
};

const removeTrack = function (id) {
  return {
    type: constants.REMOVE_TRACK,
    id
  };
};

const updateFavorites = function (tracks) {
  return {
    type: constants.UPDATE_FAVORITES,
    tracks
  };
};

const fetchFavoritesError = function (error) {
  return {
    type: constants.FETCH_FAVORITES_ERROR,
    error
  };
};

const updateAmount = function (amount) {
  return {
    type: constants.UPDATE_AMOUNT,
    amount
  };
};

const shuffleTracks = function () {
  return {
    type: constants.SHUFFLE_TRACKS
  };
};

module.exports = {
  fetchFavoritesStart,
  updateFavorites,
  fetchFavoritesError,
  updateAmount,
  removeTrack,
  shuffleTracks
};