const React = require('react'),
      getCoords = require('../utils/dom').getCoords,
      FavoritesItem = require('./FavoritesItem'),
      PlaylistItem = require('./PlaylistItem'),
      TracksList = require('./TracksList');

let lastTimeValue = 0,
  timer = null;

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.sbOnMouseDown = this.sbOnMouseDown.bind(this);
    this.listOnWheel = this.listOnWheel.bind(this);
    this.updateScrollBarPos = this.updateScrollBarPos.bind(this);
  }

  componentDidMount() {
    this.scrollBarParent = this.scrollBar.parentElement;

    const self = this;

    this._cfg = {
      MIN: 0,
      MAX: self.scrollBarParent.offsetHeight - self.scrollBar.offsetHeight
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.playlistSearchText !== this.props.playlistSearchText) {
      this.list.scrollTop = 0;
      this.scrollBar.style.top = '0px';
    }
  }


  sbOnMouseDown(e) {
    const shiftY = e.pageY - getCoords(this.scrollBar).top;

    document.onmousemove = (e) => {
      let move = e.pageY - shiftY - getCoords(this.scrollBarParent).top,
          ratio = move / (this.scrollBarParent.offsetHeight - this.scrollBar.offsetHeight),
          newTimeValue = new Date(),
          delay = 550;

      if (ratio <= 0) {
        ratio = 0;
      } else if (ratio >= 1) {
        ratio = 1;
      }

      this.updateScrollBarPos(ratio);

      this.list.scrollTop = ratio * (this.list.scrollHeight - this.list.offsetHeight);

      if (ratio >= 1 && this.props.currentTab === 'playlist') {
        if ((newTimeValue - lastTimeValue) < delay) {
          clearTimeout(timer);
        }

        timer = setTimeout(() => {
          let evt = {
            deltaY: 16
          };

          this.props.trackListOnScrolled(evt, this.listOnWheel);
        }, delay);

        lastTimeValue = newTimeValue;
      }
    };

    document.onmouseup = () => {
      document.onmousemove = document.onmouseup = null;
    };
  }

  updateScrollBarPos(ratio) {
    this.scrollBar.style.top = ratio * (this.list.offsetHeight - this.scrollBar.offsetHeight) + 'px';
  }

  listOnWheel(e) {
    let newTimeValue = new Date(),
      delay = 550;

    this.list.scrollTop += e.deltaY / 2;

    let scrollRatio = (this.list.scrollTop / ( this.list.scrollHeight - this.list.offsetHeight ));

    this.updateScrollBarPos(scrollRatio);

    if (scrollRatio >= 1 && this.props.currentTab === 'playlist') {
      if ((newTimeValue - lastTimeValue) < delay) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        this.props.trackListOnScrolled(e, this.listOnWheel);
      }, delay);

      lastTimeValue = newTimeValue;
    }
  }

  render() {
    let {currentTab, name, tracks} = this.props,
      active = tracks.length > 6,
      scrollBarStyle = {visibility: active ? 'visible' : 'hidden'};

    return (
      <div className="playlist-tab" style={{display: currentTab === name ? 'block' : 'none'}}>
        <div ref={(sb) => this.scrollBar = sb}
             onMouseDown={this.sbOnMouseDown}
             className="list-scroller"
             style={scrollBarStyle}>
        </div>

        <ul className="track-list" onWheel={active ? this.listOnWheel : null} ref={(l) => this.list = l}>
          <TracksList {...this.props} />
        </ul>
      </div>
    );
  }

  static propTypes = {
    currentTab: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    tracks: React.PropTypes.array.isRequired,
    playlistSearchText: React.PropTypes.string
  }
}

module.exports = Tab;