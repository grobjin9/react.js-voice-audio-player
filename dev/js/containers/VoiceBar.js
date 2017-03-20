const React = require('react'),
      annyang = require('annyang'),
      commands = require('../utils/voiceCommands');

class VoiceBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };

    if (annyang) {
      annyang.addCommands(commands);
    }

    this.voiceBarOnClick = this.voiceBarOnClick.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isActive) {
      annyang.start();
    } else {
      annyang.abort();
    }
  }

  voiceBarOnClick() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div className="voice-bar">
        <div
          className={"icon voice-bar__controller " + (this.state.isActive ? 'activated' : '')}
          onClick={this.voiceBarOnClick}>
        </div>
      </div>
    )
  }
}

module.exports = VoiceBar;