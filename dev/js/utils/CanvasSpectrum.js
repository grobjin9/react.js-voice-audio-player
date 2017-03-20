class CanvasSpectrum {

  _initCanvas(canvas) {
    if (!canvas) {
      throw new TypeError("Failed to execute '_initCanvas()': at least 1 argument required")
    }

    this.canvas = canvas;
    this._context = canvas.getContext('2d');

    this._context.lineWidth = 4;

    this._gradStyle = CanvasSpectrum.createLinearGradient(this._context);
  }

  draw(arr) {
    this.clear();

    this._context.strokeStyle = this._gradStyle();

    this._context.beginPath();

    for (let i = 0; i < arr.length; i++) {
      let y = arr[i] / 128 * this.canvas.height / 2;

      if (i === 0) {
        this._context.moveTo(0, y / 2)
      } else {
        this._context.lineTo(i + 2, y / 2);
      }
    }

    this._context.stroke();
    this._context.closePath();
  }

  clear() {
    this._context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  update(arr) {
    this.draw(arr);
  }

  static createLinearGradient(context) {
    let grad = context.createLinearGradient(0, 0, context.canvas.width, 0),
      prevColorPattern = 'rgba(60, 210, 206, .3)';

    return function () {
      let color1 = parseInt(Math.random() * 255),
        color2 = parseInt(Math.random() * 255),
        color3 = parseInt(Math.random() * 255);

      let nextColorPattern = `rgb(${color1}, ${color2}, ${color3})`;

      grad.addColorStop(1, prevColorPattern);
      grad.addColorStop(0, nextColorPattern);

      return grad;
    }
  }

}

module.exports = CanvasSpectrum;