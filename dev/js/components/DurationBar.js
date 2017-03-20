const React = require('react'),
      formatMStoS = require('../utils/format').formatMStoS;

class DurationBar extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.duration !== this.props.duration;
  }

  render() {
    return (
      <li className="time-bar__endpoint">
        <span id="duration" className="duration">{formatMStoS(this.props.duration)}</span>
      </li>
    );
  }

  static propTypes = {
    duration: React.PropTypes.number.isRequired
  }
}

module.exports = DurationBar;