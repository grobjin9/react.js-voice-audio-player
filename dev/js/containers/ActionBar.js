const React = require('react'),
      {connect} = require('react-redux'),
      playerAPI = require('../utils/playerAPI'),
      PlayButton = require('../components/buttons/PlayButton'),
      NextButton = require('../components/buttons/NextButton'),
      PrevButton = require('../components/buttons/PrevButton');

class ActionBar extends React.Component {
  constructor(props) {
    super(props);

    this.prevBtnOnClick = this.prevBtnOnClick.bind(this);
    this.playBtnOnClick = this.playBtnOnClick.bind(this);
    this.nextBtnOnClick = this.nextBtnOnClick.bind(this);
  }

  prevBtnOnClick() {
    playerAPI.playPrev();
  }

  playBtnOnClick() {
    playerAPI.toggle();
  }

  nextBtnOnClick() {
    playerAPI.playNext();
  }

  render() {
    return (
      <div className="action-bar">
        <ul>
          <PrevButton prevBtnOnClick={this.prevBtnOnClick}/>
          <PlayButton isPlaying={this.props.isPlaying} playBtnOnClick={this.playBtnOnClick}/>
          <NextButton nextBtnOnClick={this.nextBtnOnClick}/>
        </ul>
      </div>
    );
  }

  static propTypes = {
    isPlaying: React.PropTypes.bool.isRequired
  }
}

function mapStateToProps(state) {
  return {
    isPlaying: state.player.isPlaying
  };
}

module.exports = connect(mapStateToProps)(ActionBar);