const formatCover = require('../utils/format').formatCover;

class Track {
  constructor({title, index, artwork_url : cover, stream_url : streamUrl, id, duration, uri, user : {username}}) {
    Object.assign(this, {
      title,
      index,
      cover: formatCover(cover),
      id,
      duration,
      uri,
      streamUrl,
      username
    });
  }
}

const entity = {
  track: Track
};

module.exports = {
  createEntity: function (type, props) {
    return new entity[type](props);
  }
};
