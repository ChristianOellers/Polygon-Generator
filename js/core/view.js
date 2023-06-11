class View {
  constructor(props) {
    this.canvas = document.getElementById(props.domElementId)
    this.ctx = this.canvas.getContext("2d")

    this.width = this.canvas.width
    this.height = this.canvas.height
    this.centerX = this.width / 2
    this.centerY = this.height / 2
  }
}
