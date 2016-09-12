(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var constants = require('../constants/dataConstants');

var updateData = function updateData(data) {
    return {
        type: constants.UPDATE_DATA,
        data: data
    };
};

module.exports = {
    updateData: updateData
};

},{"../constants/dataConstants":29}],2:[function(require,module,exports){
'use strict';

var constants = require('../constants/favoritesConstants');

var fetchFavoritesStart = function fetchFavoritesStart() {
    return {
        type: constants.FETCH_FAVORITES_START
    };
};

var removeTrack = function removeTrack(id) {
    return {
        type: constants.REMOVE_TRACK,
        id: id
    };
};

var updateFavorites = function updateFavorites(tracks) {
    return {
        type: constants.UPDATE_FAVORITES,
        tracks: tracks
    };
};

var fetchFavoritesError = function fetchFavoritesError(error) {
    return {
        type: constants.FETCH_FAVORITES_ERROR,
        error: error
    };
};

var updateAmount = function updateAmount(amount) {
    return {
        type: constants.UPDATE_AMOUNT,
        amount: amount
    };
};

var shuffleTracks = function shuffleTracks() {
    return {
        type: constants.SHUFFLE_TRACKS
    };
};

module.exports = {
    fetchFavoritesStart: fetchFavoritesStart,
    updateFavorites: updateFavorites,
    fetchFavoritesError: fetchFavoritesError,
    updateAmount: updateAmount,
    removeTrack: removeTrack,
    shuffleTracks: shuffleTracks
};

},{"../constants/favoritesConstants":30}],3:[function(require,module,exports){
'use strict';

var constants = require('../constants/playerConstants');

var changePlayingTrack = function changePlayingTrack(trackIndex) {
    return {
        type: constants.CHANGE_PLAYING_TRACK,
        trackIndex: trackIndex
    };
};

var changeCurrentTime = function changeCurrentTime(time) {
    return {
        type: constants.CHANGE_CURRENT_TIME,
        time: time
    };
};

var toggleTrack = function toggleTrack(isPlaying) {
    return {
        type: constants.TOGGLE_TRACK,
        isPlaying: isPlaying
    };
};

var toggleRepeatTrack = function toggleRepeatTrack() {
    return {
        type: constants.TOGGLE_REPEAT_TRACK
    };
};

var changeTrack = function changeTrack(eType) {
    return function (dispatch, getState) {
        var _getState = getState();

        var playlist = _getState.playlist;
        var player = _getState.player;


        var index = player.currentTrackIndex,
            incIndex = index + 1,
            decIndex = index - 1,
            nextTrackIndex = void 0;

        if (eType === constants.NEXT_TRACK) {
            if (incIndex > playlist.tracks.length - 1) {
                incIndex = playlist.tracks.length - 1;
            }

            nextTrackIndex = incIndex;
        } else if (eType === constants.PREV_TRACK) {
            if (decIndex < 0) {
                decIndex = 0;
            }

            nextTrackIndex = decIndex;
        }

        dispatch(changePlayingTrack(nextTrackIndex));
        dispatch(changeCurrentTime(0));
    };
};

var playTrack = function playTrack(trackIndex) {
    return function (dispatch, getState) {
        var _getState2 = getState();

        var player = _getState2.player;


        if (trackIndex === player.currentTrackIndex) {
            console.log('this');
            return;
        }

        dispatch(changeCurrentTime(0));
        dispatch(changePlayingTrack(trackIndex));
    };
};

module.exports = {
    changePlayingTrack: changePlayingTrack,
    changeCurrentTime: changeCurrentTime,
    changeTrack: changeTrack,
    playTrack: playTrack,
    toggleTrack: toggleTrack,
    toggleRepeatTrack: toggleRepeatTrack
};

},{"../constants/playerConstants":31}],4:[function(require,module,exports){
'use strict';

var constants = require('../constants/playlistConstants');

var fetchPlaylistStart = function fetchPlaylistStart() {
    return {
        type: constants.FETCH_PLAYLIST_START
    };
};

var updatePlaylist = function updatePlaylist(tracks) {
    return {
        type: constants.UPDATE_PLAYLIST,
        tracks: tracks
    };
};

var fetchPlaylistError = function fetchPlaylistError(error) {
    return {
        type: constants.FETCH_PLAYLIST_ERROR,
        error: error
    };
};

var updateFavoriteTracks = function updateFavoriteTracks(tracks) {
    return {
        type: constants.UPDATE_FAVORITE_TRACKS,
        tracks: tracks
    };
};

var concatPartialTracks = function concatPartialTracks(tracks) {
    return {
        type: constants.CONCAT_PARTIAL_TRACKS,
        tracks: tracks
    };
};

var changeSearchText = function changeSearchText(text) {
    return {
        type: constants.UPDATE_SEARCH_TEXT,
        text: text
    };
};

var shuffleTracks = function shuffleTracks() {
    return {
        type: constants.SHUFFLE_TRACKS
    };
};

module.exports = {
    fetchPlaylistStart: fetchPlaylistStart,
    updatePlaylist: updatePlaylist,
    fetchPlaylistError: fetchPlaylistError,
    updateFavoriteTracks: updateFavoriteTracks,
    changeSearchText: changeSearchText,
    concatPartialTracks: concatPartialTracks,
    shuffleTracks: shuffleTracks
};

},{"../constants/playlistConstants":32}],5:[function(require,module,exports){
'use strict';

var constants = require('../constants/uiConstants');

var changeCurrentTab = function changeCurrentTab(tab) {
    return {
        type: constants.CHANGE_CURRENT_TAB,
        tab: tab
    };
};

module.exports = {
    changeCurrentTab: changeCurrentTab
};

},{"../constants/uiConstants":33}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Playlist = require('../containers/Playlist'),
    Artwork = require('./../containers/Artwork');

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content() {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'content' },
                React.createElement(
                    'div',
                    { className: 'content__left' },
                    React.createElement(Artwork, null),
                    React.createElement(
                        'canvas',
                        { id: 'canvas', width: '260', height: '24' },
                        'Your browser needs to be updated ASAP'
                    )
                ),
                React.createElement(Playlist, null)
            );
        }
    }]);

    return Content;
}(React.Component);

module.exports = Content;

},{"../containers/Playlist":37,"./../containers/Artwork":36,"react":"react"}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    ActionBar = require('../containers/ActionBar'),
    TimeBar = require('../containers/TimeBar'),
    ProcessingBar = require('../containers/ProcessingBar');

var ControlBar = function (_React$Component) {
    _inherits(ControlBar, _React$Component);

    function ControlBar() {
        _classCallCheck(this, ControlBar);

        return _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).apply(this, arguments));
    }

    _createClass(ControlBar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'control-bar' },
                React.createElement(
                    'div',
                    { className: 'control-bar__content' },
                    React.createElement(ActionBar, null),
                    React.createElement(TimeBar, null),
                    React.createElement(ProcessingBar, null)
                )
            );
        }
    }]);

    return ControlBar;
}(React.Component);

module.exports = ControlBar;

},{"../containers/ActionBar":34,"../containers/ProcessingBar":38,"../containers/TimeBar":40,"react":"react"}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.buttonType !== nextProps.buttonType;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("li", { id: this.props.id, onClick: this.props.btnOnClick, className: "icon " + this.props.buttonType });
        }
    }]);

    return Button;
}(React.Component);

Button.propTypes = {
    buttonType: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    btnOnClick: React.PropTypes.func.isRequired
};


module.exports = Button;

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    ReactDOM = require('react-dom'),
    Spinner = require('react-spinner');

var Cover = function (_React$Component) {
    _inherits(Cover, _React$Component);

    function Cover() {
        _classCallCheck(this, Cover);

        return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).apply(this, arguments));
    }

    _createClass(Cover, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var src = _props.src;
            var coverOnLoad = _props.coverOnLoad;
            var loading = _props.loading;


            var spinnerStyle = {
                width: 30,
                height: 30,
                display: loading ? 'block' : 'none'
            };

            return React.createElement(
                'div',
                { className: 'artwork' },
                React.createElement('img', { key: src, onLoad: coverOnLoad, src: src, className: 'artwork__img' }),
                React.createElement(Spinner, { style: spinnerStyle })
            );
        }
    }]);

    return Cover;
}(React.Component);

Cover.propTypes = {
    src: React.PropTypes.string.isRequired,
    coverOnLoad: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool
};


module.exports = Cover;

},{"react":"react","react-dom":"react-dom","react-spinner":"react-spinner"}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var CurrentTabPicker = function (_React$Component) {
    _inherits(CurrentTabPicker, _React$Component);

    function CurrentTabPicker() {
        _classCallCheck(this, CurrentTabPicker);

        return _possibleConstructorReturn(this, (CurrentTabPicker.__proto__ || Object.getPrototypeOf(CurrentTabPicker)).apply(this, arguments));
    }

    _createClass(CurrentTabPicker, [{
        key: "render",
        value: function render() {
            var _props = this.props;
            var tabOnChanged = _props.tabOnChanged;
            var currentTab = _props.currentTab;
            var playlistTracksLength = _props.playlistTracksLength;
            var favoriteTracksLength = _props.favoriteTracksLength;


            return React.createElement(
                "div",
                { className: "playlist-menu" },
                React.createElement("input", { type: "radio",
                    onChange: tabOnChanged,
                    id: "playlistTab",
                    value: "playlist",
                    checked: currentTab === 'playlist'
                }),
                React.createElement(
                    "label",
                    { htmlFor: "playlistTab", className: "playlist-menu__tab" },
                    "Playlist",
                    React.createElement(
                        "span",
                        null,
                        playlistTracksLength
                    )
                ),
                React.createElement("input", {
                    type: "radio",
                    onChange: tabOnChanged,
                    id: "favoritesTab",
                    value: "favorites",
                    checked: currentTab === 'favorites'
                }),
                React.createElement(
                    "label",
                    { htmlFor: "favoritesTab", className: "playlist-menu__tab" },
                    "Favorites",
                    React.createElement(
                        "span",
                        null,
                        favoriteTracksLength
                    )
                )
            );
        }
    }]);

    return CurrentTabPicker;
}(React.Component);

CurrentTabPicker.propTypes = {
    tabOnChanged: React.PropTypes.func.isRequired,
    currentTab: React.PropTypes.string.isRequired,
    playlistTracksLength: React.PropTypes.number.isRequired,
    favoriteTracksLength: React.PropTypes.number.isRequired
};


module.exports = CurrentTabPicker;

},{"react":"react"}],11:[function(require,module,exports){
'use strict';

var React = require('react'),
    formatMStoS = require('../utils/format').formatMStoS;

var CurrentTimeBar = function CurrentTimeBar(props) {
    return React.createElement(
        'li',
        { className: 'time-bar__startpoint' },
        React.createElement(
            'span',
            { id: 'currentTime', className: 'currentTime' },
            formatMStoS(props.currentTime)
        )
    );
};

CurrentTimeBar.propTypes = {
    currentTime: React.PropTypes.number.isRequired
};

module.exports = CurrentTimeBar;

},{"../utils/format":56,"react":"react"}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    formatMStoS = require('../utils/format').formatMStoS;

var DurationBar = function (_React$Component) {
    _inherits(DurationBar, _React$Component);

    function DurationBar() {
        _classCallCheck(this, DurationBar);

        return _possibleConstructorReturn(this, (DurationBar.__proto__ || Object.getPrototypeOf(DurationBar)).apply(this, arguments));
    }

    _createClass(DurationBar, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.duration !== this.props.duration;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                { className: 'time-bar__endpoint' },
                React.createElement(
                    'span',
                    { id: 'duration', className: 'duration' },
                    formatMStoS(this.props.duration)
                )
            );
        }
    }]);

    return DurationBar;
}(React.Component);

DurationBar.propTypes = {
    duration: React.PropTypes.number.isRequired
};


module.exports = DurationBar;

},{"../utils/format":56,"react":"react"}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Tooltip = require('./Tooltip'),
    EqualizerVerticalSlider = require('./sliders/EqualizerVerticalSlider');

var Equalizer = function (_React$Component) {
    _inherits(Equalizer, _React$Component);

    function Equalizer(props) {
        _classCallCheck(this, Equalizer);

        var _this = _possibleConstructorReturn(this, (Equalizer.__proto__ || Object.getPrototypeOf(Equalizer)).call(this, props));

        _this.state = {
            active: false
        };

        _this.equalizerOnClick = _this.equalizerOnClick.bind(_this);
        return _this;
    }

    _createClass(Equalizer, [{
        key: 'equalizerOnClick',
        value: function equalizerOnClick(e) {
            var _this2 = this;

            if (e.target !== this.equalizer) return;

            this.setState({
                active: !this.state.active
            });

            document.documentElement.click();
            document.onclick = null;

            if (!this.state.active) {
                document.onclick = function (e) {
                    if (e.target.closest('#equalizer') !== _this2.equalizer) {

                        _this2.setState({
                            active: !_this2.state.active
                        });

                        document.onclick = null;
                    }
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var types = ['frequency', 'gain'],
                sliders = [{ title: 'BASS', types: types }, { title: 'MID', types: types }, { title: 'TREBLE', types: types }],
                handler = this.props.filterFrequencies;

            return React.createElement(
                'li',
                { onClick: this.equalizerOnClick,
                    id: 'equalizer',
                    className: 'equalizer icon ' + (this.state.active ? 'activated' : ''),
                    ref: function ref(eq) {
                        return _this3.equalizer = eq;
                    } },
                React.createElement(
                    Tooltip,
                    { visible: this.state.active, size: 'm' },
                    sliders.map(function (slider) {
                        return React.createElement(EqualizerVerticalSlider, { len: sliders.length, key: slider.title, handler: handler, data: slider });
                    })
                )
            );
        }
    }]);

    return Equalizer;
}(React.Component);

Equalizer.propTypes = {
    filterFrequencies: React.PropTypes.func.isRequired
};


module.exports = Equalizer;

},{"./Tooltip":20,"./sliders/EqualizerVerticalSlider":26,"react":"react"}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    formatTitle = require('../utils/format').formatTitle;

var FavoritesItem = function (_React$Component) {
    _inherits(FavoritesItem, _React$Component);

    function FavoritesItem() {
        _classCallCheck(this, FavoritesItem);

        return _possibleConstructorReturn(this, (FavoritesItem.__proto__ || Object.getPrototypeOf(FavoritesItem)).apply(this, arguments));
    }

    _createClass(FavoritesItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !!(nextProps.active !== this.props.active || nextProps.isFavorite !== this.props.isFavorite); // (:
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var track = _props.track;
            var trackOnClick = _props.trackOnClick;
            var active = _props.active;
            var starOnClick = _props.starOnClick;


            return React.createElement(
                'li',
                { onClick: function onClick(e) {
                        return trackOnClick(e, track);
                    }, className: "clearfix playlist__item " + (active ? 'currentTrack' : '') },
                React.createElement(
                    'div',
                    { className: 'track-index' },
                    track.index + 1
                ),
                React.createElement(
                    'div',
                    { className: 'track-title' },
                    formatTitle(track.title)
                ),
                React.createElement('span', {
                    onClick: function onClick(e) {
                        return starOnClick(e, track);
                    },
                    'data-val': 'star',
                    className: 'icon track-star track-star__favorite' })
            );
        }
    }]);

    return FavoritesItem;
}(React.Component);

