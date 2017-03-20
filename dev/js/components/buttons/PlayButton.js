const React = require('react'),
      Button = require('../ControlBarButton');

const PlayButton = function (props) {
  let id = "action-bar__play",
    buttonType = (props.isPlaying ? 'stop' : 'play');

  return (
    <Button id={id} btnOnClick={props.playBtnOnClick} buttonType={buttonType}/>
  );
};

PlayButton.propTypes = {
  playBtnOnClick: React.PropTypes.func.isRequired,
  isPlaying: React.PropTypes.bool.isRequired
};

module.exports = PlayButton;