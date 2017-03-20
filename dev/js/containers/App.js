const React = require('react'),
      soundcloud = require('soundcloud'),
      {connect} = require('react-redux'),
      playerAPI = require('../utils/playerAPI'),
      localStore = require('../utils/localStore'),
      {updateAmount} = require('../actions/favoritesActions');

const ControlBar = require('./../components/ControlBar'),
  Header = require('./../components/Header'),
  Content = require('./../components/Content');

class App extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    let {dispatch} = this.props;

    playerAPI.canvasSpectrum._initCanvas(document.querySelector('#canvas'));

    soundcloud.initialize({
      client_id: '94b8a7e5efe62b01c8ca3f03cc3ccca8'
    });

    dispatch(updateAmount(localStore.length));
  }

  render() {
    return (
      <div className="container">
        <div id="player">
          <Header />
          <Content />
          <ControlBar />
        </div>
      </div>
    );
  }

  static propTypes = {
    favorites: React.PropTypes.object.isRequired,
    currentTab: React.PropTypes.string.isRequired
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
    currentTab: state.ui.currentTab
  };
}

module.exports = connect(mapStateToProps)(App);