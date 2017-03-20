window.AudioContext = window.AudioContext || window.webkitAudioContext;

class Analyzer {
  constructor() {
    this._ctx = new AudioContext();
    this._node = this._ctx.createScriptProcessor(2048, 1, 1);

    this._mid = this._ctx.createBiquadFilter();
    this._mid.type = "peaking";
    this._mid.frequency.value = 350;
    this._mid.gain.value = 0;

    this._bass = this._ctx.createBiquadFilter();
    this._bass.type = "lowshelf";
    this._bass.frequency.value = 200;
    this._bass.gain.value = 0;

    this._treble = this._ctx.createBiquadFilter();
    this._treble.type = "highshelf";
    this._treble.frequency.value = 3000;
    this._treble.gain.value = 0;

    this._analyzer = this._ctx.createAnalyser();
    this._analyzer.smoothingTimeConstant = 0.5;
    this._analyzer.fftSize = 1024;

    this._bands = new Uint8Array(this._analyzer.frequencyBinCount);

    this._cfg = {
      MAX_GAIN: 3,
      MIN_GAIN: -3,
      MAX_TREBLE_VALUE: 6000,
      MAX_BASS_VALUE: 400,
      MAX_MID_VALUE: 700
    };

    window.SC.initialize({
      client_id: '94b8a7e5efe62b01c8ca3f03cc3ccca8'
    });
  }

  filterValues(filter) {
    // KEK (:
    let title = filter.title === 'BASS' ? '_bass' : filter.title === 'MID' ? '_mid' : '_treble';

    this[title][filter.type].value = filter.type === 'frequency' ?
      filter.ratio * this._cfg[`MAX_${filter.title}_VALUE`] :
      -1 * (3 + ((3 * (filter.ratio * (-3))) / (3 / 2)));
  }

  _initSource(input, updateHandler) {
    this.audio = input;

    if (!this._source) {
      this._source = this._ctx.createMediaElementSource(this.audio);
    }

    this._source.connect(this._bass);
    this._bass.connect(this._mid);
    this._mid.connect(this._treble);
    this._treble.connect(this._analyzer);
    this._analyzer.connect(this._node);
    this._node.connect(this._ctx.destination);
    this._analyzer.connect(this._ctx.destination);

    this._node.onaudioprocess = () => {
      if (!this.audio.paused) {
        this._analyzer.getByteFrequencyData(this._bands);

        updateHandler(this._bands);
      }
    };
  };
}

module.exports = Analyzer;