FavoritesItem.propTypes = {
    track: React.PropTypes.object.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClickReact: React.PropTypes.func.isRequired,
    active: React.PropTypes.bool.isRequired
};


module.exports = FavoritesItem;

},{"../utils/format":56,"react":"react"}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    SearchBar = require('./../containers/SearchBar'),
    TrackData = require('./../containers/TrackData'),
    VoiceBar = require('./../containers/VoiceBar');

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'header',
                { id: 'header', className: 'clearfix' },
                React.createElement(
                    'div',
                    { className: 'header__left' },
                    React.createElement(SearchBar, { searchDelay: 650 })
                ),
                React.createElement(
                    'div',
                    { className: 'header__right' },
                    React.createElement(
                        'div',
                        { className: 'visual-bar-right-header clearfix' },
                        React.createElement(TrackData, null),
                        React.createElement(VoiceBar, null)
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

module.exports = Header;

},{"./../containers/SearchBar":39,"./../containers/TrackData":41,"./../containers/VoiceBar":42,"react":"react"}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Tab = require('./Tab'),
    Spinner = require('react-spinner'),
    CurrentTabPicker = require('./CurrentTabPicker');

var Playlist = function (_React$Component) {
    _inherits(Playlist, _React$Component);

    function Playlist(props) {
        _classCallCheck(this, Playlist);

        var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));

        _this.tabOnChanged = _this.tabOnChanged.bind(_this);
        return _this;
    }

    _createClass(Playlist, [{
        key: 'tabOnChanged',
        value: function tabOnChanged(e) {
            var tabOnChanged = this.props.tabOnChanged;

            tabOnChanged(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var playlist = _props.playlist;
            var data = _props.data;
            var currentTrackIndex = _props.currentTrackIndex;
            var currentTab = _props.currentTab;
            var favorites = _props.favorites;
            var starOnClick = _props.starOnClick;
            var trackOnClick = _props.trackOnClick;
            var trackListOnScrolled = _props.trackListOnScrolled;
            var fetching = _props.fetching;
            var tracks = playlist.tracks;
            var playlistSearchText = playlist.searchText;
            var playingTab = data.currentPlaylist;
            var currentTrackId = data.id;
            var trackSearchText = data.searchText;
            var favoritesAmount = favorites.amount;
            var favoriteTracks = favorites.tracks;


            return React.createElement(
                'div',
                { className: 'content__right' },
                React.createElement(CurrentTabPicker, {
                    favoriteTracksLength: favoritesAmount,
                    playlistTracksLength: tracks.length,
                    tabOnChanged: this.tabOnChanged,
                    currentTab: currentTab
                }),
                React.createElement(Tab, {
                    name: 'playlist',
                    trackSearchText: trackSearchText,
                    playlistSearchText: playlistSearchText,
                    currentTrackId: currentTrackId,
                    currentTab: currentTab,
                    playingTab: playingTab,
                    favoritesAmount: favoritesAmount,
                    tracks: tracks,
                    activeIndex: currentTrackIndex,
                    trackOnClick: trackOnClick,
                    starOnClick: starOnClick,
                    trackListOnScrolled: trackListOnScrolled
                }),
                React.createElement(Tab, {
                    name: 'favorites',
                    currentTab: currentTab,
                    playingTab: playingTab,
                    favoritesAmount: favoritesAmount,
                    currentTrackId: currentTrackId,
                    tracks: favoriteTracks,
                    activeIndex: currentTrackIndex,
                    trackOnClick: trackOnClick,
                    starOnClick: starOnClick
                }),
                React.createElement(Spinner, { style: { display: fetching ? 'block' : 'none' } })
            );
        }
    }]);

    return Playlist;
}(React.Component);

Playlist.propTypes = {
    playlist: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    currentTrackIndex: React.PropTypes.number,
    currentTab: React.PropTypes.string.isRequired,
    favorites: React.PropTypes.object.isRequired,
    fetching: React.PropTypes.bool,
    starOnClick: React.PropTypes.func.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    trackListOnScrolled: React.PropTypes.func.isRequired
};


module.exports = Playlist;

},{"./CurrentTabPicker":10,"./Tab":19,"react":"react","react-spinner":"react-spinner"}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var PlaylistItem = function (_React$Component) {
    _inherits(PlaylistItem, _React$Component);

    function PlaylistItem(props) {
        _classCallCheck(this, PlaylistItem);

        var _this = _possibleConstructorReturn(this, (PlaylistItem.__proto__ || Object.getPrototypeOf(PlaylistItem)).call(this, props));

        _this.titleOnMouseOver = _this.titleOnMouseOver.bind(_this);
        _this.titleOnMouseOut = _this.titleOnMouseOut.bind(_this);
        return _this;
    }

    _createClass(PlaylistItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            return !!(nextProps.active !== this.props.active || nextProps.isFavorite !== this.props.isFavorite);
        }
    }, {
        key: 'titleOnMouseOver',
        value: function titleOnMouseOver() {
            if (this.title.offsetWidth < this.title.scrollWidth) {
                this.title.style.textIndent = -(this.title.scrollWidth - this.title.offsetWidth) + 'px';
            }
        }
    }, {
        key: 'titleOnMouseOut',
        value: function titleOnMouseOut() {
            this.title.style.textIndent = '0px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var track = _props.track;
            var trackOnClick = _props.trackOnClick;
            var active = _props.active;
            var isFavorite = _props.isFavorite;
            var starOnClick = _props.starOnClick;


            return React.createElement(
                'li',
                { onClick: function onClick(e) {
                        return trackOnClick(e, track);
                    }, className: "clearfix playlist__item " + (active ? 'currentTrack' : '') },
                React.createElement(
                    'div',
                    { className: 'track-index' },
                    track.index + 1
                ),
                React.createElement(
                    'div',
                    { onMouseOver: this.titleOnMouseOver,
                        onMouseOut: this.titleOnMouseOut,
                        ref: function ref(t) {
                            return _this2.title = t;
                        },
                        className: 'track-title' },
                    track.title
                ),
                React.createElement('span', {
                    onClick: function onClick(e) {
                        return starOnClick(e, track);
                    },
                    'data-val': 'star',
                    className: 'icon track-star ' + (isFavorite ? 'track-star__favorite' : '') })
            );
        }
    }]);

    return PlaylistItem;
}(React.Component);

PlaylistItem.propTypes = {
    track: React.PropTypes.object.isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClick: React.PropTypes.func.isRequired,
    isFavorite: React.PropTypes.bool.isRequired,
    active: React.PropTypes.bool.isRequired
};


module.exports = PlaylistItem;

},{"react":"react"}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    getCoords = require('../utils/dom').getCoords,
    playerAPI = require('../utils/playerAPI');

var TrackProgressBar = function (_React$Component) {
    _inherits(TrackProgressBar, _React$Component);

    function TrackProgressBar(props) {
        _classCallCheck(this, TrackProgressBar);

        var _this = _possibleConstructorReturn(this, (TrackProgressBar.__proto__ || Object.getPrototypeOf(TrackProgressBar)).call(this, props));

        _this.state = {
            tooltipVisibility: false
        };

        _this.progressBarOnDrag = _this.progressBarOnDrag.bind(_this);
        _this.sliderOnClick = _this.sliderOnClick.bind(_this);
        _this._documentOnMouseMove = _this._documentOnMouseMove.bind(_this);
        return _this;
    }

    _createClass(TrackProgressBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.sliderWidth = this.slider.offsetWidth;
            this.thumbWidth = this.thumb.offsetWidth;

            this.endPoint = this.sliderWidth - this.thumbWidth;

            this._cfg = {
                MIN: 0,
                MAX: this.slider.offsetWidth - this.thumb.offsetWidth
            };
        }
    }, {
        key: '_documentOnMouseMove',
        value: function _documentOnMouseMove(e) {
            var shiftX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

            playerAPI.pause();

            var updateTime = this.props.updateTime,
                move = e.pageX - getCoords(this.slider).left - (shiftX || this.thumbWidth / 2),
                ratio = move / this._cfg.MAX;

            if (ratio <= 0) {
                ratio = 0;
            } else if (ratio >= 1) {
                ratio = 1;
            }

            this.thumb.style.left = ratio * this._cfg.MAX + 'px';
            this.counter.style.width = ratio * this._cfg.MAX + (this.thumb ? this.thumbWidth / 2 : 0.3) + 'px';

            document.onmouseup = function () {
                updateTime(ratio);

                this.onmousemove = this.onmouseup = null;
            };
        }
    }, {
        key: 'progressBarOnDrag',
        value: function progressBarOnDrag(e) {
            var _this2 = this;

            var shiftX = e.pageX - getCoords(this.thumb).left,
                updateTime = this.props.updateTime;

            playerAPI.pause();

            document.onmousemove = function (e) {
                var move = e.pageX - getCoords(_this2.slider).left - shiftX,
                    ratio = move / _this2._cfg.MAX;

                if (ratio <= 0) {
                    ratio = 0;
                } else if (ratio >= 1) {
                    ratio = 1;
                }

                _this2.thumb.style.left = ratio * _this2._cfg.MAX + 'px';
                _this2.counter.style.width = ratio * _this2._cfg.MAX + _this2.thumbWidth / 2 + 'px';

                document.onmouseup = function () {
                    updateTime(ratio);

                    this.onmousemove = this.onmouseup = null;
                };
            };
        }
    }, {
        key: 'sliderOnClick',
        value: function sliderOnClick(e) {
            if (e.target === this.thumb) return;

            var updateTime = this.props.updateTime,
                move = e.pageX - getCoords(this.slider).left - this.thumbWidth / 2,
                ratio = move / this._cfg.MAX;

            if (ratio <= 0) {
                ratio = 0;
            } else if (ratio >= 1) {
                ratio = 1;
            }

            updateTime(ratio);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var progress = this.props.progress,
                thumbStyle = { left: progress * this.endPoint + 'px' },
                counterStyle = { width: progress * this.endPoint + this.thumbWidth / 2 + 'px' };

            return React.createElement(
                'li',
                { className: 'time-bar__progress-bar' },
                React.createElement(
                    'div',
                    { className: 'progress-slider',
                        onMouseDown: this.sliderOnClick,
                        ref: function ref(s) {
                            return _this3.slider = s;
                        } },
                    React.createElement('div', {
                        className: 'progress-slider__thumb',
                        style: thumbStyle,
                        onMouseDown: this.progressBarOnDrag,
                        ref: function ref(th) {
                            return _this3.thumb = th;
                        } }),
                    React.createElement('div', { className: 'progress-slider__timeCounter', style: counterStyle, ref: function ref(c) {
                            return _this3.counter = c;
                        } })
                )
            );
        }
    }]);

    return TrackProgressBar;
}(React.Component);

TrackProgressBar.propTypes = {
    updateTime: React.PropTypes.func.isRequired,
    progress: React.PropTypes.number.isRequired
};


module.exports = TrackProgressBar;

},{"../utils/dom":55,"../utils/playerAPI":58,"react":"react"}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    getCoords = require('../utils/dom').getCoords,
    FavoritesItem = require('./FavoritesItem'),
    PlaylistItem = require('./PlaylistItem'),
    TracksList = require('./TracksList');

var lastTimeValue = 0,
    timer = null;

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab(props) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

        _this.sbOnMouseDown = _this.sbOnMouseDown.bind(_this);
        _this.listOnWheel = _this.listOnWheel.bind(_this);
        _this.updateScrollBarPos = _this.updateScrollBarPos.bind(_this);
        return _this;
    }

    _createClass(Tab, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.scrollBarHeight = this.scrollBar.offsetHeight;
            this.listHeight = this.list.offsetHeight;

            this.scrollBarParent = this.scrollBar.parentElement;
            this.scrollBarParentHeight = this.scrollBarParent.offsetHeight;

            var self = this;

            this._cfg = {
                MIN: 0,
                MAX: self.scrollBarParent.offsetHeight - self.scrollBar.offsetHeight
            };
        }
    }, {
        key: 'sbOnMouseDown',
        value: function sbOnMouseDown(e) {
            var _this2 = this;

            var shiftY = e.pageY - getCoords(this.scrollBar).top;

            document.onmousemove = function (e) {
                var move = e.pageY - shiftY - getCoords(_this2.scrollBarParent).top,
                    ratio = move / (_this2.scrollBarParent.offsetHeight - _this2.scrollBar.offsetHeight),
                    newTimeValue = new Date(),
                    delay = 550;

                if (ratio <= 0) {
                    ratio = 0;
                } else if (ratio >= 1) {
                    ratio = 1;
                }

                _this2.updateScrollBarPos(ratio);

                _this2.list.scrollTop = ratio * (_this2.list.scrollHeight - _this2.list.offsetHeight);

                if (ratio >= 1 && _this2.props.currentTab === 'playlist') {
                    if (newTimeValue - lastTimeValue < delay) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function () {
                        var evt = {
                            deltaY: 16
                        };

                        _this2.props.trackListOnScrolled(evt, _this2.listOnWheel);
                    }, delay);

                    lastTimeValue = newTimeValue;
                }
            };

            document.onmouseup = function (e) {
                document.onmousemove = document.onmouseup = null;
            };
        }
    }, {
        key: 'updateScrollBarPos',
        value: function updateScrollBarPos(ratio) {
            this.scrollBar.style.top = ratio * (this.list.offsetHeight - this.scrollBar.offsetHeight) + 'px';
        }
    }, {
        key: 'listOnWheel',
        value: function listOnWheel(e) {
            var _this3 = this;

            var newTimeValue = new Date(),
                delay = 550;

            this.list.scrollTop += e.deltaY / 2;

            var scrollRatio = this.list.scrollTop / (this.list.scrollHeight - this.list.offsetHeight);

            this.updateScrollBarPos(scrollRatio);

            if (scrollRatio >= 1 && this.props.currentTab === 'playlist') {
                if (newTimeValue - lastTimeValue < delay) {
                    clearTimeout(timer);
                }

                timer = setTimeout(function () {
                    _this3.props.trackListOnScrolled(e, _this3.listOnWheel);
                }, delay);

                lastTimeValue = newTimeValue;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props;
            var currentTab = _props.currentTab;
            var name = _props.name;
            var tracks = _props.tracks;
            var active = tracks.length > 6;
            var scrollBarStyle = { visibility: active ? 'visible' : 'hidden' };

            return React.createElement(
                'div',
                { className: 'playlist-tab', style: { display: currentTab === name ? 'block' : 'none' } },
                React.createElement('div', { ref: function ref(sb) {
                        return _this4.scrollBar = sb;
                    },
                    onMouseDown: this.sbOnMouseDown,
                    className: 'list-scroller',
                    style: scrollBarStyle }),
                React.createElement(
                    'ul',
                    { className: 'track-list', onWheel: active ? this.listOnWheel : null, ref: function ref(l) {
                            return _this4.list = l;
                        } },
                    React.createElement(TracksList, this.props)
                )
            );
        }
    }]);

    return Tab;
}(React.Component);

Tab.propTypes = {
    currentTab: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    tracks: React.PropTypes.array.isRequired
};


