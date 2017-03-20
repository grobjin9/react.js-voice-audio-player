const React = require('react'),
      Tooltip = require('./Tooltip'),
      EqualizerVerticalSlider = require('./sliders/EqualizerVerticalSlider');

class Equalizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.equalizerOnClick = this.equalizerOnClick.bind(this);
  }

  equalizerOnClick(e) {
    if (e.target !== this.equalizer) return;

    this.setState({
      active: !this.state.active
    });

    document.documentElement.click();
    document.onclick = null;

    if (!this.state.active) {
      document.onclick = (e) => {
        if (e.target.closest('#equalizer') !== this.equalizer) {

          this.setState({
            active: !this.state.active
          });

          document.onclick = null;
        }
      };
    }
  }

  render() {
    let types = ['frequency', 'gain'],
      sliders = [{title: 'BASS', types}, {title: 'MID', types}, {title: 'TREBLE', types}],
      handler = this.props.filterFrequencies;

    return (
      <li onClick={this.equalizerOnClick}
          id="equalizer"
          className={'equalizer icon ' + (this.state.active ? 'activated' : '')}
          ref={(eq) => this.equalizer = eq }>
        <Tooltip visible={this.state.active} size="m">
          {sliders.map(slider => (
            <EqualizerVerticalSlider len={sliders.length} key={slider.title} handler={handler} data={slider}/>
          ))}
        </Tooltip>
      </li>
    );
  }

  static propTypes = {
    filterFrequencies: React.PropTypes.func.isRequired
  }
}

module.exports = Equalizer;