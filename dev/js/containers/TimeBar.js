const React = require('react'),
      {connect} = require('react-redux'),
      DurationBar = require('../components/DurationBar'),
      CurrentTimeBar = require('../components/CurrentTimeBar'),
      ProgressBar = require('../components/ProgressBar'),
      playerAPI = require('../utils/playerAPI');

class TimeBar extends React.Component {

  constructor(props) {
    super(props);

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime(time) {
    let duration = this.props.duration;

    playerAPI.currentTime = parseInt(time * duration);

    playerAPI.startOver();
  }

  render() {
    let {currentTime, duration} = this.props,
      ratio = currentTime / duration;

    return (
      <div className="time-bar">
        <ul>
          <CurrentTimeBar currentTime={currentTime}/>
          <ProgressBar updateTime={this.updateTime} duration={duration} progress={ratio}/>
          <DurationBar duration={duration}/>
        </ul>
      </div>
    );
  }

  static propTypes = {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired
  }
}

function mapStateToProps(state) {
  return {
    currentTime: state.player.currentTime || 0,
    duration: state.data.duration || 0
  };
}

module.exports = connect(mapStateToProps)(TimeBar);