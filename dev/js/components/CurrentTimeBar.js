const React = require('react'),
      formatMStoS = require('../utils/format').formatMStoS;

const CurrentTimeBar = function (props) {
  return (
    <li className="time-bar__startpoint">
      <span id="currentTime" className="currentTime">{formatMStoS(props.currentTime)}</span>
    </li>
  );
};

CurrentTimeBar.propTypes = {
  currentTime: React.PropTypes.number.isRequired
};

module.exports = CurrentTimeBar;