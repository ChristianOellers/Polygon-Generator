class PolygonB {
  constructor(props) {
    this.stage = props.stage; // Class: Stage
    this.view = props.view; // Class: View
    this.x = props.x;
    this.y = props.y;

    // Private
    this.radius = 50;
    this.points = [];
  }

  draw() {
    const steps = 8 * 4; // N° per step
    const stepsLoop = 1 * steps - 1; // 2 * steps-1;

    let radiusFactor = 1;
    let rndA = 1 + Math.random() * 1;
    let rndB = 1 + Math.random() * 1;

    for (let i = 0; i <= stepsLoop; i++) {
      let angleDeg = (360 / steps) * i;
      let angleRad = (angleDeg * Math.PI) / 180;

      rndA = 2 + Math.random() * 5;
      rndB = 2 + Math.random() * 5;
      radiusFactor = 0.3 + radiusFactor * (Math.random() * 1.1);
      angleRad = angleRad * 1.1 - angleRad / 10;

      this.drawStep(angleRad, radiusFactor);
    }

    this.drawStepLines();
  }

  drawStep(angleRad, radiusFactor) {
    const ctx = this.view.ctx;
    const centerX = this.x;
    const centerY = this.y;
    const radius = this.radius * radiusFactor;

    const rnd = 1 + Math.random() * 2;

    let x = radius * rnd * Math.sin(angleRad);
    let y = radius * rnd * -Math.cos(angleRad);

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
    ctx.fillStyle = 'rgba(255, 0, 0, 0.05)';
    ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
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
