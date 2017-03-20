const {getState, dispatch} = require('../reducers/store'),
      {updateFavoriteTracks} = require('../actions/playlistActions'),
      playerAPI = require('./playerAPI');

class LocalStore {
  constructor() {
    this.store = window.localStorage;

    this._value = 'rrsap16';

    if (!this.store[this._value]) {
      this.store[this._value] = '';
    }
  }

  add(track) {
    if (this.store[this._value].indexOf(track.id) >= 0) {
      this.remove(track);
      return;
    }

    if (!this.store[this._value].length) {
      this.store[this._value] += track.id;
      return;
    }

    this.store[this._value] += ',' + track.id;
  }

  includes(id) {
    return this.store[this._value].split(',').includes(id.toString());
  }

  get length() {
    let arr = this.store[this._value].split(',');

    if (arr[0] === '') {
      return 0;
    }

    return arr.length
  }

  remove(track) {
    if (this.store[this._value].indexOf(track.id) < 0) return;

    this.store[this._value] = this.store[this._value].split(',').filter(trackId => trackId !== track.id.toString()).join(',');
  }
}

const store = new LocalStore();

module.exports = store;