module.exports = Tab;

},{"../utils/dom":55,"./FavoritesItem":14,"./PlaylistItem":17,"./TracksList":21,"react":"react"}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Tooltip = function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }

    _createClass(Tooltip, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var visible = _props.visible;
            var title = _props.title;
            var size = _props.size;
            var children = _props.children;
            var sizeClass = void 0;

            if (size === 'm') {
                sizeClass = '--medium';
            } else if (size === 's') {
                sizeClass = '--small';
            } else {
                sizeClass = '--medium';
            }

            var titleElem = React.createElement(
                'div',
                { className: 'player-tooltip__title' },
                React.createElement(
                    'span',
                    { className: 'player-tooltip__title' + sizeClass },
                    title
                )
            );

            return React.createElement(
                'div',
                { className: 'player-tooltip player-tooltip' + sizeClass,
                    style: { opacity: visible ? '1' : '0', visibility: visible ? 'visible' : 'hidden' } },
                React.createElement(
                    'div',
                    { className: 'player-tooltip_slider', style: { width: children.length > 1 ? children.length * 30 : '' } },
                    this.props.children ? this.props.children : ''
                ),
                title ? titleElem : ''
            );
        }
    }]);

    return Tooltip;
}(React.Component);

Tooltip.propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string,
    size: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
};


module.exports = Tooltip;

},{"react":"react"}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    localStore = require('../utils/localStore'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    PlaylistItem = require('./PlaylistItem');

var TracksList = function (_React$Component) {
    _inherits(TracksList, _React$Component);

    function TracksList() {
        _classCallCheck(this, TracksList);

        return _possibleConstructorReturn(this, (TracksList.__proto__ || Object.getPrototypeOf(TracksList)).apply(this, arguments));
    }

    _createClass(TracksList, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var currentTab = _props.currentTab;
            var playingTab = _props.playingTab;
            var activeIndex = _props.activeIndex;
            var tracks = _props.tracks;
            var currentTrackId = _props.currentTrackId;
            var trackOnClick = _props.trackOnClick;
            var starOnClick = _props.starOnClick;
            var trackSearchText = _props.trackSearchText;
            var playlistSearchText = _props.playlistSearchText;
            var Item = PlaylistItem;

            if (tracks.length) {
                tracks = tracks.map(function (track) {
                    var isFavorite = localStore.includes(track.id),
                        isActive = track.index === activeIndex && currentTab === playingTab && trackSearchText === playlistSearchText && currentTrackId === tracks[activeIndex].id;

                    return React.createElement(
                        ReactCSSTransitionGroup,
                        {
                            transitionAppear: true,
                            transitionName: 'fade',
                            transitionEnterTimeout: 300,
                            transitionLeave: false,
                            transitionAppearTimeout: 500 },
                        React.createElement(Item, {
                            active: isActive,
                            isFavorite: isFavorite,
                            key: track.id,
                            trackOnClick: trackOnClick,
                            starOnClick: starOnClick,
                            track: track
                        })
                    );
                });
            }

            return React.createElement(
                'div',
                null,
                tracks
            );
        }
    }]);

    return TracksList;
}(React.Component);

TracksList.propTypes = {
    currentTab: React.PropTypes.string.isRequired,
    playingTab: React.PropTypes.string,
    activeIndex: React.PropTypes.number,
    tracks: React.PropTypes.array.isRequired,
    currentTrackId: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]).isRequired,
    trackOnClick: React.PropTypes.func.isRequired,
    starOnClick: React.PropTypes.func.isRequired,
    trackSearchText: React.PropTypes.string,
    playlistSearchText: React.PropTypes.string
};


module.exports = TracksList;

},{"../utils/localStore":57,"./PlaylistItem":17,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],22:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Tooltip = require('./Tooltip'),
    VerticalSlider = require('./sliders/VerticalSlider');

var VolumeBar = function (_React$Component) {
    _inherits(VolumeBar, _React$Component);

    function VolumeBar(props) {
        _classCallCheck(this, VolumeBar);

        var _this = _possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props));

        _this.state = {
            active: false,
            volume: 'high'
        };

        _this.volumeBarOnClick = _this.volumeBarOnClick.bind(_this);
        _this.sliderOnClick = _this.sliderOnClick.bind(_this);
        _this.thumbOnMouseMove = _this.thumbOnMouseMove.bind(_this);
        return _this;
    }

    _createClass(VolumeBar, [{
        key: 'volumeBarOnClick',
        value: function volumeBarOnClick(e) {
            var _this2 = this;

            if (e.target !== this.volumeBar) return;

            this.setState({
                active: !this.state.active
            });

            document.documentElement.click();
            document.onclick = null;

            if (!this.state.active) {
                document.onclick = function (e) {
                    if (e.target.closest('#volume') !== _this2.volumeBar) {

                        _this2.setState({
                            active: !_this2.state.active
                        });

                        document.onclick = null;
                    }
                };
            }
        }
    }, {
        key: 'sliderOnClick',
        value: function sliderOnClick(volume) {
            var setVolume = this.props.setVolume;

            this.setState({
                volume: VolumeBar.getCurrentVolStatus(volume)
            });

            setVolume(volume);
        }
    }, {
        key: 'thumbOnMouseMove',
        value: function thumbOnMouseMove(volume) {
            var setVolume = this.props.setVolume;

            this.setState({
                volume: VolumeBar.getCurrentVolStatus(volume)
            });

            setVolume(volume);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var volumeStatus = this.state.volume;

            return React.createElement(
                'li',
                { onClick: this.volumeBarOnClick,
                    id: 'volume',
                    className: 'volume-' + volumeStatus + ' icon ' + (this.state.active ? 'activated' : ''),
                    ref: function ref(vb) {
                        return _this3.volumeBar = vb;
                    } },
                React.createElement(
                    Tooltip,
                    { visible: this.state.active, size: 'm' },
                    React.createElement(VerticalSlider, {
                        sliderOnClick: this.sliderOnClick,
                        thumbOnMouseMove: this.thumbOnMouseMove,
                        title: 'VOL',
                        initVal: 1
                    })
                )
            );
        }
    }], [{
        key: 'getCurrentVolStatus',
        value: function getCurrentVolStatus(vol) {
            if (vol === 0) {
                return 'mute';
            } else if (vol <= 0.4) {
                return 'low';
            } else if (vol <= 0.7) {
                return 'medium';
            } else {
                return 'high';
            }
        }
    }]);

    return VolumeBar;
}(React.Component);

VolumeBar.propTypes = {
    setVolume: React.PropTypes.func.isRequired
};


module.exports = VolumeBar;

},{"./Tooltip":20,"./sliders/VerticalSlider":27,"react":"react"}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Button = require('../ControlBarButton'),
    playerAPI = require('../../utils/playerAPI');

var NextButton = function (_React$Component) {
    _inherits(NextButton, _React$Component);

    function NextButton() {
        _classCallCheck(this, NextButton);

        return _possibleConstructorReturn(this, (NextButton.__proto__ || Object.getPrototypeOf(NextButton)).apply(this, arguments));
    }

    _createClass(NextButton, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var id = "action-bar__next",
                buttonType = "next";

            return React.createElement(Button, { id: id, btnOnClick: this.props.nextBtnOnClick, buttonType: buttonType });
        }
    }]);

    return NextButton;
}(React.Component);

NextButton.propTypes = {
    nextBtnOnClick: React.PropTypes.func.isRequired
};


module.exports = NextButton;

},{"../../utils/playerAPI":58,"../ControlBarButton":8,"react":"react"}],24:[function(require,module,exports){
'use strict';

var React = require('react'),
    Button = require('../ControlBarButton');

var PlayButton = function PlayButton(props) {
    var id = "action-bar__play",
        buttonType = props.isPlaying ? 'stop' : 'play';

    return React.createElement(Button, { id: id, btnOnClick: props.playBtnOnClick, buttonType: buttonType });
};

PlayButton.propTypes = {
    playBtnOnClick: React.PropTypes.func.isRequired,
    isPlaying: React.PropTypes.bool.isRequired
};

module.exports = PlayButton;

},{"../ControlBarButton":8,"react":"react"}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    Button = require('../ControlBarButton'),
    playerAPI = require('../../utils/playerAPI');

var PrevButton = function (_React$Component) {
    _inherits(PrevButton, _React$Component);

    function PrevButton() {
        _classCallCheck(this, PrevButton);

        return _possibleConstructorReturn(this, (PrevButton.__proto__ || Object.getPrototypeOf(PrevButton)).apply(this, arguments));
    }

    _createClass(PrevButton, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var id = "action-bar__prev",
                buttonType = "prev";

            return React.createElement(Button, { id: id, btnOnClick: this.props.prevBtnOnClick, buttonType: buttonType });
        }
    }]);

    return PrevButton;
}(React.Component);

PrevButton.propTypes = {
    prevBtnOnClick: React.PropTypes.func.isRequired
};


module.exports = PrevButton;

},{"../../utils/playerAPI":58,"../ControlBarButton":8,"react":"react"}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    VerticalSliderItem = require('./VerticalSliderItem');

var EqualizerVerticalSlider = function (_React$Component) {
    _inherits(EqualizerVerticalSlider, _React$Component);

    function EqualizerVerticalSlider() {
        _classCallCheck(this, EqualizerVerticalSlider);

        return _possibleConstructorReturn(this, (EqualizerVerticalSlider.__proto__ || Object.getPrototypeOf(EqualizerVerticalSlider)).apply(this, arguments));
    }

    _createClass(EqualizerVerticalSlider, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var handler = _props.handler;
            var data = _props.data;
            var len = _props.len;
            var items = data.types.map(function (item) {
                return React.createElement(VerticalSliderItem, { key: item, handler: handler, initVal: 1.5, type: item, title: data.title });
            });

            return React.createElement(
                'div',
                { className: 'vertical-slider-wrapper', style: { width: parseInt(100 / len) + '%' } },
                items,
                React.createElement(
                    'div',
                    { className: 'vertical-slider-wrapper__title-wrapper' },
                    data.title
                )
            );
        }
    }]);

    return EqualizerVerticalSlider;
}(React.Component);

EqualizerVerticalSlider.propTypes = {
    handler: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired,
    len: React.PropTypes.number.isRequired
};


module.exports = EqualizerVerticalSlider;

},{"./VerticalSliderItem":28,"react":"react"}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    getCoords = require('../../utils/dom').getCoords,
    VerticalSliderItem = require('./VerticalSliderItem');

var VerticalSlider = function (_React$Component) {
    _inherits(VerticalSlider, _React$Component);

    function VerticalSlider(props) {
        _classCallCheck(this, VerticalSlider);

        var _this = _possibleConstructorReturn(this, (VerticalSlider.__proto__ || Object.getPrototypeOf(VerticalSlider)).call(this, props));

        _this.sliderOnOwnClick = _this.sliderOnOwnClick.bind(_this);
        _this.thumbOnOwnMouseMove = _this.thumbOnOwnMouseMove.bind(_this);
        return _this;
    }

    _createClass(VerticalSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.sliderHeight = this.slider.offsetHeight;
            this.thumbHeight = this.thumb.offsetHeight;
            this._cfg = {
                MIN: 0,
                MAX: this.slider.offsetHeight - this.thumb.offsetHeight
            };

            var thumbTop = (this.props.initVal - 1) * this._cfg.MAX;

            this.thumb.style.top = thumbTop + 'px';
            this.counter.style.height = this._cfg.MAX - thumbTop + this.thumbHeight / 2 + 'px';
        }
    }, {
        key: 'thumbOnOwnMouseMove',
        value: function thumbOnOwnMouseMove(e) {
            var _this2 = this;

            var thumbOnMouseMove = this.props.thumbOnMouseMove,
                shiftY = e.pageY - getCoords(this.thumb).top;

            document.onmousemove = function (e) {
                var move = e.pageY - getCoords(_this2.slider).top - shiftY,
                    ratio = 1 - move / _this2._cfg.MAX;

                if (ratio <= 0) {
                    ratio = 0;
                    move = _this2._cfg.MAX;
                } else if (ratio >= 1) {
                    ratio = 1;
                    move = 0;
                }

                _this2.thumb.style.top = move + 'px';
                _this2.counter.style.height = _this2._cfg.MAX - move + _this2.thumbHeight / 2 + 'px';

                thumbOnMouseMove(ratio);

                document.onmouseup = function (e) {
                    document.onmousemove = document.onmouseup = null;
                };
            };
        }
    }, {
        key: 'sliderOnOwnClick',
        value: function sliderOnOwnClick(e) {
            if (e.target == this.thumb) return;

            var sliderOnClick = this.props.sliderOnClick,
                move = e.pageY - getCoords(this.slider).top - this.thumbHeight / 2,
                ratio = 1 - move / this._cfg.MAX;

            if (ratio <= 0) {
                ratio = 0;
                move = this._cfg.MAX;
            } else if (ratio >= 1) {
                ratio = 1;
                move = 0;
            }

            this.thumb.style.top = move + 'px';
            this.counter.style.height = this._cfg.MAX - move + this.thumbHeight / 2 + 'px';

            sliderOnClick(ratio);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var title = this.props.title;
            var titleElem = void 0;

            if (title) {
                titleElem = React.createElement(
                    'div',
                    { className: 'vertical-slider-wrapper__title-wrapper' },
                    title
                );
            }

            return React.createElement(
                'div',
                { className: 'vertical-slider-wrapper' },
                React.createElement(
                    'div',
                    { className: 'vertical-slider-wrapper__slider-wrapper' },
                    React.createElement(
                        'div',
                        { className: 'vertical-slider',
                            onClick: this.sliderOnOwnClick,
                            ref: function ref(s) {
                                return _this3.slider = s;
                            } },
                        React.createElement('div', {
                            className: 'vertical-slider__thumb',
                            onMouseDown: this.thumbOnOwnMouseMove,
                            ref: function ref(th) {
                                return _this3.thumb = th;
                            } }),
                        React.createElement('div', { className: 'vertical-slider__timeCounter',
                            ref: function ref(c) {
                                return _this3.counter = c;
                            } })
                    )
                ),
                titleElem
            );
        }
    }]);

    return VerticalSlider;
}(React.Component);

VerticalSlider.propTypes = {
    title: React.PropTypes.string,
    sliderOnClick: React.PropTypes.func.isRequired,
    thumbOnMouseMove: React.PropTypes.func.isRequired,
    initVal: React.PropTypes.number.isRequired

};


module.exports = VerticalSlider;

},{"../../utils/dom":55,"./VerticalSliderItem":28,"react":"react"}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    getCoords = require('../../utils/dom').getCoords;

