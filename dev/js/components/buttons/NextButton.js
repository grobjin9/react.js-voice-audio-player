const React = require('react'),
      Button = require('../ControlBarButton'),
      playerAPI = require('../../utils/playerAPI');

class NextButton extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let id = "action-bar__next",
      buttonType = "next";

    return (
      <Button id={id} btnOnClick={this.props.nextBtnOnClick} buttonType={buttonType}/>
    );
  }

  static propTypes = {
    nextBtnOnClick: React.PropTypes.func.isRequired
  }
}

module.exports = NextButton;