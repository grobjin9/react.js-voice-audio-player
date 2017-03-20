const React = require('react'),
      getCoords = require('../utils/dom').getCoords,
      playerAPI = require('../utils/playerAPI');

class TrackProgressBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tooltipVisibility: false
    };

    this.progressBarOnDrag = this.progressBarOnDrag.bind(this);
    this.sliderOnClick = this.sliderOnClick.bind(this);
    this._documentOnMouseMove = this._documentOnMouseMove.bind(this);
  }

  componentDidMount() {
    this.sliderWidth = this.slider.offsetWidth;
    this.thumbWidth = this.thumb.offsetWidth;

    this.endPoint = this.sliderWidth - this.thumbWidth;

    this._cfg = {
      MIN: 0,
      MAX: this.slider.offsetWidth - this.thumb.offsetWidth
    };
  }

  _documentOnMouseMove(e, shiftX = 0) {
    playerAPI.pause();

    let updateTime = this.props.updateTime,
      move = e.pageX - getCoords(this.slider).left - (shiftX || this.thumbWidth / 2),
      ratio = move / this._cfg.MAX;

    if (ratio <= 0) {
      ratio = 0;
    } else if (ratio >= 1) {
      ratio = 1;
    }

    this.thumb.style.left = ratio * this._cfg.MAX + 'px';
    this.counter.style.width = ratio * this._cfg.MAX + (this.thumb ? this.thumbWidth / 2 : 0.3) + 'px';

    document.onmouseup = function () {
      updateTime(ratio);

      this.onmousemove = this.onmouseup = null;
    };

  }

  progressBarOnDrag(e) {
    let shiftX = e.pageX - getCoords(this.thumb).left,
      updateTime = this.props.updateTime;

    playerAPI.pause();

    document.onmousemove = (e) => {
      let move = e.pageX - getCoords(this.slider).left - shiftX,
        ratio = move / this._cfg.MAX;

      if (ratio <= 0) {
        ratio = 0;
      } else if (ratio >= 1) {
        ratio = 1;
      }

      this.thumb.style.left = ratio * this._cfg.MAX + 'px';
      this.counter.style.width = ratio * this._cfg.MAX + this.thumbWidth / 2 + 'px';

      document.onmouseup = function () {
        updateTime(ratio);

        this.onmousemove = this.onmouseup = null;
      };
    };
  }

  sliderOnClick(e) {
    if (e.target === this.thumb) return;

    let updateTime = this.props.updateTime,
      move = e.pageX - getCoords(this.slider).left - this.thumbWidth / 2,
      ratio = move / this._cfg.MAX;

    if (ratio <= 0) {
      ratio = 0;
    } else if (ratio >= 1) {
      ratio = 1;
    }

    updateTime(ratio);
  }

  render() {
    let progress = this.props.progress,
      thumbStyle = {left: progress * this.endPoint + 'px'},
      counterStyle = {width: progress * this.endPoint + this.thumbWidth / 2 + 'px'};

    return (
      <li className="time-bar__progress-bar">
        <div className="progress-slider"
             onMouseDown={this.sliderOnClick}
             ref={(s) => this.slider = s}>
          <div
            className="progress-slider__thumb"
            style={thumbStyle}
            onMouseDown={this.progressBarOnDrag}
            ref={(th) => this.thumb = th}>
          </div>
          <div className="progress-slider__timeCounter" style={counterStyle} ref={(c) => this.counter = c}></div>
        </div>
      </li>
    );
  }

  static propTypes = {
    updateTime: React.PropTypes.func.isRequired,
    progress: React.PropTypes.number.isRequired
  }
}

module.exports = TrackProgressBar;