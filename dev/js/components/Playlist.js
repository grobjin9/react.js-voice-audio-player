const React = require('react'),
      Tab = require('./Tab'),
      Spinner = require('react-spinner'),
      CurrentTabPicker = require('./CurrentTabPicker');

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.tabOnChanged = this.tabOnChanged.bind(this);
  }

  tabOnChanged(e) {
    const tabOnChanged = this.props.tabOnChanged;

    tabOnChanged(e.target.value);
  }

  render() {
    const {playlist, data, currentTrackIndex, currentTab, favorites, starOnClick, trackOnClick, trackListOnScrolled, fetching} = this.props,
          {tracks, searchText:playlistSearchText} = playlist,
          {currentPlaylist:playingTab, id: currentTrackId, searchText:trackSearchText} = data,
          {amount:favoritesAmount, tracks:favoriteTracks} = favorites;

    return (
      <div className="content__right">
        <CurrentTabPicker
          favoriteTracksLength={favoritesAmount}
          playlistTracksLength={tracks.length}
          tabOnChanged={this.tabOnChanged}
          currentTab={currentTab}
        />

        <Tab
          name="playlist"
          trackSearchText={trackSearchText}
          playlistSearchText={playlistSearchText}
          currentTrackId={currentTrackId}
          currentTab={currentTab}
          playingTab={playingTab}
          favoritesAmount={favoritesAmount}
          tracks={tracks}
          activeIndex={currentTrackIndex}
          trackOnClick={trackOnClick}
          starOnClick={starOnClick}
          trackListOnScrolled={trackListOnScrolled}
          fetching={fetching}
        />
        <Tab
          name="favorites"
          currentTab={currentTab}
          playingTab={playingTab}
          favoritesAmount={favoritesAmount}
          currentTrackId={currentTrackId}
          tracks={favoriteTracks}
          activeIndex={currentTrackIndex}
          trackOnClick={trackOnClick}
          starOnClick={starOnClick}
        />

        <Spinner style={{display: (fetching ? 'block' : 'none')}}/>
      </div>
    );
  }

  static propTypes = {
    playlist: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    currentTrackIndex: React.PropTypes.number,
    currentTab: React.PropTypes.string.isRequired,
    favorites: React.PropTypes.object.isRequired,
    fetching: React.PropTypes.bool,
    starOnClick: React.PropTypes.func.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    trackListOnScrolled: React.PropTypes.func.isRequired
  }
}

module.exports = Playlist;