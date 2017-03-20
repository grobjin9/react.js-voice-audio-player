const React = require('react'),
      {connect} = require('react-redux'),
      PlaylistComponent = require('../components/Playlist'),
      {playTrack} = require('../actions/playerActions'),
      {updateData} = require('../actions/dataActions'),
      {changeCurrentTab} = require('../actions/uiActions'),
      {concatPartialTracks, fetchPlaylistStart, fetchPlaylistError} = require('../actions/playlistActions'),
      {fetchFavoritesStart, updateFavorites, fetchFavoritesError, updateAmount, removeTrack} = require('../actions/favoritesActions'),
      playerAPI = require('../utils/playerAPI'),
      localStore = require('../utils/localStore');

class Playlist extends React.Component {

  constructor(props) {
    super(props);

    this.trackOnClick = this.trackOnClick.bind(this);
    this.tabOnChanged = this.tabOnChanged.bind(this);
    this.starOnClick = this.starOnClick.bind(this);
    this.trackListOnScrolled = this.trackListOnScrolled.bind(this);
  }

  trackOnClick(e, trackData) {
    if (e.target.dataset.val) return;

    const {dispatch, playlist, currentTab} = this.props;

    dispatch(playTrack(trackData.index));

    dispatch(updateData(Object.assign(trackData, {
      currentPlaylist: currentTab,
      searchText: playlist.searchText
    })));

    playerAPI.play(trackData.streamUrl);
  }

  starOnClick(e, trackData) {
    const {dispatch, currentTab} = this.props;

    if (currentTab === 'favorites') {
      localStore.remove(trackData);
      dispatch(removeTrack(trackData.id));
      dispatch(updateAmount(localStore.length));
    } else {
      localStore.add(trackData);
      dispatch(updateAmount(localStore.length));
    }
  }

  trackListOnScrolled(e, cb) {
    const {dispatch, playlist: {searchText, done}} = this.props;

    !done && dispatch((dispatch) => {

      dispatch(fetchPlaylistStart());

      playerAPI.findPartialTracks(searchText)
        .then(tracks => {

          dispatch(concatPartialTracks(tracks));

          cb(e);
        })
        .catch(error => {
          dispatch(fetchPlaylistError(error))
        });
    });

  }

  tabOnChanged(tabName) {
    const {dispatch, favorites} = this.props;

    if (tabName === 'favorites') {
      if (favorites.amount > favorites.tracks.length) {
        dispatch(fetchFavoritesStart());

        playerAPI.findTracksByIds(localStore.store[localStore._value])
          .then(tracks => {
            dispatch(updateFavorites(tracks));
          })
          .catch(error => fetchFavoritesError(error));
      }
    }

    dispatch(changeCurrentTab(tabName));
  }

  render() {
    const {playlist, currentTab, favorites} = this.props;
    const fetching = currentTab === 'playlist' ? playlist.fetching : favorites.fetching;

    return (
      <PlaylistComponent
        {...this.props}
        fetching={fetching}
        tabOnChanged={this.tabOnChanged}
        starOnClick={this.starOnClick}
        trackOnClick={this.trackOnClick}
        trackListOnScrolled={this.trackListOnScrolled}
      />
    );
  }

  static propTypes = {
    playlist: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    currentTrackIndex: React.PropTypes.number,
    currentTab: React.PropTypes.string.isRequired,
    favorites: React.PropTypes.object.isRequired
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
    data: state.data,
    currentTrackIndex: state.player.currentTrackIndex,
    currentTab: state.ui.currentTab,
    favorites: state.favorites
  };
}

module.exports = connect(mapStateToProps)(Playlist);