var VerticalSliderItem = function (_React$Component) {
    _inherits(VerticalSliderItem, _React$Component);

    function VerticalSliderItem(props) {
        _classCallCheck(this, VerticalSliderItem);

        var _this = _possibleConstructorReturn(this, (VerticalSliderItem.__proto__ || Object.getPrototypeOf(VerticalSliderItem)).call(this, props));

        _this.sliderOnOwnClick = _this.sliderOnOwnClick.bind(_this);
        _this.thumbOnOwnMouseMove = _this.thumbOnOwnMouseMove.bind(_this);
        return _this;
    }

    _createClass(VerticalSliderItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.sliderHeight = this.slider.offsetHeight;
            this.thumbHeight = this.thumb.offsetHeight;
            this._cfg = {
                MIN: 0,
                MAX: this.slider.offsetHeight - this.thumb.offsetHeight
            };

            var thumbTop = (this.props.initVal - 1) * this._cfg.MAX;

            this.thumb.style.top = thumbTop + 'px';
            this.counter.style.height = this._cfg.MAX - thumbTop + this.thumbHeight / 2 + 'px';
        }
    }, {
        key: 'thumbOnOwnMouseMove',
        value: function thumbOnOwnMouseMove(e) {
            var _this2 = this;

            var _props = this.props;
            var handler = _props.handler;
            var type = _props.type;
            var title = _props.title;
            var shiftY = e.pageY - getCoords(this.thumb).top;

            document.onmousemove = function (e) {
                var move = e.pageY - getCoords(_this2.slider).top - shiftY,
                    ratio = 1 - move / _this2._cfg.MAX;

                if (ratio <= 0) {
                    ratio = 0;
                    move = _this2._cfg.MAX;
                } else if (ratio >= 1) {
                    ratio = 1;
                    move = 0;
                }

                _this2.thumb.style.top = move + 'px';
                _this2.counter.style.height = _this2._cfg.MAX - move + _this2.thumbHeight / 2 + 'px';

                handler({ title: title, type: type, ratio: ratio });

                document.onmouseup = function (e) {
                    document.onmousemove = document.onmouseup = null;
                };
            };
        }
    }, {
        key: 'sliderOnOwnClick',
        value: function sliderOnOwnClick(e) {
            if (e.target == this.thumb) return;

            var _props2 = this.props;
            var handler = _props2.handler;
            var type = _props2.type;
            var title = _props2.title;
            var move = e.pageY - getCoords(this.slider).top - this.thumbHeight / 2;
            var ratio = 1 - move / this._cfg.MAX;

            if (ratio <= 0) {
                ratio = 0;
                move = this._cfg.MAX;
            } else if (ratio >= 1) {
                ratio = 1;
                move = 0;
            }

            this.thumb.style.top = move + 'px';
            this.counter.style.height = this._cfg.MAX - move + this.thumbHeight / 2 + 'px';

            handler({ title: title, type: type, ratio: ratio });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'div',
                { className: 'vertical-slider-wrapper__slider-wrapper' },
                React.createElement(
                    'div',
                    { className: 'vertical-slider',
                        onClick: this.sliderOnOwnClick,
                        ref: function ref(s) {
                            return _this3.slider = s;
                        } },
                    React.createElement('div', {
                        className: 'vertical-slider__thumb',
                        onMouseDown: this.thumbOnOwnMouseMove,
                        ref: function ref(th) {
                            return _this3.thumb = th;
                        } }),
                    React.createElement('div', { className: 'vertical-slider__timeCounter',
                        ref: function ref(c) {
                            return _this3.counter = c;
                        } })
                )
            );
        }
    }]);

    return VerticalSliderItem;
}(React.Component);

VerticalSliderItem.propTypes = {
    handler: React.PropTypes.func.isRequired,
    type: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    initVal: React.PropTypes.number.isRequired
};


module.exports = VerticalSliderItem;

},{"../../utils/dom":55,"react":"react"}],29:[function(require,module,exports){
'use strict';

var UPDATE_DATA = 'UPDATE_DATA';

module.exports = {
    UPDATE_DATA: UPDATE_DATA
};

},{}],30:[function(require,module,exports){
'use strict';

var FETCH_FAVORITES_START = 'FETCH_FAVORITES_START',
    UPDATE_FAVORITES = 'UPDATE_FAVORITES',
    FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR',
    UPDATE_AMOUNT = 'UPDATE_AMOUNT',
    REMOVE_TRACK = 'REMOVE_TRACK',
    SHUFFLE_TRACKS = 'SHUFFLE_TRACKS';

module.exports = {
    FETCH_FAVORITES_START: FETCH_FAVORITES_START,
    UPDATE_FAVORITES: UPDATE_FAVORITES,
    FETCH_FAVORITES_ERROR: FETCH_FAVORITES_ERROR,
    UPDATE_AMOUNT: UPDATE_AMOUNT,
    REMOVE_TRACK: REMOVE_TRACK,
    SHUFFLE_TRACKS: SHUFFLE_TRACKS
};

},{}],31:[function(require,module,exports){
'use strict';

var TOGGLE_TRACK = 'TOGGLE_TRACK',
    CHANGE_CURRENT_TIME = 'CHANGE_CURRENT_TIME',
    CHANGE_PLAYING_TRACK = 'CHANGE_PLAYING_TRACK',
    NEXT_TRACK = 'NEXT_TRACK',
    PREV_TRACK = 'PREV_TRACK',
    TOGGLE_REPEAT_TRACK = 'TOGGLE_REPEAT_TRACK';

module.exports = {
	TOGGLE_TRACK: TOGGLE_TRACK,
	CHANGE_CURRENT_TIME: CHANGE_CURRENT_TIME,
	CHANGE_PLAYING_TRACK: CHANGE_PLAYING_TRACK,
	NEXT_TRACK: NEXT_TRACK,
	PREV_TRACK: PREV_TRACK,
	TOGGLE_REPEAT_TRACK: TOGGLE_REPEAT_TRACK
};

},{}],32:[function(require,module,exports){
'use strict';

var FETCH_PLAYLIST_START = 'FETCH_PLAYLIST_START',
    UPDATE_PLAYLIST = 'UPDATE_PLAYLIST',
    FETCH_PLAYLIST_ERROR = 'FETCH_PLAYLIST_ERROR',
    UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT',
    SHUFFLE_TRACKS = 'SHUFFLE_TRACKS',
    CONCAT_PARTIAL_TRACKS = 'CONCAT_PARTIAL_TRACKS';

module.exports = {
    FETCH_PLAYLIST_START: FETCH_PLAYLIST_START,
    UPDATE_PLAYLIST: UPDATE_PLAYLIST,
    FETCH_PLAYLIST_ERROR: FETCH_PLAYLIST_ERROR,
    UPDATE_SEARCH_TEXT: UPDATE_SEARCH_TEXT,
    SHUFFLE_TRACKS: SHUFFLE_TRACKS,
    CONCAT_PARTIAL_TRACKS: CONCAT_PARTIAL_TRACKS
};

},{}],33:[function(require,module,exports){
'use strict';

var CHANGE_CURRENT_TAB = 'CHANGE_CURRENT_TAB';

module.exports = {
    CHANGE_CURRENT_TAB: CHANGE_CURRENT_TAB
};

},{}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var playerAPI = require('../utils/playerAPI');
var PlayButton = require('../components/buttons/PlayButton');
var NextButton = require('../components/buttons/NextButton');
var PrevButton = require('../components/buttons/PrevButton');
var ActionBar = function (_React$Component) {
    _inherits(ActionBar, _React$Component);

    function ActionBar(props) {
        _classCallCheck(this, ActionBar);

        var _this = _possibleConstructorReturn(this, (ActionBar.__proto__ || Object.getPrototypeOf(ActionBar)).call(this, props));

        _this.prevBtnOnClick = _this.prevBtnOnClick.bind(_this);
        _this.playBtnOnClick = _this.playBtnOnClick.bind(_this);
        _this.nextBtnOnClick = _this.nextBtnOnClick.bind(_this);
        return _this;
    }

    _createClass(ActionBar, [{
        key: 'prevBtnOnClick',
        value: function prevBtnOnClick() {
            playerAPI.playPrev();
        }
    }, {
        key: 'playBtnOnClick',
        value: function playBtnOnClick() {
            playerAPI.toggle();
        }
    }, {
        key: 'nextBtnOnClick',
        value: function nextBtnOnClick() {
            playerAPI.playNext();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'action-bar' },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(PrevButton, { prevBtnOnClick: this.prevBtnOnClick }),
                    React.createElement(PlayButton, { isPlaying: this.props.isPlaying, playBtnOnClick: this.playBtnOnClick }),
                    React.createElement(NextButton, { nextBtnOnClick: this.nextBtnOnClick })
                )
            );
        }
    }]);

    return ActionBar;
}(React.Component);

ActionBar.propTypes = {
    isPlaying: React.PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
        isPlaying: state.player.isPlaying
    };
}

module.exports = connect(mapStateToProps)(ActionBar);

},{"../components/buttons/NextButton":23,"../components/buttons/PlayButton":24,"../components/buttons/PrevButton":25,"../utils/playerAPI":58,"react":"react","react-redux":"react-redux"}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var soundcloud = require('soundcloud');

var _require = require('react-redux');

var connect = _require.connect;
var playerAPI = require('../utils/playerAPI');
var localStore = require('../utils/localStore');

var _require2 = require('../actions/favoritesActions');

var updateAmount = _require2.updateAmount;


var ControlBar = require('./../components/ControlBar'),
    Header = require('./../components/Header'),
    Content = require('./../components/Content');

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            return false;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dispatch = this.props.dispatch;


            playerAPI.canvasSpectrum._initCanvas(document.querySelector('#canvas'));

            soundcloud.initialize({
                client_id: '94b8a7e5efe62b01c8ca3f03cc3ccca8'
            });

            dispatch(updateAmount(localStore.length));
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { id: 'player' },
                    React.createElement(Header, null),
                    React.createElement(Content, null),
                    React.createElement(ControlBar, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

App.propTypes = {
    favorites: React.PropTypes.object.isRequired,
    currentTab: React.PropTypes.string.isRequired
};


function mapStateToProps(state) {
    return {
        favorites: state.favorites,
        currentTab: state.ui.currentTab
    };
}

module.exports = connect(mapStateToProps)(App);

},{"../actions/favoritesActions":2,"../utils/localStore":57,"../utils/playerAPI":58,"./../components/Content":6,"./../components/ControlBar":7,"./../components/Header":15,"react":"react","react-redux":"react-redux","soundcloud":"soundcloud"}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var Cover = require('../components/Cover');
var Artwork = function (_React$Component) {
    _inherits(Artwork, _React$Component);

    function Artwork(props) {
        _classCallCheck(this, Artwork);

        var _this = _possibleConstructorReturn(this, (Artwork.__proto__ || Object.getPrototypeOf(Artwork)).call(this, props));

        _this.state = {
            loading: false
        };

        _this.coverOnLoad = _this.coverOnLoad.bind(_this);
        return _this;
    }

    _createClass(Artwork, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                loading: this.props.src !== nextProps.src
            });
        }
    }, {
        key: 'coverOnLoad',
        value: function coverOnLoad() {
            this.setState({
                loading: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(Cover, { src: this.props.src, loading: this.state.loading, coverOnLoad: this.coverOnLoad });
        }
    }]);

    return Artwork;
}(React.Component);

Artwork.propTypes = {
    src: React.PropTypes.string.isRequired
};


function mapStateToProps(state) {
    return {
        src: state.data.cover || 'http://placehold.it/300x300/fff/3cd2ce/?text=REACT.JS+PLAYER'
    };
}

module.exports = connect(mapStateToProps)(Artwork);

},{"../components/Cover":9,"react":"react","react-redux":"react-redux"}],37:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var PlaylistComponent = require('../components/Playlist');

var _require2 = require('../actions/playerActions');

var playTrack = _require2.playTrack;

var _require3 = require('../actions/dataActions');

var updateData = _require3.updateData;

var _require4 = require('../actions/uiActions');

var changeCurrentTab = _require4.changeCurrentTab;

var _require5 = require('../actions/playlistActions');

var concatPartialTracks = _require5.concatPartialTracks;
var fetchPlaylistStart = _require5.fetchPlaylistStart;
var fetchPlaylistError = _require5.fetchPlaylistError;

var _require6 = require('../actions/favoritesActions');

var fetchFavoritesStart = _require6.fetchFavoritesStart;
var updateFavorites = _require6.updateFavorites;
var fetchFavoritesError = _require6.fetchFavoritesError;
var updateAmount = _require6.updateAmount;
var removeTrack = _require6.removeTrack;
var playerAPI = require('../utils/playerAPI');
var localStore = require('../utils/localStore');
var Playlist = function (_React$Component) {
    _inherits(Playlist, _React$Component);

    function Playlist(props) {
        _classCallCheck(this, Playlist);

        var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));

        _this.trackOnClick = _this.trackOnClick.bind(_this);
        _this.tabOnChanged = _this.tabOnChanged.bind(_this);
        _this.starOnClick = _this.starOnClick.bind(_this);
        _this.trackListOnScrolled = _this.trackListOnScrolled.bind(_this);
        return _this;
    }

    _createClass(Playlist, [{
        key: 'trackOnClick',
        value: function trackOnClick(e, trackData) {
            if (e.target.dataset.val) return;

            var _props = this.props;
            var dispatch = _props.dispatch;
            var playlist = _props.playlist;
            var currentTab = _props.currentTab;


            dispatch(playTrack(trackData.index));

            dispatch(updateData(Object.assign(trackData, {
                currentPlaylist: currentTab,
                searchText: playlist.searchText
            })));

            playerAPI.play(trackData.streamUrl);
        }
    }, {
        key: 'starOnClick',
        value: function starOnClick(e, trackData) {
            var _props2 = this.props;
            var dispatch = _props2.dispatch;
            var currentTab = _props2.currentTab;


            if (currentTab === 'favorites') {
                localStore.remove(trackData);
                dispatch(removeTrack(trackData.id));
                dispatch(updateAmount(localStore.length));
            } else {
                localStore.add(trackData);
                dispatch(updateAmount(localStore.length));
            }
        }
    }, {
        key: 'trackListOnScrolled',
        value: function trackListOnScrolled(e, cb) {
            var dispatch = this.props.dispatch;
            var searchText = this.props.playlist.searchText;


            dispatch(function (dispatch) {
                dispatch(fetchPlaylistStart());

                playerAPI.findPartialTracks(searchText).then(function (tracks) {
                    dispatch(concatPartialTracks(tracks));
                    cb(e);
                }).catch(function (error) {
                    dispatch(fetchPlaylistError(error));
                });
            });
        }
    }, {
        key: 'tabOnChanged',
        value: function tabOnChanged(tabName) {
            var _props3 = this.props;
            var dispatch = _props3.dispatch;
            var favorites = _props3.favorites;


            if (tabName === 'favorites') {
                if (favorites.amount > favorites.tracks.length) {
                    dispatch(fetchFavoritesStart());

                    playerAPI.findTracksByIds(localStore.store[localStore._value]).then(function (tracks) {
                        dispatch(updateFavorites(tracks));
                    }).catch(function (error) {
                        return fetchFavoritesError(error);
                    });
                }
            }

            dispatch(changeCurrentTab(tabName));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props4 = this.props;
            var playlist = _props4.playlist;
            var currentTab = _props4.currentTab;
            var favorites = _props4.favorites;
            var fetching = currentTab === 'playlist' ? playlist.fetching : favorites.fetching;

            return React.createElement(PlaylistComponent, _extends({}, this.props, {
                fetching: fetching,
                tabOnChanged: this.tabOnChanged,
                starOnClick: this.starOnClick,
                trackOnClick: this.trackOnClick,
                trackListOnScrolled: this.trackListOnScrolled
            }));
        }
    }]);

    return Playlist;
}(React.Component);

Playlist.propTypes = {
    playlist: React.PropTypes.object.isRequired,
    data: React.PropTypes.object.isRequired,
    currentTrackIndex: React.PropTypes.number,
    currentTab: React.PropTypes.string.isRequired,
    favorites: React.PropTypes.object.isRequired
};


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

},{"../actions/dataActions":1,"../actions/favoritesActions":2,"../actions/playerActions":3,"../actions/playlistActions":4,"../actions/uiActions":5,"../components/Playlist":16,"../utils/localStore":57,"../utils/playerAPI":58,"react":"react","react-redux":"react-redux"}],38:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var playerAPI = require('../utils/playerAPI');
var VolumeBar = require('../components/VolumeBar');
var EqualizerBar = require('../components/Equalizer');

var _require2 = require('../actions/playlistActions');

