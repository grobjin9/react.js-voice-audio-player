const React = require('react'),
      SearchBar = require('./../containers/SearchBar'),
      TrackData = require('./../containers/TrackData'),
      VoiceBar = require('./../containers/VoiceBar');

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="clearfix">
        <div className="header__left">
          <SearchBar searchDelay={650}/>
        </div>
        <div className="header__right">
          <div className="visual-bar-right-header clearfix">
            <TrackData />
            <VoiceBar />
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Header;