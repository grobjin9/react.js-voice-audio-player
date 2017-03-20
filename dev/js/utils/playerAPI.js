const soundcloud = require('soundcloud'),
      url = require('url'),
      Analyzer = require('./WebAudioAnalyzer'),
      CanvasSpectrum = require('./CanvasSpectrum'),
      {getState, dispatch} = require('../reducers/store'),
      {changeCurrentTime, changeTrack, toggleTrack, playTrack, toggleRepeatTrack} = require('../actions/playerActions'),
      {updateData} = require('../actions/dataActions'),
      {getCurrentTrackObject, getFirstTrack} = require('../utils/trackUtils'),
      {NEXT_TRACK, PREV_TRACK} = require('../constants/playerConstants');

class PlayerAPI {
  constructor(clientId = '94b8a7e5efe62b01c8ca3f03cc3ccca8') {
    this.audio = new Audio();
    this.audio.crossOrigin = "anonymous";

    this.clientId = clientId;

    window.SC.initialize({
      client_id: this.clientId
    });

    this.audioAnalyzer = new Analyzer();
    this.canvasSpectrum = new CanvasSpectrum(document.getElementById('canvas'));
    this.nextHref = null;
    this.repeat = false;

    this.audio.addEventListener('ended', () => this.audioOnFinish());
    this.audio.addEventListener('timeupdate', () => this.audioOnTimeUpdate());
    this.audio.addEventListener('canplaythrough', () => this.audioOnCanPlayThrough());
  }

  findTracks(searchString) {
    this.nextHref = null;

    return soundcloud.get('/tracks', PlayerAPI.createQueryObject(searchString, true))
      .then(result => {
        this.nextHref = url.parse(result.next_href, true).query;

        return result.collection;
      });
  }

  filterValues(filter) {
    this.audioAnalyzer.filterValues(filter);
  }

  toggleRepeat() {
    dispatch(toggleRepeatTrack());
    this.repeat = !this.repeat;
  }

  findPartialTracks(searchString) {
    if (this.nextHref === null) return;

    return soundcloud.get('/tracks', this.nextHref)
      .then(result => {
        this.nextHref = result.next_href ? url.parse(result.next_href, true).query : result.next_href;

        return result;
      });
  }

  findTrackById(id) {
    return soundcloud.get(`/tracks/${id}`);
  }

  findTracksByIds(ids) {
    return soundcloud.get('/tracks?ids=' + ids);
  }

  loadTrack(src) {
    this.audio.src = src + '?client_id=' + this.clientId;
  }

  playNext() {
    if (this.audio.src) {
      dispatch(changeTrack(NEXT_TRACK));
      this.play(getCurrentTrackObject().streamUrl);

      dispatch(updateData(getCurrentTrackObject()));
    }
  }

  playPrev() {
    if (this.audio.src) {
      dispatch(changeTrack(PREV_TRACK));
      this.play(getCurrentTrackObject().streamUrl);

      dispatch(updateData(getCurrentTrackObject()));
    }
  }

  play(src) {
    if (this.audio.src === src) return;

    this.loadTrack(src);

    dispatch(toggleTrack(true));

    this.audio.play();
  }

  pause() {
    this.audio.pause();

    dispatch(toggleTrack(false));
  }

  startOver() {
    this.audio.play();

    dispatch(toggleTrack(true));
  }

  setVolume(val) {
    this.audio.volume = val;
  }

  playFirstTrack() {
    let track = getFirstTrack(),
      {ui, playlist} = getState();

    dispatch(playTrack(track.index));

    dispatch(updateData(Object.assign(track, {
      currentPlaylist: ui.currentTab,
      searchText: playlist.searchText
    })));

    this.play(track.streamUrl);
  }

  toggle() {
    if (!this.audio.currentSrc) {
      this.playFirstTrack();
      return;
    }

    if (this.audio.paused) {
      this.startOver();
    } else {
      this.pause();
    }
  }

  get currentTime() {
    return this.audio.currentTime * 1000;
  }

  set currentTime(time) {
    this.audio.currentTime = time / 1000;
  }

  audioOnCanPlayThrough() {
    this.audioAnalyzer._initSource(this.audio, this.canvasSpectrum.update.bind(this.canvasSpectrum));
  }

  audioOnTimeUpdate() {
    let time = this.currentTime;

    dispatch(changeCurrentTime(time));
  }

  audioOnFinish() {
    if (this.repeat) {
      setTimeout(() => {
        dispatch(changeCurrentTime(0));
        this.currentTime = 0;
        this.startOver();
      }, 500);

      return;
    }

    this.playNext();
  }

  static createQueryObject(searchString, partial = false) {
    let query = {
      q: searchString,
      limit: 200
    };

    return partial ? Object.assign(query, {linked_partitioning: 1}) : query;
  }
}

const playerAPI = new PlayerAPI();

module.exports = playerAPI;