var shufflePlaylist = _require2.shuffleTracks;

var _require3 = require('../actions/favoritesActions');

var shuffleFavorites = _require3.shuffleTracks;

var ProcessingBar = function (_React$Component) {
    _inherits(ProcessingBar, _React$Component);

    function ProcessingBar(props) {
        _classCallCheck(this, ProcessingBar);

        var _this = _possibleConstructorReturn(this, (ProcessingBar.__proto__ || Object.getPrototypeOf(ProcessingBar)).call(this, props));

        _this.setVolume = _this.setVolume.bind(_this);
        _this.toggleRepeat = _this.toggleRepeat.bind(_this);
        _this.shuffleCurrentPlaylist = _this.shuffleCurrentPlaylist.bind(_this);
        _this.filterFrequencies = _this.filterFrequencies.bind(_this);
        return _this;
    }

    _createClass(ProcessingBar, [{
        key: 'setVolume',
        value: function setVolume(volume) {
            playerAPI.setVolume(volume);
        }
    }, {
        key: 'filterFrequencies',
        value: function filterFrequencies(filter) {
            playerAPI.filterValues(filter);
        }
    }, {
        key: 'toggleRepeat',
        value: function toggleRepeat() {
            playerAPI.toggleRepeat();
        }
    }, {
        key: 'shuffleCurrentPlaylist',
        value: function shuffleCurrentPlaylist() {
            var _props = this.props;
            var dispatch = _props.dispatch;
            var currentTab = _props.currentTab;


            currentTab === 'playlist' ? dispatch(shufflePlaylist()) : dispatch(shuffleFavorites());
        }
    }, {
        key: 'render',
        value: function render() {
            var repeat = this.props.repeat;

            return React.createElement(
                'div',
                { className: 'processing-bar' },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(VolumeBar, { setVolume: this.setVolume }),
                    React.createElement(EqualizerBar, { filterFrequencies: this.filterFrequencies }),
                    React.createElement('li', { id: 'processing-bar__shuffle', onClick: this.shuffleCurrentPlaylist, className: 'icon' }),
                    React.createElement('li', { id: 'repeat', style: { color: repeat ? '#3ccecf' : '' }, onClick: this.toggleRepeat, className: 'icon' })
                )
            );
        }
    }]);

    return ProcessingBar;
}(React.Component);

ProcessingBar.propTypes = {
    repeat: React.PropTypes.bool.isRequired,
    currentTab: React.PropTypes.string.isRequired
};


function mapStateToProps(state) {
    return {
        repeat: state.player.repeat,
        currentTab: state.ui.currentTab
    };
}

module.exports = connect(mapStateToProps)(ProcessingBar);

},{"../actions/favoritesActions":2,"../actions/playlistActions":4,"../components/Equalizer":13,"../components/VolumeBar":22,"../utils/playerAPI":58,"react":"react","react-redux":"react-redux"}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var playerAPI = require('../utils/playerAPI');

var _require2 = require('../actions/playlistActions');

var fetchPlaylistStart = _require2.fetchPlaylistStart;
var updatePlaylist = _require2.updatePlaylist;
var fetchPlaylistError = _require2.fetchPlaylistError;
var changeSearchText = _require2.changeSearchText;


var lastTimeValue = 0,
    timer = null;

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.state = {
            value: '',
            visible: false
        };

        _this.inputOnChange.bind(_this);
        _this.clearInputField.bind(_this);
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.searchField.focus();
            this.searchField.value = 'Hans Zimmer';
            this.inputOnChange({ target: this.searchField });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.searchText !== this.props.searchText) {
                this.searchField.value = nextProps.searchText;
                this.inputOnChange({ target: this.searchField });
            }
        }
    }, {
        key: 'inputOnChange',
        value: function inputOnChange(e) {
            var val = e.target.value;
            var newTimeValue = new Date();
            var delay = this.props.searchDelay;
            var dispatch = this.props.dispatch;


            if (newTimeValue - lastTimeValue < delay) {
                clearTimeout(timer);
            }

            timer = setTimeout(function () {

                dispatch(changeSearchText(val));

                dispatch(function (dispatch) {
                    dispatch(fetchPlaylistStart());

                    playerAPI.findTracks(val).then(function (tracks) {
                        dispatch(updatePlaylist(tracks));
                    }).catch(function (error) {
                        dispatch(fetchPlaylistError(error));
                    });
                });
            }, delay);

            this.setState({
                value: val,
                visible: val.length ? true : false
            });

            lastTimeValue = newTimeValue;
        }
    }, {
        key: 'clearInputField',
        value: function clearInputField() {
            clearTimeout(timer);

            this.setState({
                value: '',
                visible: false
            });

            this.searchField.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state;
            var visible = _state.visible;
            var value = _state.value;


            return React.createElement(
                'div',
                { className: 'visual-bar-left-header' },
                React.createElement(
                    'div',
                    { className: 'search-bar' },
                    React.createElement('div', { className: 'icon search-bar__magnifier-sign' }),
                    React.createElement('input', { onChange: this.inputOnChange.bind(this),
                        placeholder: 'Search',
                        value: value,
                        className: 'search-bar__input', type: 'text',
                        ref: function ref(sf) {
                            return _this2.searchField = sf;
                        }
                    }),
                    React.createElement('div', { onClick: this.clearInputField.bind(this),
                        className: "icon search-bar__x-sign " + (visible ? '' : 'hide') })
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);

SearchBar.propTypes = {
    searchText: React.PropTypes.string.isRequired,
    searchDelay: React.PropTypes.number.isRequired
};


function mapStateToProps(state) {
    return {
        searchText: state.playlist.searchText
    };
}

module.exports = connect(mapStateToProps)(SearchBar);

},{"../actions/playlistActions":4,"../utils/playerAPI":58,"react":"react","react-redux":"react-redux"}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var DurationBar = require('../components/DurationBar');
var CurrentTimeBar = require('../components/CurrentTimeBar');
var ProgressBar = require('../components/ProgressBar');
var playerAPI = require('../utils/playerAPI');
var TimeBar = function (_React$Component) {
    _inherits(TimeBar, _React$Component);

    function TimeBar(props) {
        _classCallCheck(this, TimeBar);

        var _this = _possibleConstructorReturn(this, (TimeBar.__proto__ || Object.getPrototypeOf(TimeBar)).call(this, props));

        _this.updateTime = _this.updateTime.bind(_this);
        return _this;
    }

    _createClass(TimeBar, [{
        key: 'updateTime',
        value: function updateTime(time) {
            var duration = this.props.duration;

            playerAPI.currentTime = parseInt(time * duration);

            playerAPI.startOver();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var currentTime = _props.currentTime;
            var duration = _props.duration;
            var ratio = currentTime / duration;

            return React.createElement(
                'div',
                { className: 'time-bar' },
                React.createElement(
                    'ul',
                    null,
                    React.createElement(CurrentTimeBar, { currentTime: currentTime }),
                    React.createElement(ProgressBar, { updateTime: this.updateTime, duration: duration, progress: ratio }),
                    React.createElement(DurationBar, { duration: duration })
                )
            );
        }
    }]);

    return TimeBar;
}(React.Component);

TimeBar.propTypes = {
    currentTime: React.PropTypes.number.isRequired,
    duration: React.PropTypes.number.isRequired
};


function mapStateToProps(state) {
    return {
        currentTime: state.player.currentTime || 0,
        duration: state.data.duration || 0
    };
}

module.exports = connect(mapStateToProps)(TimeBar);

},{"../components/CurrentTimeBar":11,"../components/DurationBar":12,"../components/ProgressBar":18,"../utils/playerAPI":58,"react":"react","react-redux":"react-redux"}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('react-redux');

var connect = _require.connect;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TrackData = function (_React$Component) {
    _inherits(TrackData, _React$Component);

    function TrackData(props) {
        _classCallCheck(this, TrackData);

        var _this = _possibleConstructorReturn(this, (TrackData.__proto__ || Object.getPrototypeOf(TrackData)).call(this, props));

        _this.titleOnMouseOver = _this.titleOnMouseOver.bind(_this);
        _this.titleOnMouseOut = _this.titleOnMouseOut.bind(_this);
        return _this;
    }

    _createClass(TrackData, [{
        key: 'titleOnMouseOver',
        value: function titleOnMouseOver(e) {
            var title = e.target;

            if (title.offsetWidth < title.scrollWidth) {
                title.style.textIndent = -(title.scrollWidth - title.offsetWidth) + 'px';
            }
        }
    }, {
        key: 'titleOnMouseOut',
        value: function titleOnMouseOut(e) {
            var title = e.target;
            title.style.transition = 'text-indent .7s';
            title.style.textIndent = '0px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var title = _props.title;
            var username = _props.username;


            return React.createElement(
                ReactCSSTransitionGroup,
                { transitionName: 'fade', transitionEnterTimeout: 500, transitionLeave: false },
                React.createElement(
                    'div',
                    { key: title.length, className: 'track-data' },
                    React.createElement(
                        'div',
                        { id: 'album',
                            onMouseOver: function onMouseOver(e) {
                                return _this2.titleOnMouseOver(e);
                            },
                            onMouseOut: function onMouseOut(e) {
                                return _this2.titleOnMouseOut(e);
                            },
                            className: 'track-data__title',
                            ref: function ref(t) {
                                return _this2.title = t;
                            } },
                        title
                    ),
                    React.createElement(
                        'div',
                        { id: 'artist', className: 'track-data__username' },
                        username
                    )
                )
            );
        }
    }]);

    return TrackData;
}(React.Component);

TrackData.propTypes = {
    username: React.PropTypes.string,
    title: React.PropTypes.string
};

function mapStateToProps(state) {
    var _state$data = state.data;
    var username = _state$data.username;
    var title = _state$data.title;


    return {
        username: username,
        title: title
    };
}

module.exports = connect(mapStateToProps)(TrackData);

},{"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group","react-redux":"react-redux"}],42:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react'),
    annyang = require('annyang'),
    commands = require('../utils/voiceCommands');

var VoiceBar = function (_React$Component) {
    _inherits(VoiceBar, _React$Component);

    function VoiceBar(props) {
        _classCallCheck(this, VoiceBar);

        var _this = _possibleConstructorReturn(this, (VoiceBar.__proto__ || Object.getPrototypeOf(VoiceBar)).call(this, props));

        _this.state = {
            isActive: false
        };

        if (annyang) {
            annyang.addCommands(commands);
        }

        _this.voiceBarOnClick = _this.voiceBarOnClick.bind(_this);
        return _this;
    }

    _createClass(VoiceBar, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextState.isActive) {
                annyang.start();
            } else {
                annyang.abort();
            }
        }
    }, {
        key: 'voiceBarOnClick',
        value: function voiceBarOnClick() {
            this.setState({
                isActive: !this.state.isActive
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'voice-bar' },
                React.createElement('div', {
                    className: "icon voice-bar__controller " + (this.state.isActive ? 'activated' : ''),
                    onClick: this.voiceBarOnClick })
            );
        }
    }]);

    return VoiceBar;
}(React.Component);

module.exports = VoiceBar;

},{"../utils/voiceCommands":60,"annyang":61,"react":"react"}],43:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('react-redux');

var Provider = _require.Provider;
var App = require('./containers/App');
var store = require('./reducers/store');

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(App, null)
), document.getElementById('root'));

},{"./containers/App":35,"./reducers/store":51,"react":"react","react-dom":"react-dom","react-redux":"react-redux"}],44:[function(require,module,exports){
'use strict';

var initialState = require('./initialState'),
    constants = require('../constants/dataConstants');

function dataReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.data : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case constants.UPDATE_DATA:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

module.exports = dataReducer;

},{"../constants/dataConstants":29,"./initialState":47}],45:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var formatCover = require('../utils/format').formatCover;

var Track = function Track(_ref) {
	var title = _ref.title;
	var index = _ref.index;
	var cover = _ref.artwork_url;
	var streamUrl = _ref.stream_url;
	var id = _ref.id;
	var duration = _ref.duration;
	var uri = _ref.uri;
	var username = _ref.user.username;

	_classCallCheck(this, Track);

	Object.assign(this, {
		title: title,
		index: index,
		cover: formatCover(cover),
		id: id,
		duration: duration,
		uri: uri,
		streamUrl: streamUrl,
		username: username
	});
};

var entity = {
	track: Track
};

module.exports = {
	createEntity: function createEntity(type, props) {
		return new entity[type](props);
	}
};

},{"../utils/format":56}],46:[function(require,module,exports){
'use strict';

var initialState = require('./initialState'),
    constants = require('../constants/favoritesConstants'),
    factory = require('./factory'),
    shuffle = require('../utils/format').shuffle,
    normalizeIndices = require('../utils/format').normalizeIndices;

// artwork_url is a property of a SC track object that represents a cover

function favoritesReducer() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.favorites : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case constants.FETCH_FAVORITES_START:
            return Object.assign({}, state, {
                fetched: false,
                fetching: true
            });

        case constants.UPDATE_FAVORITES:
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                tracks: action.tracks.filter(function (track) {
                    return track.artwork_url && track.streamable;
                }).map(function (track, index) {
                    return factory.createEntity('track', Object.assign(track, {
                        index: index
                    }));
                })
            });

        case constants.FETCH_FAVORITES_ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.error
            });

        case constants.REMOVE_TRACK:
            return Object.assign({}, state, {
                tracks: state.tracks.filter(function (track) {
                    return track.id !== action.id;
                })
            });

        case constants.UPDATE_AMOUNT:
            return Object.assign({}, state, {
                amount: action.amount
            });

        case constants.SHUFFLE_TRACKS:
            return Object.assign({}, state, {
                tracks: normalizeIndices(shuffle(state.tracks))
            });

        default:
            return state;
    }
}

module.exports = favoritesReducer;

},{"../constants/favoritesConstants":30,"../utils/format":56,"./factory":45,"./initialState":47}],47:[function(require,module,exports){
'use strict';

var initialState = {
	playlist: {
		tracks: [],
		searchText: '',
		error: null,
		fetching: false,
		fetched: false
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

},{}],48:[function(require,module,exports){
'use strict';

var initialState = require('./initialState'),
    constants = require('../constants/playerConstants');

function playerReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.player : arguments[0];
	var action = arguments[1];


	switch (action.type) {
		case constants.CHANGE_PLAYING_TRACK:
			return Object.assign({}, state, {
				currentTrackIndex: action.trackIndex
			});

		case constants.TOGGLE_TRACK:
			return Object.assign({}, state, {
				isPlaying: action.isPlaying
			});

		case constants.CHANGE_CURRENT_TIME:
			return Object.assign({}, state, {
				currentTime: action.time
			});

		case constants.TOGGLE_REPEAT_TRACK:
			return Object.assign({}, state, {
				repeat: !state.repeat
			});

		default:
			return state;
	}
}

module.exports = playerReducer;

},{"../constants/playerConstants":31,"./initialState":47}],49:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var initialState = require('./initialState'),
    constants = require('../constants/playlistConstants'),
    factory = require('./factory'),
    shuffle = require('../utils/format').shuffle,
    normalizeIndices = require('../utils/format').normalizeIndices;

// artwork_url is a property of a SC track object that represents a cover

function playerReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState.playlist : arguments[0];
	var action = arguments[1];

	var _ret = function () {
		switch (action.type) {
			case constants.FETCH_PLAYLIST_START:
				return {
					v: Object.assign({}, state, {
						fetched: false,
						fetching: true
					})
				};

			case constants.UPDATE_PLAYLIST:
				return {
					v: Object.assign({}, state, {
						fetching: false,
						fetched: true,
						tracks: action.tracks.filter(function (track) {
							return track.artwork_url && track.streamable;
						}).map(function (track, index) {
							return factory.createEntity('track', Object.assign(track, {
								index: index
							}));
						})
					})
				};

			case constants.FETCH_PLAYLIST_ERROR:
				return {
					v: Object.assign({}, state, {
						fetching: false,
						error: action.error
					})
				};

			case constants.UPDATE_SEARCH_TEXT:
				return {
					v: Object.assign({}, state, {
						searchText: action.text
					})
				};

			case constants.CONCAT_PARTIAL_TRACKS:
				var lastIndex = state.tracks[state.tracks.length - 1].index + 1,
				    newTracks = action.tracks.collection.filter(function (track) {
					return track.artwork_url && track.streamable;
				}).map(function (track, index) {
					return factory.createEntity('track', Object.assign(track, {
						index: index + lastIndex
					}));
				});

				return {
					v: Object.assign({}, state, {
						fetching: false,
						fetched: true,
						tracks: state.tracks.concat(newTracks)
					})
				};

			case constants.SHUFFLE_TRACKS:
				return {
					v: Object.assign({}, state, {
						tracks: normalizeIndices(shuffle(state.tracks))
					})
				};

			default:
				return {
					v: state
				};
		}
	}();

	if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
}

