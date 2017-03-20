const React = require('react'),
      {connect} = require('react-redux'),
      playerAPI = require('../utils/playerAPI'),
      VolumeBar = require('../components/VolumeBar'),
      EqualizerBar = require('../components/Equalizer'),
      {shuffleTracks: shufflePlaylist} = require('../actions/playlistActions'),
      {shuffleTracks: shuffleFavorites} = require('../actions/favoritesActions');

class ProcessingBar extends React.Component {
  constructor(props) {
    super(props);

    this.setVolume = this.setVolume.bind(this);
    this.toggleRepeat = this.toggleRepeat.bind(this);
    this.shuffleCurrentPlaylist = this.shuffleCurrentPlaylist.bind(this);
    this.filterFrequencies = this.filterFrequencies.bind(this);
  }

  setVolume(volume) {
    playerAPI.setVolume(volume);
  }

  filterFrequencies(filter) {
    playerAPI.filterValues(filter);
  }

  toggleRepeat() {
    playerAPI.toggleRepeat();
  }

  shuffleCurrentPlaylist() {
    let {dispatch, currentTab} = this.props;

    currentTab === 'playlist' ? dispatch(shufflePlaylist()) : dispatch(shuffleFavorites());
  }

  render() {
    let repeat = this.props.repeat;

    return (
      <div className="processing-bar">
        <ul>
          <VolumeBar setVolume={this.setVolume}/>
          <EqualizerBar filterFrequencies={this.filterFrequencies}/>
          <li id="processing-bar__shuffle" onClick={this.shuffleCurrentPlaylist} className="icon"></li>
          <li id="repeat" style={{color: repeat ? '#3ccecf' : ''}} onClick={this.toggleRepeat} className="icon"></li>
        </ul>
      </div>
    );
  }

  static propTypes = {
    repeat: React.PropTypes.bool.isRequired,
    currentTab: React.PropTypes.string.isRequired
  }
}

function mapStateToProps(state) {
  return {
    repeat: state.player.repeat,
    currentTab: state.ui.currentTab
  };
}

module.exports = connect(mapStateToProps)(ProcessingBar);
