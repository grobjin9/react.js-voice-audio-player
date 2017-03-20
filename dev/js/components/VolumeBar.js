const React = require('react'),
      Tooltip = require('./Tooltip'),
      VerticalSlider = require('./sliders/VerticalSlider');

class VolumeBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      volume: 'high'
    };

    this.volumeBarOnClick = this.volumeBarOnClick.bind(this);
    this.sliderOnClick = this.sliderOnClick.bind(this);
    this.thumbOnMouseMove = this.thumbOnMouseMove.bind(this);
  }

  volumeBarOnClick(e) {
    if (e.target !== this.volumeBar) return;

    this.setState({
      active: !this.state.active
    });

    document.documentElement.click();
    document.onclick = null;

    if (!this.state.active) {
      document.onclick = (e) => {
        if (e.target.closest('#volume') !== this.volumeBar) {

          this.setState({
            active: !this.state.active
          });

          document.onclick = null;
        }
      };
    }
  }

  sliderOnClick(volume) {
    let setVolume = this.props.setVolume;

    this.setState({
      volume: VolumeBar.getCurrentVolStatus(volume)
    });

    setVolume(volume);
  }

  thumbOnMouseMove(volume) {
    let setVolume = this.props.setVolume;

    this.setState({
      volume: VolumeBar.getCurrentVolStatus(volume)
    });

    setVolume(volume);
  }

  render() {
    let volumeStatus = this.state.volume;

    return (
      <li onClick={this.volumeBarOnClick}
          id="volume"
          className={'volume-' + volumeStatus + ' icon ' + (this.state.active ? 'activated' : '')}
          ref={(vb) => this.volumeBar = vb }>
        <Tooltip visible={this.state.active} size="m">
          <VerticalSlider
            sliderOnClick={this.sliderOnClick}
            thumbOnMouseMove={this.thumbOnMouseMove}
            title='VOL'
            initVal={1}
          />
        </Tooltip>
      </li>
    );
  }

  static getCurrentVolStatus(vol) {
    if (vol === 0) {
      return 'mute';
    } else if (vol <= 0.4) {
      return 'low'
    } else if (vol <= 0.7) {
      return 'medium'
    } else {
      return 'high'
    }
  }

  static propTypes = {
    setVolume: React.PropTypes.func.isRequired
  }
}

module.exports = VolumeBar;