module.exports = playerReducer;

},{"../constants/playlistConstants":32,"../utils/format":56,"./factory":45,"./initialState":47}],50:[function(require,module,exports){
'use strict';

var playlistReducer = require('./playlistReducer'),
    playerReducer = require('./playerReducer'),
    dataReducer = require('./dataReducer'),
    uiReducer = require('./uiReducer'),
    favoritesReducer = require('./favoritesReducer'),
    initialState = require('./initialState');

function reducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	var playlist = playlistReducer(state.playlist, action),
	    player = playerReducer(state.player, action),
	    data = dataReducer(state.data, action),
	    favorites = favoritesReducer(state.favorites, action),
	    ui = uiReducer(state.ui, action);

	return {
		playlist: playlist,
		player: player,
		data: data,
		favorites: favorites,
		ui: ui
	};
}

module.exports = reducer;

},{"./dataReducer":44,"./favoritesReducer":46,"./initialState":47,"./playerReducer":48,"./playlistReducer":49,"./uiReducer":52}],51:[function(require,module,exports){
'use strict';

var rootReducer = require('./rootReducer');

var _require = require('redux');

var createStore = _require.createStore;
var applyMiddleware = _require.applyMiddleware;
var logger = require('redux-logger');
var thunk = require('redux-thunk').default;

var middleWare = applyMiddleware(thunk);
var store = createStore(rootReducer, middleWare);

module.exports = store;

},{"./rootReducer":50,"redux":"redux","redux-logger":62,"redux-thunk":63}],52:[function(require,module,exports){
'use strict';

var initialState = require('./initialState'),
    constants = require('../constants/uiConstants');

function uiReducer() {
    var store = arguments.length <= 0 || arguments[0] === undefined ? initialState.ui : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case constants.CHANGE_CURRENT_TAB:
            return Object.assign({}, store, {
                currentTab: action.tab
            });
        default:
            return store;
    }
}

module.exports = uiReducer;

},{"../constants/uiConstants":33,"./initialState":47}],53:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasSpectrum = function () {
    function CanvasSpectrum() {
        _classCallCheck(this, CanvasSpectrum);
    }

    _createClass(CanvasSpectrum, [{
        key: '_initCanvas',
        value: function _initCanvas(canvas) {
            if (!canvas) {
                throw new TypeError("Failed to execute '_initCanvas()': at least 1 argument required");
            }

            this.canvas = canvas;
            this._context = canvas.getContext('2d');

            this._context.lineWidth = 4;

            this._gradStyle = CanvasSpectrum.createLinearGradient(this._context);
        }
    }, {
        key: 'draw',
        value: function draw(arr) {
            this.clear();

            this._context.strokeStyle = this._gradStyle();

            this._context.beginPath();

            for (var i = 0; i < arr.length; i++) {
                var y = arr[i] / 128 * this.canvas.height / 2;

                if (i === 0) {
                    this._context.moveTo(0, y / 2);
                } else {
                    this._context.lineTo(i + 2, y / 2);
                }
            }

            this._context.stroke();
            this._context.closePath();
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }, {
        key: 'update',
        value: function update(arr) {
            this.draw(arr);
        }
    }], [{
        key: 'createLinearGradient',
        value: function createLinearGradient(context) {
            var grad = context.createLinearGradient(0, 0, context.canvas.width, 0),
                prevColorPattern = 'rgba(60, 210, 206, .3)';

            return function () {
                var color1 = parseInt(Math.random() * 255),
                    color2 = parseInt(Math.random() * 255),
                    color3 = parseInt(Math.random() * 255);

                var nextColorPattern = 'rgb(' + color1 + ', ' + color2 + ', ' + color3 + ')';

                grad.addColorStop(1, prevColorPattern);
                grad.addColorStop(0, nextColorPattern);

                return grad;
            };
        }
    }]);

    return CanvasSpectrum;
}();

module.exports = CanvasSpectrum;

},{}],54:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var Analyzer = function () {
        function Analyzer() {
                _classCallCheck(this, Analyzer);

                this._ctx = new AudioContext();
                this._node = this._ctx.createScriptProcessor(2048, 1, 1);

                this._mid = this._ctx.createBiquadFilter();
                this._mid.type = "peaking";
                this._mid.frequency.value = 350;
                this._mid.gain.value = 0;

                this._bass = this._ctx.createBiquadFilter();
                this._bass.type = "lowshelf";
                this._bass.frequency.value = 200;
                this._bass.gain.value = 0;

                this._treble = this._ctx.createBiquadFilter();
                this._treble.type = "highshelf";
                this._treble.frequency.value = 3000;
                this._treble.gain.value = 0;

                this._analyzer = this._ctx.createAnalyser();
                this._analyzer.smoothingTimeConstant = 0.5;
                this._analyzer.fftSize = 1024;

                this._bands = new Uint8Array(this._analyzer.frequencyBinCount);

                this._cfg = {
                        MAX_GAIN: 3,
                        MIN_GAIN: -3,
                        MAX_TREBLE_VALUE: 6000,
                        MAX_BASS_VALUE: 400,
                        MAX_MID_VALUE: 700
                };

                window.SC.initialize({
                        client_id: '94b8a7e5efe62b01c8ca3f03cc3ccca8'
                });
        }

        _createClass(Analyzer, [{
                key: "filterValues",
                value: function filterValues(filter) {
                        // KEK (:
                        var title = filter.title === 'BASS' ? '_bass' : filter.title === 'MID' ? '_mid' : '_treble';

                        this[title][filter.type].value = filter.type === 'frequency' ? filter.ratio * this._cfg["MAX_" + filter.title + "_VALUE"] : -1 * (3 + 3 * (filter.ratio * -3) / (3 / 2));
                }
        }, {
                key: "_initSource",
                value: function _initSource(input, updateHandler) {
                        var _this = this;

                        this.audio = input;

                        if (!this._source) {
                                this._source = this._ctx.createMediaElementSource(this.audio);
                        }

                        this._source.connect(this._bass);
                        this._bass.connect(this._mid);
                        this._mid.connect(this._treble);
                        this._treble.connect(this._analyzer);
                        this._analyzer.connect(this._node);
                        this._node.connect(this._ctx.destination);
                        this._analyzer.connect(this._ctx.destination);

                        this._node.onaudioprocess = function () {
                                if (!_this.audio.paused) {
                                        _this._analyzer.getByteFrequencyData(_this._bands);

                                        updateHandler(_this._bands);
                                }
                        };
                }
        }]);

        return Analyzer;
}();

module.exports = Analyzer;

},{}],55:[function(require,module,exports){
"use strict";

exports.getCoords = function (elem) {
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docElem = document.documentElement;

    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return {
        top: Math.round(top),
        left: Math.round(left)
    };
};

},{}],56:[function(require,module,exports){
'use strict';

var url = require('url');

exports.formatMStoS = function (ms) {
    var num = ms / 1000,
        result = void 0;

    if (num < 60) {
        result = num < 10 ? '0:0' + parseInt(num) : '0:' + parseInt(num);
    } else if (num > 60) {
        var div = parseInt(num / 60),
            dif = parseInt(num) - 60 * div,
            mins = div < 10 ? '0' + div : num,
            secs = dif < 10 ? '0' + dif : dif;

        result = mins + ':' + secs;
    }

    return result;
};

exports.formatCover = function (coverUri) {
    var size = arguments.length <= 1 || arguments[1] === undefined ? 't300x300' : arguments[1];
    var format = arguments.length <= 2 || arguments[2] === undefined ? '.png' : arguments[2];

    var _url$parse = url.parse(coverUri);

    var host = _url$parse.host;
    var protocol = _url$parse.protocol;
    var pathname = _url$parse.pathname;
    var search = _url$parse.search;


    return protocol + '//' + host + pathname.split('.')[0].split('-').slice(0, -1).join('-') + '-' + size + format + (search || '');
};

exports.formatTitle = function (title) {
    var lim = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];

    return title.length >= lim ? title.substr(0, lim - 3) + '...' : title;
};

exports.shuffle = function (arr) {
    var a = arr.slice(),
        j = void 0,
        x = void 0,
        i = void 0;

    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
};

exports.normalizeIndices = function (arr) {
    var i = void 0;

    for (i = 0; i < arr.length; i++) {
        arr[i].index = i;
    }

    return arr;
};

},{"url":"url"}],57:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require('../reducers/store');

var getState = _require.getState;
var dispatch = _require.dispatch;

var _require2 = require('../actions/playlistActions');

var updateFavoriteTracks = _require2.updateFavoriteTracks;
var playerAPI = require('./playerAPI');
var LocalStore = function () {
    function LocalStore() {
        _classCallCheck(this, LocalStore);

        this.store = window.localStorage;

        this._value = 'rrsap16';

        if (!this.store[this._value]) {
            this.store[this._value] = '';
        }
    }

    _createClass(LocalStore, [{
        key: 'add',
        value: function add(track) {
            if (this.store[this._value].indexOf(track.id) >= 0) {
                this.remove(track);
                return;
            }

            if (!this.store[this._value].length) {
                this.store[this._value] += track.id;
                return;
            }

            this.store[this._value] += ',' + track.id;
        }
    }, {
        key: 'includes',
        value: function includes(id) {
            return this.store[this._value].split(',').includes(id.toString());
        }
    }, {
        key: 'remove',
        value: function remove(track) {
            if (this.store[this._value].indexOf(track.id) < 0) return;

            this.store[this._value] = this.store[this._value].split(',').filter(function (trackId) {
                return trackId !== track.id.toString();
            }).join(',');
        }
    }, {
        key: 'length',
        get: function get() {
            var arr = this.store[this._value].split(',');

            if (arr[0] === '') {
                return 0;
            }

            return arr.length;
        }
    }]);

    return LocalStore;
}();

var store = new LocalStore();

module.exports = store;

},{"../actions/playlistActions":4,"../reducers/store":51,"./playerAPI":58}],58:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var soundcloud = require('soundcloud');
var Analyzer = require('./WebAudioAnalyzer');
var CanvasSpectrum = require('./CanvasSpectrum');

var _require = require('../reducers/store');

var getState = _require.getState;
var dispatch = _require.dispatch;

var _require2 = require('../actions/playerActions');

var changeCurrentTime = _require2.changeCurrentTime;
var changeTrack = _require2.changeTrack;
var toggleTrack = _require2.toggleTrack;
var playTrack = _require2.playTrack;
var toggleRepeatTrack = _require2.toggleRepeatTrack;

var _require3 = require('../actions/dataActions');

var updateData = _require3.updateData;

var _require4 = require('../utils/trackUtils');

var getCurrentTrackObject = _require4.getCurrentTrackObject;
var getFirstTrack = _require4.getFirstTrack;

var _require5 = require('../constants/playerConstants');

var NEXT_TRACK = _require5.NEXT_TRACK;
var PREV_TRACK = _require5.PREV_TRACK;

var PlayerAPI = function () {
    function PlayerAPI() {
        var _this = this;

        var clientId = arguments.length <= 0 || arguments[0] === undefined ? '94b8a7e5efe62b01c8ca3f03cc3ccca8' : arguments[0];

        _classCallCheck(this, PlayerAPI);

        this.audio = new Audio();
        this.audio.crossOrigin = "anonymous";

        this.clientId = clientId;

        window.SC.initialize({
            client_id: this.clientId
        });

        this.audioAnalyzer = new Analyzer();
        this.canvasSpectrum = new CanvasSpectrum(document.getElementById('canvas'));
        this.nextHref = null;
        this.repeat = false;

        this.audio.addEventListener('ended', function () {
            return _this.audioOnFinish();
        });
        this.audio.addEventListener('timeupdate', function () {
            return _this.audioOnTimeUpdate();
        });
        this.audio.addEventListener('canplaythrough', function () {
            return _this.audioOnCanPlayThrough();
        });
    }

    _createClass(PlayerAPI, [{
        key: 'findTracks',
        value: function findTracks(searchString) {
            this.nextHref = null;

            return soundcloud.get('/tracks', PlayerAPI.createQueryObject(searchString, false));
        }
    }, {
        key: 'filterValues',
        value: function filterValues(filter) {
            this.audioAnalyzer.filterValues(filter);
        }
    }, {
        key: 'toggleRepeat',
        value: function toggleRepeat() {
            dispatch(toggleRepeatTrack());
            this.repeat = this.repeat ? false : true;
        }
    }, {
        key: 'findPartialTracks',
        value: function findPartialTracks(searchString) {
            var _this2 = this;

            if (!this.nextHref) {
                return soundcloud.get('/tracks', PlayerAPI.createQueryObject(searchString, true)).then(function (result) {
                    _this2.nextHref = result.next_href;
                    return result;
                });
            }

            return soundcloud.get(this.nextHref).then(function (result) {
                _this2.nextHref = result.next_href;
                return result;
            });
        }
    }, {
        key: 'findTrackById',
        value: function findTrackById(id) {
            return soundcloud.get('/tracks/' + id);
        }
    }, {
        key: 'findTracksByIds',
        value: function findTracksByIds(ids) {
            return soundcloud.get('/tracks?ids=' + ids);
        }
    }, {
        key: 'loadTrack',
        value: function loadTrack(src) {
            this.audio.src = src + '?client_id=' + this.clientId;
        }
    }, {
        key: 'playNext',
        value: function playNext() {
            if (this.audio.src) {
                dispatch(changeTrack(NEXT_TRACK));
                this.play(getCurrentTrackObject().streamUrl);

                dispatch(updateData(getCurrentTrackObject()));
            }
        }
    }, {
        key: 'playPrev',
        value: function playPrev() {
            if (this.audio.src) {
                dispatch(changeTrack(PREV_TRACK));
                this.play(getCurrentTrackObject().streamUrl);

                dispatch(updateData(getCurrentTrackObject()));
            }
        }
    }, {
        key: 'play',
        value: function play(src) {
            if (this.audio.src === src) return;

            this.loadTrack(src);

            dispatch(toggleTrack(true));
            //
            // dispatch(updateData(getCurrentTrackObject()));

            this.audio.play();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.audio.pause();

            dispatch(toggleTrack(false));
        }
    }, {
        key: 'startOver',
        value: function startOver() {
            this.audio.play();

            dispatch(toggleTrack(true));
        }
    }, {
        key: 'setVolume',
        value: function setVolume(val) {
            this.audio.volume = val;
        }
    }, {
        key: 'playFirstTrack',
        value: function playFirstTrack() {
            var track = getFirstTrack();

            var _getState = getState();

            var ui = _getState.ui;
            var playlist = _getState.playlist;


            dispatch(playTrack(track.index));

            dispatch(updateData(Object.assign(track, {
                currentPlaylist: ui.currentTab,
                searchText: playlist.searchText
            })));

            this.play(track.streamUrl);
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (!this.audio.currentSrc) {
                this.playFirstTrack();
                return;
            }

            if (this.audio.paused) {
                this.startOver();
            } else {
                this.pause();
            }
        }
    }, {
        key: 'audioOnCanPlayThrough',
        value: function audioOnCanPlayThrough() {
            this.audioAnalyzer._initSource(this.audio, this.canvasSpectrum.update.bind(this.canvasSpectrum));
        }
    }, {
        key: 'audioOnTimeUpdate',
        value: function audioOnTimeUpdate() {
            var time = this.currentTime;

            dispatch(changeCurrentTime(time));
        }
    }, {
        key: 'audioOnFinish',
        value: function audioOnFinish() {
            var _this3 = this;

            if (this.repeat) {
                setTimeout(function () {
                    dispatch(changeCurrentTime(0));
                    _this3.currentTime = 0;
                    _this3.startOver();
                }, 500);

                return;
            }

            this.playNext();
        }
    }, {
        key: 'currentTime',
        get: function get() {
            return this.audio.currentTime * 1000;
        },
        set: function set(time) {
            this.audio.currentTime = time / 1000;
        }
    }], [{
        key: 'createQueryObject',
        value: function createQueryObject(searchString) {
            var partial = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

            var query = {
                q: searchString,
                limit: 200
            };

            return partial ? Object.assign(query, { linked_partitioning: 1 }) : query;
        }
    }]);

    return PlayerAPI;
}();

