const initialState = require('./initialState'),
      constants = require('../constants/playerConstants');

function playerReducer(state = initialState.player, action) {

  switch (action.type) {
    case constants.CHANGE_PLAYING_TRACK:
      return Object.assign({}, state, {
        currentTrackIndex: action.trackIndex
      });

    case constants.TOGGLE_TRACK:
      return Object.assign({}, state, {
        isPlaying: action.isPlaying
      });

    case constants.CHANGE_CURRENT_TIME:
      return Object.assign({}, state, {
        currentTime: action.time
      });

    case constants.TOGGLE_REPEAT_TRACK:
      return Object.assign({}, state, {
        repeat: !state.repeat
      });

    default:
      return state;
  }
}

module.exports = playerReducer;