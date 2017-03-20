const React = require('react'),
      formatTitle = require('../utils/format').formatTitle;

class FavoritesItem extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !!(nextProps.active !== this.props.active || nextProps.isFavorite !== this.props.isFavorite); // (:
  }

  render() {
    let {track, trackOnClick, active, starOnClick} = this.props;

    return (
      <li onClick={(e) => trackOnClick(e, track)}
          className={"clearfix playlist__item " + (active ? 'currentTrack' : '')}>
        <div className="track-index">{track.index + 1}</div>
        <div className="track-title">{formatTitle(track.title)}</div>
        <span
          onClick={(e) => starOnClick(e, track)}
          data-val="star"
          className={'icon track-star track-star__favorite'}>
                </span>
      </li>
    );
  }

  static propTypes = {
    track: React.PropTypes.object.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClickReact: React.PropTypes.func.isRequired,
    active: React.PropTypes.bool.isRequired
  }
}

module.exports = FavoritesItem;