const React = require('react'),
      Playlist = require('../containers/Playlist'),
      Artwork = require('./../containers/Artwork');

class Content extends React.Component {

  render() {
    return (
      <div id="content">
        <div className="content__left">
          <Artwork />
          <canvas id="canvas" width="260" height="24">Your browser needs to be updated ASAP</canvas>
        </div>
        <Playlist />
      </div>
    );
  }
}

module.exports = Content;