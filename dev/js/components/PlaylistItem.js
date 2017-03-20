const React = require('react');

class PlaylistItem extends React.Component {

  constructor(props) {
    super(props);

    this.titleOnMouseOver = this.titleOnMouseOver.bind(this);
    this.titleOnMouseOut = this.titleOnMouseOut.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !!(nextProps.active !== this.props.active || nextProps.isFavorite !== this.props.isFavorite);
  }

  titleOnMouseOver() {
    if (this.title.offsetWidth < this.title.scrollWidth) {
      this.title.style.textIndent = -(this.title.scrollWidth - this.title.offsetWidth) + 'px';
    }
  }

  titleOnMouseOut() {
    this.title.style.textIndent = '0px';
  }

  render() {
    let {track, trackOnClick, active, isFavorite, starOnClick} = this.props;

    return (
      <li onClick={(e) => trackOnClick(e, track)}
          className={"clearfix playlist__item " + (active ? 'currentTrack' : '')}>
        <div className="track-index">{track.index + 1}</div>
        <div onMouseOver={this.titleOnMouseOver}
             onMouseOut={this.titleOnMouseOut}
             ref={(t) => this.title = t}
             className="track-title">{track.title}
        </div>
        <span
          onClick={(e) => starOnClick(e, track)}
          data-val="star"
          className={'icon track-star ' + (isFavorite ? 'track-star__favorite' : '')}>
                </span>
      </li>
    );
  }

  static propTypes = {
    track: React.PropTypes.object.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClick: React.PropTypes.func.isRequired,
    isFavorite: React.PropTypes.bool.isRequired,
    active: React.PropTypes.bool.isRequired
  }
}

module.exports = PlaylistItem;