var playerAPI = new PlayerAPI();

module.exports = playerAPI;

},{"../actions/dataActions":1,"../actions/playerActions":3,"../constants/playerConstants":31,"../reducers/store":51,"../utils/trackUtils":59,"./CanvasSpectrum":53,"./WebAudioAnalyzer":54,"soundcloud":"soundcloud"}],59:[function(require,module,exports){
'use strict';

var _require = require('../reducers/store');

var getState = _require.getState;


exports.getCurrentTrackObject = function () {
    var state = getState(),
        index = state.player.currentTrackIndex,
        currentPlaylist = state.data.currentPlaylist || state.ui.currentTab;

    return state[currentPlaylist].tracks[index];
};

exports.getFirstTrack = function () {
    var state = getState(),
        currentPlaylist = state.ui.currentTab || state.data.currentPlaylist;

    return state[currentPlaylist].tracks[0];
};

},{"../reducers/store":51}],60:[function(require,module,exports){
'use strict';

var playerAPI = require('./playerAPI');

var _require = require('../reducers/store');

var dispatch = _require.dispatch;
var getState = _require.getState;
var favoritesActions = require('../actions/favoritesActions');
var playlistActions = require('../actions/playlistActions');

var _require2 = require('../actions/uiActions');

var changeCurrentTab = _require2.changeCurrentTab;
var localStore = require('./localStore');

var voiceCommands = {
    'switch': function _switch() {
        playerAPI.toggle();
    },
    'play next track': function playNextTrack() {
        playerAPI.playNext();
    },
    'play previous track': function playPreviousTrack() {
        playerAPI.playPrev();
    },
    'repeat track': function repeatTrack() {
        playerAPI.toggleRepeat();
    },
    'search for *track': function searchForTrack(track) {
        dispatch(playlistActions.changeSearchText(track));
    },
    'play playlist': function playPlaylist() {
        dispatch(changeCurrentTab('playlist'));
        playerAPI.playFirstTrack();
    },
    'play favorites': function playFavorites() {
        var _getState = getState();

        var favorites = _getState.favorites;


        if (favorites.amount > favorites.tracks.length) {
            dispatch(favoritesActions.fetchFavoritesStart());
            dispatch(changeCurrentTab('favorites'));
            playerAPI.findTracksByIds(localStore.store[localStore._value]).then(function (tracks) {
                dispatch(favoritesActions.updateFavorites(tracks));
                playerAPI.playFirstTrack();
            }).catch(function (error) {
                return favoritesActions.fetchFavoritesError(error);
            });
        } else {
            dispatch(changeCurrentTab('favorites'));
            playerAPI.playFirstTrack();
        }
    },
    'shuffle': function shuffle() {
        if (currentTab === 'playlist') {
            dispatch(playlistActions.shuffleTracks());
        } else {
            dispatch(favoritesActions.shuffleTracks());
        }
    }
};

module.exports = voiceCommands;

},{"../actions/favoritesActions":2,"../actions/playlistActions":4,"../actions/uiActions":5,"../reducers/store":51,"./localStore":57,"./playerAPI":58}],61:[function(require,module,exports){
//! annyang
//! version : 2.5.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) { // AMD + global
    define([], function () {
      return (root.annyang = factory(root));
    });
  } else if (typeof module === 'object' && module.exports) { // CommonJS
    module.exports = factory(root);
  } else { // Browser globals
    root.annyang = factory(root);
  }
}(typeof window !== 'undefined' ? window : this, function (root, undefined) {
  "use strict";

  /**
   * # Quick Tutorial, Intro and Demos
   *
   * The quickest way to get started is to visit the [annyang homepage](https://www.talater.com/annyang/).
   *
   * For a more in-depth look at annyang, read on.
   *
   * # API Reference
   */

  var annyang;

  // Get the SpeechRecognition object, while handling browser prefixes
  var SpeechRecognition = root.SpeechRecognition ||
                          root.webkitSpeechRecognition ||
                          root.mozSpeechRecognition ||
                          root.msSpeechRecognition ||
                          root.oSpeechRecognition;

  // Check browser support
  // This is done as early as possible, to make it as fast as possible for unsupported browsers
  if (!SpeechRecognition) {
    return null;
  }

  var commandsList = [];
  var recognition;
  var callbacks = { start: [], error: [], end: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] };
  var autoRestart;
  var lastStartedAt = 0;
  var autoRestartCount = 0;
  var debugState = false;
  var debugStyle = 'font-weight: bold; color: #00f;';
  var pauseListening = false;
  var isListening = false;

  // The command matching code is a modified version of Backbone.Router by Jeremy Ashkenas, under the MIT license.
  var optionalParam = /\s*\((.*?)\)\s*/g;
  var optionalRegex = /(\(\?:[^)]+\))\?/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#]/g;
  var commandToRegExp = function(command) {
    command = command.replace(escapeRegExp, '\\$&')
                  .replace(optionalParam, '(?:$1)?')
                  .replace(namedParam, function(match, optional) {
                    return optional ? match : '([^\\s]+)';
                  })
                  .replace(splatParam, '(.*?)')
                  .replace(optionalRegex, '\\s*$1?\\s*');
    return new RegExp('^' + command + '$', 'i');
  };

  // This method receives an array of callbacks to iterate over, and invokes each of them
  var invokeCallbacks = function(callbacks) {
    var args = Array.prototype.slice.call(arguments, 1);
    callbacks.forEach(function(callback) {
      callback.callback.apply(callback.context, args);
    });
  };

  var isInitialized = function() {
    return recognition !== undefined;
  };

  // method for logging in developer console when debug mode is on
  var logMessage = function(text, extraParameters) {
    if (text.indexOf('%c') === -1 && !extraParameters) {
      console.log(text);
    } else {
      extraParameters = extraParameters || debugStyle;
      console.log(text, extraParameters);
    }
  };

  var initIfNeeded = function() {
    if (!isInitialized()) {
      annyang.init({}, false);
    }
  };

  var registerCommand = function(command, cb, phrase) {
    commandsList.push({ command: command, callback: cb, originalPhrase: phrase });
    if (debugState) {
      logMessage('Command successfully loaded: %c'+phrase, debugStyle);
    }
  };

  var parseResults = function(results) {
    invokeCallbacks(callbacks.result, results);
    var commandText;
    // go over each of the 5 results and alternative results received (we've set maxAlternatives to 5 above)
    for (var i = 0; i<results.length; i++) {
      // the text recognized
      commandText = results[i].trim();
      if (debugState) {
        logMessage('Speech recognized: %c'+commandText, debugStyle);
      }

      // try and match recognized text to one of the commands on the list
      for (var j = 0, l = commandsList.length; j < l; j++) {
        var currentCommand = commandsList[j];
        var result = currentCommand.command.exec(commandText);
        if (result) {
          var parameters = result.slice(1);
          if (debugState) {
            logMessage('command matched: %c'+currentCommand.originalPhrase, debugStyle);
            if (parameters.length) {
              logMessage('with parameters', parameters);
            }
          }
          // execute the matched command
          currentCommand.callback.apply(this, parameters);
          invokeCallbacks(callbacks.resultMatch, commandText, currentCommand.originalPhrase, results);
          return;
        }
      }
    }
    invokeCallbacks(callbacks.resultNoMatch, results);
  };

  annyang = {

    /**
     * Initialize annyang with a list of commands to recognize.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello :name': helloFunction};
     * var commands2 = {'hi': helloFunction};
     *
     * // initialize annyang, overwriting any previously added commands
     * annyang.init(commands, true);
     * // adds an additional command without removing the previous commands
     * annyang.init(commands2, false);
     * ````
     * As of v1.1.0 it is no longer required to call init(). Just start() listening whenever you want, and addCommands() whenever, and as often as you like.
     *
     * @param {Object} commands - Commands that annyang should listen to
     * @param {boolean} [resetCommands=true] - Remove all commands before initializing?
     * @method init
     * @deprecated
     * @see [Commands Object](#commands-object)
     */
    init: function(commands, resetCommands) {

      // resetCommands defaults to true
      if (resetCommands === undefined) {
        resetCommands = true;
      } else {
        resetCommands = !!resetCommands;
      }

      // Abort previous instances of recognition already running
      if (recognition && recognition.abort) {
        recognition.abort();
      }

      // initiate SpeechRecognition
      recognition = new SpeechRecognition();

      // Set the max number of alternative transcripts to try and match with a command
      recognition.maxAlternatives = 5;

      // In HTTPS, turn off continuous mode for faster results.
      // In HTTP,  turn on  continuous mode for much slower results, but no repeating security notices
      recognition.continuous = root.location.protocol === 'http:';

      // Sets the language to the default 'en-US'. This can be changed with annyang.setLanguage()
      recognition.lang = 'en-US';

      recognition.onstart = function() {
        isListening = true;
        invokeCallbacks(callbacks.start);
      };

      recognition.onerror = function(event) {
        invokeCallbacks(callbacks.error, event);
        switch (event.error) {
        case 'network':
          invokeCallbacks(callbacks.errorNetwork, event);
          break;
        case 'not-allowed':
        case 'service-not-allowed':
          // if permission to use the mic is denied, turn off auto-restart
          autoRestart = false;
          // determine if permission was denied by user or automatically.
          if (new Date().getTime()-lastStartedAt < 200) {
            invokeCallbacks(callbacks.errorPermissionBlocked, event);
          } else {
            invokeCallbacks(callbacks.errorPermissionDenied, event);
          }
          break;
        }
      };

      recognition.onend = function() {
        isListening = false;
        invokeCallbacks(callbacks.end);
        // annyang will auto restart if it is closed automatically and not by user action.
        if (autoRestart) {
          // play nicely with the browser, and never restart annyang automatically more than once per second
          var timeSinceLastStart = new Date().getTime()-lastStartedAt;
          autoRestartCount += 1;
          if (autoRestartCount % 10 === 0) {
            if (debugState) {
              logMessage('Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips.');
            }
          }
          if (timeSinceLastStart < 1000) {
            setTimeout(function() {
              annyang.start({ paused: pauseListening });
            }, 1000-timeSinceLastStart);
          } else {
            annyang.start({ paused: pauseListening });
          }
        }
      };

      recognition.onresult = function(event) {
        if(pauseListening) {
          if (debugState) {
            logMessage('Speech heard, but annyang is paused');
          }
          return false;
        }

        // Map the results to an array
        var SpeechRecognitionResult = event.results[event.resultIndex];
        var results = [];
        for (var k = 0; k<SpeechRecognitionResult.length; k++) {
          results[k] = SpeechRecognitionResult[k].transcript;
        }

        parseResults(results);
      };

      // build commands list
      if (resetCommands) {
        commandsList = [];
      }
      if (commands.length) {
        this.addCommands(commands);
      }
    },

    /**
     * Start listening.
     * It's a good idea to call this after adding some commands first, but not mandatory.
     *
     * Receives an optional options object which supports the following options:
     *
     * - `autoRestart`  (boolean, default: true) Should annyang restart itself if it is closed indirectly, because of silence or window conflicts?
     * - `continuous`   (boolean) Allow forcing continuous mode on or off. Annyang is pretty smart about this, so only set this if you know what you're doing.
     * - `paused`       (boolean, default: true) Start annyang in paused mode.
     *
     * #### Examples:
     * ````javascript
     * // Start listening, don't restart automatically
     * annyang.start({ autoRestart: false });
     * // Start listening, don't restart automatically, stop recognition after first phrase recognized
     * annyang.start({ autoRestart: false, continuous: false });
     * ````
     * @param {Object} [options] - Optional options.
     * @method start
     */
    start: function(options) {
      initIfNeeded();
      options = options || {};
      if (options.paused !== undefined) {
        pauseListening = !!options.paused;
      } else {
        pauseListening = false;
      }
      if (options.autoRestart !== undefined) {
        autoRestart = !!options.autoRestart;
      } else {
        autoRestart = true;
      }
      if (options.continuous !== undefined) {
        recognition.continuous = !!options.continuous;
      }

      lastStartedAt = new Date().getTime();
      try {
        recognition.start();
      } catch(e) {
        if (debugState) {
          logMessage(e.message);
        }
      }
    },

    /**
     * Stop listening, and turn off mic.
     *
     * Alternatively, to only temporarily pause annyang responding to commands without stopping the SpeechRecognition engine or closing the mic, use pause() instead.
     * @see [pause()](#pause)
     *
     * @method abort
     */
    abort: function() {
      autoRestart = false;
      autoRestartCount = 0;
      if (isInitialized()) {
        recognition.abort();
      }
    },

    /**
     * Pause listening. annyang will stop responding to commands (until the resume or start methods are called), without turning off the browser's SpeechRecognition engine or the mic.
     *
     * Alternatively, to stop the SpeechRecognition engine and close the mic, use abort() instead.
     * @see [abort()](#abort)
     *
     * @method pause
     */
    pause: function() {
      pauseListening = true;
    },

    /**
     * Resumes listening and restores command callback execution when a result matches.
     * If SpeechRecognition was aborted (stopped), start it.
     *
     * @method resume
     */
    resume: function() {
      annyang.start();
    },

    /**
     * Turn on output of debug messages to the console. Ugly, but super-handy!
     *
     * @param {boolean} [newState=true] - Turn on/off debug messages
     * @method debug
     */
    debug: function(newState) {
      if (arguments.length > 0) {
        debugState = !!newState;
      } else {
        debugState = true;
      }
    },

    /**
     * Set the language the user will speak in. If this method is not called, defaults to 'en-US'.
     *
     * @param {String} language - The language (locale)
     * @method setLanguage
     * @see [Languages](https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported)
     */
    setLanguage: function(language) {
      initIfNeeded();
      recognition.lang = language;
    },

    /**
     * Add commands that annyang will respond to. Similar in syntax to init(), but doesn't remove existing commands.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello :name': helloFunction, 'howdy': helloFunction};
     * var commands2 = {'hi': helloFunction};
     *
     * annyang.addCommands(commands);
     * annyang.addCommands(commands2);
     * // annyang will now listen to all three commands
     * ````
     *
     * @param {Object} commands - Commands that annyang should listen to
     * @method addCommands
     * @see [Commands Object](#commands-object)
     */
    addCommands: function(commands) {
      var cb;

      initIfNeeded();

      for (var phrase in commands) {
        if (commands.hasOwnProperty(phrase)) {
          cb = root[commands[phrase]] || commands[phrase];
          if (typeof cb === 'function') {
            // convert command to regex then register the command
            registerCommand(commandToRegExp(phrase), cb, phrase);
          } else if (typeof cb === 'object' && cb.regexp instanceof RegExp) {
            // register the command
            registerCommand(new RegExp(cb.regexp.source, 'i'), cb.callback, phrase);
          } else {
            if (debugState) {
              logMessage('Can not register command: %c'+phrase, debugStyle);
            }
            continue;
          }
        }
      }
    },

    /**
     * Remove existing commands. Called with a single phrase, array of phrases, or methodically. Pass no params to remove all commands.
     *
     * #### Examples:
     * ````javascript
     * var commands = {'hello': helloFunction, 'howdy': helloFunction, 'hi': helloFunction};
     *
     * // Remove all existing commands
     * annyang.removeCommands();
     *
     * // Add some commands
     * annyang.addCommands(commands);
     *
     * // Don't respond to hello
     * annyang.removeCommands('hello');
     *
     * // Don't respond to howdy or hi
     * annyang.removeCommands(['howdy', 'hi']);
     * ````
     * @param {String|Array|Undefined} [commandsToRemove] - Commands to remove
     * @method removeCommands
     */
    removeCommands: function(commandsToRemove) {
      if (commandsToRemove === undefined) {
        commandsList = [];
        return;
      }
      commandsToRemove = Array.isArray(commandsToRemove) ? commandsToRemove : [commandsToRemove];
      commandsList = commandsList.filter(function(command) {
        for (var i = 0; i<commandsToRemove.length; i++) {
          if (commandsToRemove[i] === command.originalPhrase) {
            return false;
          }
        }
        return true;
      });
    },

    /**
     * Add a callback function to be called in case one of the following events happens:
     *
     * * `start` - Fired as soon as the browser's Speech Recognition engine starts listening
     * * `error` - Fired when the browser's Speech Recogntion engine returns an error, this generic error callback will be followed by more accurate error callbacks (both will fire if both are defined)
     *     Callback function will be called with the error event as the first argument
     * * `errorNetwork` - Fired when Speech Recognition fails because of a network error
     *     Callback function will be called with the error event as the first argument
     * * `errorPermissionBlocked` - Fired when the browser blocks the permission request to use Speech Recognition.
     *     Callback function will be called with the error event as the first argument
     * * `errorPermissionDenied` - Fired when the user blocks the permission request to use Speech Recognition.
     *     Callback function will be called with the error event as the first argument
     * * `end` - Fired when the browser's Speech Recognition engine stops
     * * `result` - Fired as soon as some speech was identified. This generic callback will be followed by either the `resultMatch` or `resultNoMatch` callbacks.
     *     Callback functions for to this event will be called with an array of possible phrases the user said as the first argument
     * * `resultMatch` - Fired when annyang was able to match between what the user said and a registered command
     *     Callback functions for this event will be called with three arguments in the following order:
     *       * The phrase the user said that matched a command
     *       * The command that was matched
     *       * An array of possible alternative phrases the user might have said
     * * `resultNoMatch` - Fired when what the user said didn't match any of the registered commands.
     *     Callback functions for this event will be called with an array of possible phrases the user might've said as the first argument
     *
     * #### Examples:
     * ````javascript
     * annyang.addCallback('error', function() {
     *   $('.myErrorText').text('There was an error!');
     * });
     *
     * annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
     *   console.log(userSaid); // sample output: 'hello'
     *   console.log(commandText); // sample output: 'hello (there)'
     *   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
     * });
     *
     * // pass local context to a global function called notConnected
     * annyang.addCallback('errorNetwork', notConnected, this);
     * ````
     * @param {String} type - Name of event that will trigger this callback
     * @param {Function} callback - The function to call when event is triggered
     * @param {Object} [context] - Optional context for the callback function
     * @method addCallback
     */
    addCallback: function(type, callback, context) {
      if (callbacks[type]  === undefined) {
        return;
      }
      var cb = root[callback] || callback;
      if (typeof cb !== 'function') {
        return;
      }
      callbacks[type].push({callback: cb, context: context || this});
    },

    /**
     * Remove callbacks from events.
     *
     * - Pass an event name and a callback command to remove that callback command from that event type.
     * - Pass just an event name to remove all callback commands from that event type.
     * - Pass undefined as event name and a callback command to remove that callback command from all event types.
     * - Pass no params to remove all callback commands from all event types.
     *
     * #### Examples:
     * ````javascript
     * annyang.addCallback('start', myFunction1);
     * annyang.addCallback('start', myFunction2);
     * annyang.addCallback('end', myFunction1);
     * annyang.addCallback('end', myFunction2);
     *
     * // Remove all callbacks from all events:
     * annyang.removeCallback();
     *
     * // Remove all callbacks attached to end event:
     * annyang.removeCallback('end');
     *
     * // Remove myFunction2 from being called on start:
     * annyang.removeCallback('start', myFunction2);
     *
     * // Remove myFunction1 from being called on all events:
     * annyang.removeCallback(undefined, myFunction1);
     * ````
     *
     * @param type Name of event type to remove callback from
     * @param callback The callback function to remove
     * @returns undefined
     * @method removeCallback
     */
    removeCallback: function(type, callback) {
      var compareWithCallbackParameter = function(cb) {
        return cb.callback !== callback;
      };
      // Go over each callback type in callbacks store object
      for (var callbackType in callbacks) {
        if (callbacks.hasOwnProperty(callbackType)) {
          // if this is the type user asked to delete, or he asked to delete all, go ahead.
          if (type === undefined || type === callbackType) {
            // If user asked to delete all callbacks in this type or all types
            if (callback === undefined) {
                callbacks[callbackType] = [];
              } else {
                // Remove all matching callbacks
                callbacks[callbackType] = callbacks[callbackType].filter(compareWithCallbackParameter);
            }
          }
        }
      }
    },

    /**
     * Returns true if speech recognition is currently on.
     * Returns false if speech recognition is off or annyang is paused.
     *
     * @return boolean true = SpeechRecognition is on and annyang is listening
     * @method isListening
     */
    isListening: function() {
      return isListening && !pauseListening;
    },

    /**
     * Returns the instance of the browser's SpeechRecognition object used by annyang.
     * Useful in case you want direct access to the browser's Speech Recognition engine.
     *
     * @returns SpeechRecognition The browser's Speech Recognizer currently used by annyang
     * @method getSpeechRecognizer
     */
    getSpeechRecognizer: function() {
      return recognition;
    },

    /**
     * Simulate speech being recognized. This will trigger the same events and behavior as when the Speech Recognition
     * detects speech.
     *
     * Can accept either a string containing a single sentence, or an array containing multiple sentences to be checked
     * in order until one of them matches a command (similar to the way Speech Recognition Alternatives are parsed)
     *
     * #### Examples:
     * ````javascript
     * annyang.trigger('Time for some thrilling heroics');
     * annyang.trigger(
     *     ['Time for some thrilling heroics', 'Time for some thrilling aerobics']
     *   );
     * ````
     *
     * @param string|array sentences A sentence as a string or an array of strings of possible sentences
     * @returns undefined
     * @method trigger
     */
    trigger: function(sentences) {
      if(!annyang.isListening()) {
        if (debugState) {
          if (!isListening) {
            logMessage('Cannot trigger while annyang is aborted');
          } else {
            logMessage('Speech heard, but annyang is paused');
          }
        }
        return;
      }

      if (!Array.isArray(sentences)) {
        sentences = [sentences];
      }

      parseResults(sentences);
    }
  };

  return annyang;

}));

