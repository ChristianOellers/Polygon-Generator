class PolygonA {
  constructor(props) {
    this.stage = props.stage; // Class: Stage
    this.view = props.view; // Class: View
    this.x = props.x;
    this.y = props.y;

    // Private
    this.radius = 100;
    this.points = [];
  }

  draw() {
    const steps = 6 * 2; // N° per step
    const stepsLoop = 1 * steps - 1; // 2 * steps-1

    let radiusFactorIncrease = 0.25;
    let radiusFactor = 1;
    let rndA = 1;
    let rndB = 1;

    for (let i = 0; i <= stepsLoop; i++) {
      let angleDeg = (360 / steps) * i;
      let angleRad = (angleDeg * Math.PI) / 180;

      rndA = 1 + Math.random() * 1;
      rndB = 1 + Math.random() * 1;
      radiusFactor = 0.5 + radiusFactor * Math.random();
      radiusFactor = radiusFactor + radiusFactorIncrease * (i / steps) * rndA;

      this.drawStep(angleRad, radiusFactor);
    }

    this.drawStepLines();
  }

  drawStep(angleRad, radiusFactor) {
    const ctx = this.view.ctx;
    const centerX = this.x;
    const centerY = this.y;
    const radius = this.radius * radiusFactor;

    let x = radius * Math.sin(angleRad);
    let y = radius * -Math.cos(angleRad);

    this.points.push([x, y]);
    this.drawPoint(centerX, centerY, 2);

    ctx.save();
    ctx.translate(centerX, centerY);
    this.drawPoint(x, y, 1);
    ctx.restore();
  }

  drawStepLines() {
    const points = this.points;
    const ctx = this.view.ctx;
    const centerX = this.x;
    const centerY = this.y;

    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 255, 0.05)';
    ctx.strokeStyle = 'rgba(0, 0, 255, 1)';
    ctx.lineWidth = 1;

    ctx.translate(centerX, centerY);
    ctx.moveTo(points[0][0], points[0][1]);
    ctx.beginPath();

    points.forEach((point, _index) => {
      ctx.lineTo(point[0], point[1]);
    });

    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  drawPoint(x, y, sizeFactor) {
    const ctx = this.view.ctx;
    const size = 4 * sizeFactor;

    ctx.fillRect(x - size / 2, y - size / 2, size, size);
  }
}
