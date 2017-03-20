const React = require('react');

class CurrentTabPicker extends React.Component {
  render() {
    let {tabOnChanged, currentTab, playlistTracksLength, favoriteTracksLength} = this.props;

    return (
      <div className="playlist-menu">
        <input type="radio"
               onChange={tabOnChanged}
               id="playlistTab"
               value="playlist"
               checked={currentTab === 'playlist'}
        />
        <label htmlFor="playlistTab" className="playlist-menu__tab">Playlist
          <span>{playlistTracksLength}</span>
        </label>

        <input
          type="radio"
          onChange={tabOnChanged}
          id="favoritesTab"
          value="favorites"
          checked={currentTab === 'favorites'}
        />
        <label htmlFor="favoritesTab" className="playlist-menu__tab">Favorites
          <span>{favoriteTracksLength}</span></label>
      </div>
    );
  }

  static propTypes = {
    tabOnChanged: React.PropTypes.func.isRequired,
    currentTab: React.PropTypes.string.isRequired,
    playlistTracksLength: React.PropTypes.number.isRequired,
    favoriteTracksLength: React.PropTypes.number.isRequired
  }
}

module.exports = CurrentTabPicker;