const initialState = {
  playlist: {
    tracks: [],
    searchText: '',
    error: null,
    fetching: false,
    fetched: false,
    done: false
  },
  favorites: {
    tracks: [],
    amount: 0,
    error: null,
    fetching: false,
    fetched: false
  },
  player: {
    currentTrackIndex: null,
    currentTime: 0,
    isPlaying: false,
    repeat: false
  },
  data: {
    currentPlaylist: '',
    duration: '',
    index: '',
    cover: '',
    username: '',
    title: '',
    id: ''
  },
  ui: {
    currentTab: 'playlist'
  }
};

module.exports = initialState;