/**
 * # Good to Know
 *
 * ## Commands Object
 *
 * Both the [init()]() and addCommands() methods receive a `commands` object.
 *
 * annyang understands commands with `named variables`, `splats`, and `optional words`.
 *
 * * Use `named variables` for one word arguments in your command.
 * * Use `splats` to capture multi-word text at the end of your command (greedy).
 * * Use `optional words` or phrases to define a part of the command as optional.
 *
 * #### Examples:
 * ````html
 * <script>
 * var commands = {
 *   // annyang will capture anything after a splat (*) and pass it to the function.
 *   // e.g. saying "Show me Batman and Robin" will call showFlickr('Batman and Robin');
 *   'show me *tag': showFlickr,
 *
 *   // A named variable is a one word variable, that can fit anywhere in your command.
 *   // e.g. saying "calculate October stats" will call calculateStats('October');
 *   'calculate :month stats': calculateStats,
 *
 *   // By defining a part of the following command as optional, annyang will respond
 *   // to both: "say hello to my little friend" as well as "say hello friend"
 *   'say hello (to my little) friend': greeting
 * };
 *
 * var showFlickr = function(tag) {
 *   var url = 'http://api.flickr.com/services/rest/?tags='+tag;
 *   $.getJSON(url);
 * }
 *
 * var calculateStats = function(month) {
 *   $('#stats').text('Statistics for '+month);
 * }
 *
 * var greeting = function() {
 *   $('#greeting').text('Hello!');
 * }
 * </script>
 * ````
 *
 * ### Using Regular Expressions in commands
 * For advanced commands, you can pass a regular expression object, instead of
 * a simple string command.
 *
 * This is done by passing an object containing two properties: `regexp`, and
 * `callback` instead of the function.
 *
 * #### Examples:
 * ````javascript
 * var calculateFunction = function(month) { console.log(month); }
 * var commands = {
 *   // This example will accept any word as the "month"
 *   'calculate :month stats': calculateFunction,
 *   // This example will only accept months which are at the start of a quarter
 *   'calculate :quarter stats': {'regexp': /^calculate (January|April|July|October) stats$/, 'callback': calculateFunction}
 * }
 ````
 *
 */

},{}],62:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};
var pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};
var formatTime = function formatTime(time) {
  return "@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use the new performance api to get better precision if available
var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

/**
 * parse the level option of createLogger
 *
 * @property {string | function | object} level - console[level]
 * @property {object} action
 * @property {array} payload
 * @property {string} type
 */

function getLogLevel(level, action, payload, type) {
  switch (typeof level === "undefined" ? "undefined" : _typeof(level)) {
    case "object":
      return typeof level[type] === "function" ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case "function":
      return level(action);
    default:
      return level;
  }
}

/**
 * Creates logger with followed options
 *
 * @namespace
 * @property {object} options - options for logger
 * @property {string | function | object} options.level - console[level]
 * @property {boolean} options.duration - print duration of each action?
 * @property {boolean} options.timestamp - print timestamp with each action?
 * @property {object} options.colors - custom colors
 * @property {object} options.logger - implementation of the `console` API
 * @property {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @property {boolean} options.collapsed - is group collapsed?
 * @property {boolean} options.predicate - condition which resolves logger behavior
 * @property {function} options.stateTransformer - transform state before print
 * @property {function} options.actionTransformer - transform action before print
 * @property {function} options.errorTransformer - transform error before print
 */

function createLogger() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var _options$level = options.level;
  var level = _options$level === undefined ? "log" : _options$level;
  var _options$logger = options.logger;
  var logger = _options$logger === undefined ? console : _options$logger;
  var _options$logErrors = options.logErrors;
  var logErrors = _options$logErrors === undefined ? true : _options$logErrors;
  var collapsed = options.collapsed;
  var predicate = options.predicate;
  var _options$duration = options.duration;
  var duration = _options$duration === undefined ? false : _options$duration;
  var _options$timestamp = options.timestamp;
  var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
  var transformer = options.transformer;
  var _options$stateTransfo = options.stateTransformer;
  var // deprecated
  stateTransformer = _options$stateTransfo === undefined ? function (state) {
    return state;
  } : _options$stateTransfo;
  var _options$actionTransf = options.actionTransformer;
  var actionTransformer = _options$actionTransf === undefined ? function (actn) {
    return actn;
  } : _options$actionTransf;
  var _options$errorTransfo = options.errorTransformer;
  var errorTransformer = _options$errorTransfo === undefined ? function (error) {
    return error;
  } : _options$errorTransfo;
  var _options$colors = options.colors;
  var colors = _options$colors === undefined ? {
    title: function title() {
      return "#000000";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  } : _options$colors;

  // exit if console undefined

  if (typeof logger === "undefined") {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  if (transformer) {
    console.error("Option 'transformer' is deprecated, use stateTransformer instead");
  }

  var logBuffer = [];
  function printBuffer() {
    logBuffer.forEach(function (logEntry, key) {
      var started = logEntry.started;
      var startedTime = logEntry.startedTime;
      var action = logEntry.action;
      var prevState = logEntry.prevState;
      var error = logEntry.error;
      var took = logEntry.took;
      var nextState = logEntry.nextState;

      var nextEntry = logBuffer[key + 1];
      if (nextEntry) {
        nextState = nextEntry.prevState;
        took = nextEntry.started - started;
      }
      // message
      var formattedAction = actionTransformer(action);
      var isCollapsed = typeof collapsed === "function" ? collapsed(function () {
        return nextState;
      }, action) : collapsed;

      var formattedTime = formatTime(startedTime);
      var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
      var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");

      // render
      try {
        if (isCollapsed) {
          if (colors.title) logger.groupCollapsed("%c " + title, titleCSS);else logger.groupCollapsed(title);
        } else {
          if (colors.title) logger.group("%c " + title, titleCSS);else logger.group(title);
        }
      } catch (e) {
        logger.log(title);
      }

      var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
      var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
      var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
      var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");

      if (prevStateLevel) {
        if (colors.prevState) logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);else logger[prevStateLevel]("prev state", prevState);
      }

      if (actionLevel) {
        if (colors.action) logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);else logger[actionLevel]("action", formattedAction);
      }

      if (error && errorLevel) {
        if (colors.error) logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);else logger[errorLevel]("error", error);
      }

      if (nextStateLevel) {
        if (colors.nextState) logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);else logger[nextStateLevel]("next state", nextState);
      }

      try {
        logger.groupEnd();
      } catch (e) {
        logger.log("—— log end ——");
      }
    });
    logBuffer.length = 0;
  }

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // exit early if predicate function returns false
        if (typeof predicate === "function" && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};
        logBuffer.push(logEntry);

        logEntry.started = timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = undefined;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        printBuffer();

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

module.exports = createLogger;
},{}],63:[function(require,module,exports){
'use strict';

exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch;
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;
},{}]},{},[43]);
