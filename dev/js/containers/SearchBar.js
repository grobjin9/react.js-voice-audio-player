const React = require('react'),
      {connect} = require('react-redux'),
      playerAPI = require('../utils/playerAPI'),
      {fetchPlaylistStart, updatePlaylist, fetchPlaylistError, changeSearchText} = require('../actions/playlistActions');

let lastTimeValue = 0,
  timer = null;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      visible: false
    };

    this.inputOnChange.bind(this);
    this.clearInputField.bind(this);
  }

  componentDidMount() {
    this.searchField.focus();
    this.searchField.value = 'Hans Zimmer';
    this.inputOnChange({target: this.searchField});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      this.searchField.value = nextProps.searchText;
      this.inputOnChange({target: this.searchField});
    }
  }

  inputOnChange(e) {
    let val = e.target.value,
      newTimeValue = new Date(),
      delay = this.props.searchDelay,
      {dispatch} = this.props;

    if ((newTimeValue - lastTimeValue) < delay) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {

      dispatch(changeSearchText(val));

      dispatch((dispatch) => {
        dispatch(fetchPlaylistStart());

        playerAPI.findTracks(val)
          .then(tracks => {
            dispatch(updatePlaylist(tracks));
          })
          .catch(error => {
            dispatch(fetchPlaylistError(error));
          });

      });
    }, delay);

    this.setState({
      value: val,
      visible: (val.length ? true : false)
    });

    lastTimeValue = newTimeValue;
  }

  clearInputField() {
    clearTimeout(timer);

    this.setState({
      value: '',
      visible: false
    });

    this.searchField.focus();
  }

  render() {
    let {visible, value} = this.state;

    return (
      <div className="visual-bar-left-header">
        <div className="search-bar">
          <div className="icon search-bar__magnifier-sign"></div>
          <input onChange={this.inputOnChange.bind(this)}
                 placeholder="Search"
                 value={value}
                 className="search-bar__input" type="text"
                 ref={(sf) => this.searchField = sf}
          />
          <div onClick={this.clearInputField.bind(this)}
               className={"icon search-bar__x-sign " + (visible ? '' : 'hide') }>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    searchText: React.PropTypes.string.isRequired,
    searchDelay: React.PropTypes.number.isRequired
  }
}

function mapStateToProps(state) {
  return {
    searchText: state.playlist.searchText
  };
}

module.exports = connect(mapStateToProps)(SearchBar);