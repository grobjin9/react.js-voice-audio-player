const React = require('react'),
      ActionBar = require('../containers/ActionBar'),
      TimeBar = require('../containers/TimeBar'),
      ProcessingBar = require('../containers/ProcessingBar');


class ControlBar extends React.Component {
  render() {
    return (
      <div id="control-bar">
        <div className="control-bar__content">
          <ActionBar />
          <TimeBar />
          <ProcessingBar />
        </div>
      </div>
    );
  }
}

module.exports = ControlBar;