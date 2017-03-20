const React = require('react'),
      localStore = require('../utils/localStore'),
      ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
      PlaylistItem = require('./PlaylistItem');

class TracksList extends React.Component {

  render() {
    let {
        currentTab, playingTab, activeIndex, tracks, currentTrackId,
        trackOnClick, starOnClick, trackSearchText, playlistSearchText
      } = this.props,
      Item = PlaylistItem;

    if (tracks.length) {
      tracks = tracks.map(function (track) {
        let isFavorite = localStore.includes(track.id),
          isActive = (track.index === activeIndex) &&
            (currentTab === playingTab) &&
            (trackSearchText === playlistSearchText) &&
            (currentTrackId === tracks[activeIndex].id);

        return (
          <ReactCSSTransitionGroup
            key={track.id}
            transitionAppear={true}
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeave={false}
            transitionAppearTimeout={500}>
            <Item
              active={isActive}
              isFavorite={isFavorite}
              trackOnClick={trackOnClick}
              starOnClick={starOnClick}
              track={track}
            />
          </ReactCSSTransitionGroup>
        );
      });
    }

    return (
      <div>
        {tracks}
      </div>
    );
  }

  static propTypes = {
    currentTab: React.PropTypes.string.isRequired,
    playingTab: React.PropTypes.string,
    activeIndex: React.PropTypes.number,
    tracks: React.PropTypes.array.isRequired,
    currentTrackId: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClick: React.PropTypes.func.isRequired,
    trackSearchText: React.PropTypes.string,
    playlistSearchText: React.PropTypes.string
  }
}

module.exports = TracksList;