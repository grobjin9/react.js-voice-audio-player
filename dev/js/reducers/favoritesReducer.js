const initialState = require('./initialState'),
      constants = require('../constants/favoritesConstants'),
      factory = require('./factory'),
      shuffle = require('../utils/format').shuffle,
      normalizeIndices = require('../utils/format').normalizeIndices;

// artwork_url is a property of a SC track object that represents a cover

function favoritesReducer(state = initialState.favorites, action) {
  switch (action.type) {
    case constants.FETCH_FAVORITES_START:
      return Object.assign({}, state, {
        fetched: false,
        fetching: true
      });

    case constants.UPDATE_FAVORITES:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        tracks: action.tracks
          .filter(track => track.artwork_url && track.streamable)
          .map((track, index) => factory.createEntity('track', Object.assign(track, {
            index: index
          })))
      });

    case constants.FETCH_FAVORITES_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      });

    case constants.REMOVE_TRACK:
      return Object.assign({}, state, {
        tracks: state.tracks.filter(track => track.id !== action.id)
      });

    case constants.UPDATE_AMOUNT:
      return Object.assign({}, state, {
        amount: action.amount
      });

    case constants.SHUFFLE_TRACKS:
      return Object.assign({}, state, {
        tracks: normalizeIndices(shuffle(state.tracks))
      });

    default:
      return state;
  }
}

module.exports = favoritesReducer;