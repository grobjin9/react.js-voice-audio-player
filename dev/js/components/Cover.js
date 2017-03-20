const React = require('react'),
      ReactDOM = require('react-dom'),
      Spinner = require('react-spinner');

class Cover extends React.Component {

  render() {
    let {src, coverOnLoad, loading} = this.props;

    let spinnerStyle = {
      width: 30,
      height: 30,
      display: loading ? 'block' : 'none'
    };

    return (
      <div className="artwork">
        <img key={src} onLoad={coverOnLoad} src={src} className="artwork__img"/>
        <Spinner style={spinnerStyle}/>
      </div>
    );
  }

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    coverOnLoad: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool
  }
}

module.exports = Cover;