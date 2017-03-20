const React = require('react'),
      Button = require('../ControlBarButton'),
      playerAPI = require('../../utils/playerAPI');

class ShuffleButton extends React.Component {

  constructor(props) {
    super(props);

    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick() {
    console.log('...');
  }

  render() {
    let id = "processing-bar__shuffle",
      buttonType = "shuffle";

    return (
      <Button id={id} btnOnClick={this.btnOnClick} buttonType={buttonType}/>
    );
  }
}

module.exports = ShuffleButton;