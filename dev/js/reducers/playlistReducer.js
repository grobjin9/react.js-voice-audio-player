const initialState = require('./initialState'),
      constants = require('../constants/playlistConstants'),
      factory = require('./factory'),
      shuffle = require('../utils/format').shuffle,
      normalizeIndices = require('../utils/format').normalizeIndices;

// artwork_url is a property of a SC track object that represents a cover

function playerReducer(state = initialState.playlist, action) {
  switch (action.type) {
    case constants.FETCH_PLAYLIST_START:
      return Object.assign({}, state, {
        fetched: false,
        fetching: true
      });

    case constants.UPDATE_PLAYLIST:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        tracks: action.tracks
          .filter(track => track.artwork_url && track.streamable)
          .map((track, index) => factory.createEntity('track', Object.assign(track, {
            index: index
          })))
      });

    case constants.FETCH_PLAYLIST_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.error
      });

    case constants.UPDATE_SEARCH_TEXT:
      return Object.assign({}, state, {
        searchText: action.text,
        done: false
      });

    case constants.CONCAT_PARTIAL_TRACKS:
      let lastIndex = state.tracks[state.tracks.length - 1].index + 1;
      let newTracks = action.tracks.collection
        .filter(track => track.artwork_url && track.streamable)
        .map((track, index) => factory.createEntity('track', Object.assign(track, {
          index: index + lastIndex
        })));

      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        tracks: state.tracks.concat(newTracks),
        done: !action.tracks.next_href
      });

    case constants.SHUFFLE_TRACKS:
      return Object.assign({}, state, {
        tracks: normalizeIndices(shuffle(state.tracks))
      });

    default:
      return state;
  }
}

module.exports = playerReducer;
