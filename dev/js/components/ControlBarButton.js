const React = require('react');

class Button extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.buttonType !== nextProps.buttonType;
  }

  render() {
    return (
      <li id={this.props.id} onClick={this.props.btnOnClick} className={"icon " + this.props.buttonType}></li>
    );
  }

  static propTypes = {
    buttonType: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    btnOnClick: React.PropTypes.func.isRequired
  }
}

module.exports = Button;