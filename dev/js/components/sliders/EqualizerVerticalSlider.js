const React = require('react'),
      VerticalSliderItem = require('./VerticalSliderItem');

class EqualizerVerticalSlider extends React.Component {
  render() {
    let {handler, data, len} = this.props,
      items = data.types.map(item => (
        <VerticalSliderItem key={item} handler={handler} initVal={1.5} type={item} title={data.title}/>
      ));

    return (
      <div className="vertical-slider-wrapper" style={{width: parseInt(100 / len) + '%'}}>
        {items}
        <div className="vertical-slider-wrapper__title-wrapper">
          { data.title }
        </div>
      </div>
    );
  }

  static propTypes = {
    handler: React.PropTypes.func.isRequired,
    data: React.PropTypes.object.isRequired,
    len: React.PropTypes.number.isRequired
  }
}

module.exports = EqualizerVerticalSlider;