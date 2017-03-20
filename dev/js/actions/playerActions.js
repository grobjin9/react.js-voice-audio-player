const constants = require('../constants/playerConstants');

const changePlayingTrack = function (trackIndex) {
  return {
    type: constants.CHANGE_PLAYING_TRACK,
    trackIndex
  };
};

const changeCurrentTime = function (time) {
  return {
    type: constants.CHANGE_CURRENT_TIME,
    time
  };
};

const toggleTrack = function (isPlaying) {
  return {
    type: constants.TOGGLE_TRACK,
    isPlaying
  };
};

const toggleRepeatTrack = function () {
  return {
    type: constants.TOGGLE_REPEAT_TRACK
  };
};

const changeTrack = function (eType) {
  return function (dispatch, getState) {
    const {playlist, player} = getState();

    let index = player.currentTrackIndex,
      incIndex = index + 1,
      decIndex = index - 1,
      nextTrackIndex;

    if (eType === constants.NEXT_TRACK) {
      if (incIndex > playlist.tracks.length - 1) {
        incIndex = playlist.tracks.length - 1;
      }

      nextTrackIndex = incIndex;
    } else if (eType === constants.PREV_TRACK) {
      if (decIndex < 0) {
        decIndex = 0;
      }

      nextTrackIndex = decIndex;
    }

    dispatch(changePlayingTrack(nextTrackIndex));
    dispatch(changeCurrentTime(0));
  };
};

const playTrack = function (trackIndex) {
  return function (dispatch, getState) {
    const {player} = getState();

    if (trackIndex === player.currentTrackIndex) {
      console.log('this');
      return;
    }

    dispatch(changeCurrentTime(0));
    dispatch(changePlayingTrack(trackIndex));

  };
};

module.exports = {
  changePlayingTrack,
  changeCurrentTime,
  changeTrack,
  playTrack,
  toggleTrack,
  toggleRepeatTrack
};