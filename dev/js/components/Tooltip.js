const React = require('react');

class Tooltip extends React.Component {
  render() {
    let {visible, title, size, children} = this.props,
      sizeClass;

    if (size === 'm') {
      sizeClass = '--medium';
    } else if (size === 's') {
      sizeClass = '--small';
    } else {
      sizeClass = '--medium';
    }

    let titleElem = (
      <div className='player-tooltip__title'>
        <span className={'player-tooltip__title' + sizeClass}>{title}</span>
      </div>
    );

    return (
      <div className={'player-tooltip player-tooltip' + sizeClass}
           style={{opacity: (visible ? '1' : '0'), visibility: (visible ? 'visible' : 'hidden')}}>
        <div className="player-tooltip_slider" style={{width: children.length > 1 ? children.length * 30 : ''}}>
          {(this.props.children ? this.props.children : '')}
        </div>
        {title ? titleElem : ''}
      </div>
    )
  }

  static propTypes = {
    visible: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string,
    size: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
  }
}

module.exports = Tooltip;
