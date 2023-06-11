const clearCanvas = window.clear;

class Loop {
  constructor(props) {
    this.controls = props.controls; // Class: *
    this.stage = props.stage; // Class: Stage
    this.view = props.view; // Class: View
  }

  run() {
    this.drawObjects();
  }

  drawObjects() {
    const view = this.view;
    const objects = this.stage.objects;

    clearCanvas(view.canvas, view.ctx);

    objects.forEach((item, _index) => {
      item.draw();
    });
  }
}
