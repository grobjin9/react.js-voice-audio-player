const React = require('react'),
      Button = require('../ControlBarButton'),
      playerAPI = require('../../utils/playerAPI');

class PrevButton extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let id = "action-bar__prev",
      buttonType = "prev";

    return (
      <Button id={id} btnOnClick={this.props.prevBtnOnClick} buttonType={buttonType}/>
    );
  }

  static propTypes = {
    prevBtnOnClick: React.PropTypes.func.isRequired
  }
}

module.exports = PrevButton;
