const playlistReducer = require('./playlistReducer'),
      playerReducer = require('./playerReducer'),
      dataReducer = require('./dataReducer'),
      uiReducer = require('./uiReducer'),
      favoritesReducer = require('./favoritesReducer'),
      initialState = require('./initialState');

function reducer(state = initialState, action) {
  let playlist = playlistReducer(state.playlist, action),
    player = playerReducer(state.player, action),
    data = dataReducer(state.data, action),
    favorites = favoritesReducer(state.favorites, action),
    ui = uiReducer(state.ui, action);

  return {
    playlist,
    player,
    data,
    favorites,
    ui
  };
}

module.exports = reducer;