const React = require('react'),
      getCoords = require('../../utils/dom').getCoords,
      VerticalSliderItem = require('./VerticalSliderItem');

class VerticalSlider extends React.Component {

  constructor(props) {
    super(props);

    this.sliderOnOwnClick = this.sliderOnOwnClick.bind(this);
    this.thumbOnOwnMouseMove = this.thumbOnOwnMouseMove.bind(this);
  }

  componentDidMount() {
    this.sliderHeight = this.slider.offsetHeight;
    this.thumbHeight = this.thumb.offsetHeight;
    this._cfg = {
      MIN: 0,
      MAX: this.slider.offsetHeight - this.thumb.offsetHeight
    };

    let thumbTop = (this.props.initVal - 1) * this._cfg.MAX;

    this.thumb.style.top = thumbTop + 'px';
    this.counter.style.height = this._cfg.MAX - thumbTop + this.thumbHeight / 2 + 'px';
  }

  thumbOnOwnMouseMove(e) {
    let thumbOnMouseMove = this.props.thumbOnMouseMove,
      shiftY = e.pageY - getCoords(this.thumb).top;

    document.onmousemove = (e) => {
      let move = e.pageY - getCoords(this.slider).top - shiftY,
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

      thumbOnMouseMove(ratio);

      document.onmouseup = (e) => {
        document.onmousemove = document.onmouseup = null;
      };

    };
  }

  sliderOnOwnClick(e) {
    if (e.target == this.thumb) return;

    let sliderOnClick = this.props.sliderOnClick,
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

  render() {
    let {title} = this.props,
      titleElem;

    if (title) {
      titleElem = (
        <div className="vertical-slider-wrapper__title-wrapper">
          { title }
        </div>
      )
    }

    return (
      <div className="vertical-slider-wrapper">
        <div className="vertical-slider-wrapper__slider-wrapper">
          <div className="vertical-slider"
               onClick={this.sliderOnOwnClick}
               ref={(s) => this.slider = s}>
            <div
              className="vertical-slider__thumb"
              onMouseDown={this.thumbOnOwnMouseMove}
              ref={(th) => this.thumb = th}>
            </div>
            <div className="vertical-slider__timeCounter"
                 ref={(c) => this.counter = c}>
            </div>
          </div>
        </div>
        { titleElem }
      </div>
    );
  }

  static propTypes = {
    title: React.PropTypes.string,
    sliderOnClick: React.PropTypes.func.isRequired,
    thumbOnMouseMove: React.PropTypes.func.isRequired,
    initVal: React.PropTypes.number.isRequired

  }
}

module.exports = VerticalSlider;