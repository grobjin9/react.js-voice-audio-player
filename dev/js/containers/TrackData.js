const React = require('react'),
      {connect} = require('react-redux'),
      ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class TrackData extends React.Component {

  constructor(props) {
    super(props);

    this.titleOnMouseOver = this.titleOnMouseOver.bind(this);
    this.titleOnMouseOut = this.titleOnMouseOut.bind(this);
  }

  titleOnMouseOver(e) {
    let title = e.target;

    if (title.offsetWidth < title.scrollWidth) {
      title.style.textIndent = -(title.scrollWidth - title.offsetWidth) + 'px';
    }
  }

  titleOnMouseOut(e) {
    let title = e.target;
    title.style.transition = 'text-indent .7s';
    title.style.textIndent = '0px';
  }

  render() {
    let {title, username} = this.props;

    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={500} transitionLeave={false}>
        <div key={title.length} className="track-data">
          <div id="album"
               onMouseOver={(e) => this.titleOnMouseOver(e)}
               onMouseOut={(e) => this.titleOnMouseOut(e)}
               className="track-data__title"
               ref={(t) => this.title = t}>
            {title}
          </div>
          <div id="artist" className="track-data__username">
            {username}
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }

  static propTypes = {
    username: React.PropTypes.string,
    title: React.PropTypes.string
  }

}
function mapStateToProps(state) {
  let {username, title} = state.data;

  return {
    username,
    title
  };
}

module.exports = connect(mapStateToProps)(TrackData);